import { IFormStep, IPreselectionStep } from "../form/formSteps/types";
import { useState, useEffect } from "react";
import { fetchedFormDataMock } from "./mocks";
import { ErrorType, ApplicationFormType } from "../types";
import { retrieveAttachmentFieldIds } from "applicationForm/form/formComposer/helpers";
import {
  extractAttachmentFields,
  IAttachmentFieldData,
  IFormFile,
} from "./helpers";
import { trackGoal } from "fathom-client";

export interface IGetFormDataRequestBody {
  jobOfferId: string;
  /** @example "de" | "en" */
  language: string;
}

export interface IGetFormDataApiResponse {
  jobOfferId: string;
  formType: ApplicationFormType;
  steps: IFormStep[];
  preSelection?: IPreselectionStep[];
}

interface IUseFormServiceProps {
  jobOfferId: IGetFormDataRequestBody["jobOfferId"] | null;
  language: IGetFormDataRequestBody["language"];
}

interface IGetFormDataProps extends IUseFormServiceProps {
  action: "GET";
}

type FormServiceStatus = "pending" | "resolved" | "rejected" | "idle";

export const useFormService = ({ jobOfferId, language }: IGetFormDataProps) => {
  const [status, setStatus] = useState<FormServiceStatus>("idle");
  const [data, setData] = useState<IGetFormDataApiResponse>();
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    setStatus("pending");

    if (!jobOfferId) {
      setError(ErrorType.MissingJobOfferId);
      setStatus("rejected");
      return;
    }

    fetch(`/api/forms/${jobOfferId}`, {
      headers: {
        Accept: "application/json",
        "Accept-Language": language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          setData(data.formData);
          setStatus("resolved");
        },
        (_error) => {
          setError(ErrorType.MissingFormConfiguration);
          setStatus("rejected");
        }
      );
  }, [jobOfferId, language]);

  return { data, status, error };
};

interface ISubmitFormDataProps {
  jobOfferId: string;
  formData: any;
  isLiechtenstein: boolean;
}

export type SubmissionStatus = "idle" | "pending" | "rejected" | "resolved";

export const submitFormData = async ({
  jobOfferId,
  formData,
  isLiechtenstein,
}: ISubmitFormDataProps): Promise<SubmissionStatus> => {
  let status: SubmissionStatus = "pending";
  const attachmentFieldIds = retrieveAttachmentFieldIds(formData);
  const attachmentFields = extractAttachmentFields(
    formData,
    attachmentFieldIds
  );

  let attachmentData = {};
  if (attachmentFields) {
    try {
      await initAttachmentUpload();
      const attachments = await createAttachments(attachmentFields);
      attachmentData = mergeBasedOnKey(attachments);
    } catch {
      if (isLiechtenstein) {
        // Application Process Attachment Creation Error LI
        trackGoal("VOUTKWHM", null);
      } else {
        // Application Process Attachment Creation Error CH
        trackGoal("K2RWR8RV", null);
      }
      status = "rejected";
      return status;
    }
  }

  await fetch(`/api/applications/${jobOfferId}`, {
    method: "POST",
    body: JSON.stringify({ ...formData, ...attachmentData }, null, 2),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        if (isLiechtenstein) {
          // Application Process Successfull LI
          trackGoal("JVZEOA5A", null);
        } else {
          // Application Process Successfull CH
          trackGoal("RFLYNMRD", null);
        }
        status = "resolved";
      } else {
        status = "rejected";
      }
    })
    .catch((_error: Error) => {
      if (isLiechtenstein) {
        // Application Process Error LI
        trackGoal("4YFSUYVU", null);
      } else {
        // Application Process Error CH
        trackGoal("GDPCOEI0", null);
      }
      status = "rejected";
    });

  return status;
};

interface IPromisedAttachmentUpload {
  fieldId: string;
  attachmentId: string;
}

const createAttachments = async (attachmentFields: IAttachmentFieldData[]) => {
  const promises: Promise<IPromisedAttachmentUpload>[] = [];

  attachmentFields.forEach((attachmentField) => {
    attachmentField.formFiles.forEach((formFile) =>
      promises.push(uploadAttachments(attachmentField.fieldId, formFile))
    );
  });

  const values = await Promise.all(promises);
  return values;
};

const uploadAttachments = async (
  fieldId: string,
  formFile: IFormFile
): Promise<IPromisedAttachmentUpload> => {
  const uploadedAttachmentData = await fetch(`/api/attachments`, {
    method: "POST",
    body: JSON.stringify(
      {
        fieldId: fieldId,
        file: formFile,
      },
      null,
      2
    ),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return uploadedAttachmentData.json();
};

function mergeBasedOnKey(list: IPromisedAttachmentUpload[]) {
  return list.reduce((acc, next: IPromisedAttachmentUpload) => {
    const { fieldId, attachmentId } = next;

    acc[fieldId] =
      fieldId in acc ? [...acc[fieldId], attachmentId] : [attachmentId];

    return acc;
  }, {});
}

const initAttachmentUpload = async () => {
  await fetch(`/api/attachments?init=true`, {
    method: "POST",
  });
};
