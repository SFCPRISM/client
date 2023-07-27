import React, { FC, useState, useRef, useEffect, useMemo } from "react";
import { useField } from "react-final-form";
import { IFileUploadField } from "./types";
import { isRequired } from "./validators";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Divider, Chip } from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { gaSendEvent, IGaSendEvent } from "../../helpers/tracking";
import { Alert } from "@material-ui/lab";
import { DenseSpanButton } from "components/ui/button/Button";
import { ArrowRight } from "@material-ui/icons";

interface IFileFieldProps {
  fieldData: IFileUploadField;
}

let eventsToSend: IGaSendEvent[] = [];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadField: {
      marginBottom: theme.spacing(3),
    },
    uploadDescription: {
      paddingBottom: theme.spacing(1),
    },
    input: {
      opacity: 0,
      position: "absolute",
      width: "1px",
    },
    filePreviewArea: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    filePreviewItem: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);

interface IFile {
  data: string;
  name: string;
  file: string;
  attachmentParentId?: string;
}

// TODO: https://stackoverflow.com/questions/54020719/validating-file-size-and-format-with-yup
export const FileField: FC<IFileFieldProps> = ({ fieldData }) => {
  const classes = useStyles();
  const inputField = useRef(null);
  const validFileTypes = useMemo(
    () => [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "application/pdf",
      "image/jpeg",
      "image/jpg",
    ],
    []
  );
  const {
    id,
    label,
    required,
    description,
    multiple,
    // maxFileSize = 5242880, // in Bytes = 5 MB
    maxFiles: maxFileCount = 5,
    attachmentParentId,
  } = fieldData;

  // we use a slightly lower maxFileSize (-0.5 MB) due to limitations
  // https://vercel.com/docs/concepts/limits/overview#serverless-function-payload-size-limit
  const maxFileSize = 5242880 - 524288;

  const [files, setFiles] = useState<FileList | null>(null);
  const [filesPreview, setFilesPreview] = useState<any[]>([]);
  const [uploadError, setUploadError] = useState<Error | null>(null);

  const {
    input: { value, onChange, ...input },
  } = useField(id, {
    type: "file",
    validate: required ? isRequired : undefined,
    subscription: { touched: true, error: true, value: true },
  });

  useEffect(() => {
    async function handleFiles(files: FileList): Promise<void> {
      try {
        setUploadError(null);
        let encodedFiles = await fileListToBase64(
          files,
          validFileTypes,
          maxFileSize,
          maxFileCount,
          attachmentParentId,
          setUploadError
        );
        if (encodedFiles?.length) {
          encodedFiles = encodedFiles.map((file: IFile) => {
            let base64Content = file.data.split(",");
            if (base64Content.length > 1) {
              const base64Data = base64Content.pop();

              return { ...file, data: base64Data };
            }
          });
          if (multiple && filesPreview.length) {
            encodedFiles.unshift(...filesPreview);

            if (encodedFiles.length > maxFileCount) {
              setUploadError(new Error("TO_MANY_FILES"));
              encodedFiles.splice(maxFileCount);
            }
          }

          setFilesPreview(encodedFiles);
          onChange(encodedFiles);
        }
      } catch (error) {
        setUploadError(error);
        eventsToSend.push({
          action: "AMS",
          category: "error",
          label: `FILE_UPLOAD ${error}`,
        });
      } finally {
        eventsToSend.map((eventToSend) => gaSendEvent(eventToSend));
        eventsToSend = [];
      }
    }

    if (files) {
      handleFiles(files);
      setFiles(null);
    }
  }, [
    files,
    filesPreview,
    id,
    maxFileCount,
    maxFileSize,
    multiple,
    onChange,
    validFileTypes,
  ]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (files) {
      setFiles(files);
    }
  };

  const deleteFile = (fileName: string) => {
    let newFiles = filesPreview.filter((file) => file.name !== fileName);

    setFilesPreview(newFiles);
    onChange(newFiles);

    // Hard reset input value to adress reuploading a uploaded or deleted file
    if (!newFiles.length) {
      const el = document?.querySelector(`#${id}`) as HTMLInputElement;
      if (el) {
        el.value = "";
      }
    }
  };

  return (
    <>
      <div className={classes.uploadField}>
        {uploadError && getErrorEl(uploadError.message)}
        <div className={classes.uploadDescription}>
          {getInterpolatedDescription(maxFileSize, maxFileCount, description)}{" "}
          {required && (
            <sup>
              <strong style={{ color: "red" }}>*</strong>
            </sup>
          )}
        </div>
        <div>
          <input
            {...input}
            accept={validFileTypes.join("|")}
            className={classes.input}
            id={id}
            multiple={multiple ?? false}
            type="file"
            onChange={(event) => handleChange(event)}
            ref={inputField}
            required={required}
          />
          <label htmlFor={id}>
            <DenseSpanButton variant="outlined">{label}</DenseSpanButton>
          </label>
        </div>
        {filesPreview && (
          <div className={classes.filePreviewArea}>
            {Array.from(filesPreview).map((file: File, index: number) => {
              const { name, size } = file;

              // Shorten chip name for mobile optimization
              const maxLength = 32;
              const trimmedName =
                name.length > maxLength
                  ? name.substring(0, maxLength - 3) + "..."
                  : name;

              return (
                <Chip
                  key={`${name}:${index}`}
                  size="small"
                  icon={<AttachmentIcon />}
                  label={`${trimmedName} ${size}`}
                  onDelete={() => deleteFile(name)}
                  color="primary"
                  variant="outlined"
                  className={classes.filePreviewItem}
                />
              );
            })}
          </div>
        )}
      </div>
      <Divider variant="fullWidth" />
    </>
  );
};

function returnFileSize(number: number) {
  if (number < 1024) {
    return number + " bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + " KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + " MB";
  }
}

async function fileListToBase64(
  fileList: FileList,
  validFileTypes: string[],
  maxFileSize: number,
  maxFileCount: number,
  attachmentParentId: string | null,
  setUploadError: any
) {
  function getBase64(file: File) {
    const reader = new FileReader();

    return new Promise((resolve) => {
      reader.onload = (ev: ProgressEvent<FileReader>) => {
        resolve({
          name: file.name,
          size: returnFileSize(file.size),
          data: ev?.target?.result,
          attachmentParentId,
        });
      };
      reader.readAsDataURL(file);
    });
  }

  const promises = [];

  // loop through fileList with for loop
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];

    if (i + 1 > maxFileCount) {
      setUploadError(new Error("TO_MANY_FILES"));
    } else if (file.size > maxFileSize) {
      setUploadError(new Error("FILE_TO_LARGE"));
    } else if (
      /\.(pdf|doc|docx|jpe?g)$/i.test(file.name) &&
      validFileTypes.includes(file.type)
    ) {
      promises.push(getBase64(file));
    } else {
      promises.push("INVALID_FILE_TYPE");
    }

    const fileSizeTrackingValue = Number(file.size) / 1048576;
    eventsToSend.push({
      action: "AMS",
      category: "tracking",
      label: `FILE_SIZE max ${returnFileSize(maxFileSize)}`,
      value: Number(fileSizeTrackingValue.toFixed(4)),
    });
  }

  if (promises.includes("INVALID_FILE_TYPE")) {
    throw new Error("INVALID_FILE_TYPE");
  }

  // array with base64 strings
  return await Promise.all(promises);
}

const getErrorEl = (errorMessage: string) => {
  let text: string;
  switch (errorMessage) {
    case "INVALID_FILE_TYPE": {
      text =
        "Sie haben versucht eine Datei mit ungültigem Datei-Format hochzuladen.";
      break;
    }
    case "TO_MANY_FILES": {
      text =
        "Sie haben zu viele Dateien ausgewählt. Wir haben die maximale Anzahl berücksichtigt.";
      break;
    }
    case "FILE_TO_LARGE": {
      text = "Sie haben versucht eine zu grosse Datei hochzuladen.";
      break;
    }
    default:
      text =
        "Es ist ein Fehler aufgetreten. Laden Sie eine andere Datei hoch oder versuchen Sie es erneut.";
      break;
  }
  return (
    <>
      <div style={{ padding: "0 0 24px" }}>
        <Alert severity="error" style={{ border: "1px solid #ff1744" }}>
          {text}
        </Alert>
      </div>

      {errorMessage === "FILE_TO_LARGE" && (
        <div style={{ padding: "0 0 24px" }}>
          <Alert severity="info" style={{ border: "1px solid #1F4776" }}>
            Sie können grosse PDF-Dateien online verkleinern
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "6px",
              }}
            >
              <ArrowRight height={12} />
              <a
                href="https://smallpdf.com/compress-pdf"
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 600, borderBottom: "1px solid #1F4776" }}
              >
                PDF-Datei-Grösse reduzieren
              </a>
            </div>
          </Alert>
        </div>
      )}
    </>
  );
};

const getInterpolatedDescription = (
  maxFileSize: number,
  maxFileCount: number,
  description?: string
) =>
  description
    ? description
        .replace("[maxFileSize]", `${returnFileSize(maxFileSize)}`)
        .replace("[maxFiles]", `${maxFileCount}`)
    : null;
