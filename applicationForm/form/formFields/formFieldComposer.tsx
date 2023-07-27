import { Typography, Grid } from "@material-ui/core";
import { TextField, Checkboxes, Select, DatePicker } from "mui-rff";
import { IFormStep } from "../formSteps/types";
import { InputType, FormField, IFileUploadField, FieldType } from "./types";
import { FileField } from "./fileField";
// import "date-fns";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";
import DateFnsUtils from "@date-io/date-fns";

interface IFormFieldComposerProps {
  fields: IFormStep["fields"];
}

export const FormFieldComposer = ({ fields }: IFormFieldComposerProps) => {
  return (
    <>
      {fields.map((fieldData, index) => (
        <Grid item xs={12} key={`formField-${index}`}>
          {getFormField(fieldData)}
        </Grid>
      ))}
    </>
  );
};

const getFormField = (fieldData: FormField) => {
  switch (fieldData.fieldType) {
    case FieldType.Input: {
      switch (fieldData.type) {
        case InputType.Date: {
          const { id, label, required } = fieldData;
          const locale = document.documentElement.lang;

          return (
            <DatePicker
              name={id}
              label={label}
              format="yyyy-MM-dd"
              required={required}
              disablePast
              dateFunsUtils={DateFnsUtils}
              locale={locale === "de" ? deLocale : enLocale}
            />
          );
        }
        case InputType.File: {
          return <FileField fieldData={fieldData as IFileUploadField} />;
        }
        case InputType.Checkbox: {
          const { id, label, options, layout, required } = fieldData;
          const formGroupProps = layout === "row" ? { row: true } : undefined;

          return (
            <Checkboxes
              label={label}
              name={id}
              formControlProps={{ margin: "none" }}
              formGroupProps={formGroupProps}
              data={options}
              required={required}
              color={"primary"}
            />
          );
        }
        case InputType.Text: {
          const { id, label, type, placeholder, required } = fieldData;

          return (
            <TextField
              required={required}
              type={type as any}
              name={id}
              label={label}
              placeholder={placeholder}
              fullWidth
            />
          );
        }
        default: {
          const { id, label, type, placeholder, required } = fieldData;
          const inputProps =
            type === "email"
              ? { pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" }
              : {};

          return (
            <TextField
              required={required}
              type={type as any}
              name={id}
              label={label}
              placeholder={placeholder}
              inputProps={inputProps}
              fullWidth
            />
          );
        }
      }
    }
    case FieldType.Select: {
      const { id, label, options, multiple, required } = fieldData;

      if (!options?.length) {
        return null;
      }

      return (
        <Select
          label={label}
          name={id}
          data={options}
          multiple={multiple}
          required={required}
        />
      );
    }
    case FieldType.Textarea: {
      const { id, label, placeholder, required } = fieldData;

      return (
        <TextField
          required={required}
          type={"text"}
          name={id}
          label={label}
          placeholder={placeholder}
          multiline={true}
          fullWidth
        />
      );
    }
    case FieldType.Info: {
      const { text, title } = fieldData;

      return (
        <div style={{ padding: "24px 0 16px" }}>
          {title && (
            <Typography variant="h6" component="h6" gutterBottom>
              {title}
            </Typography>
          )}
          <Typography>{text}</Typography>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};
