export interface IAttachmentFieldData {
  /** The id of the salesForce field where the attachment info should be stored */
  fieldId: string;
  formFiles: IFormFile[];
}

export interface IFormFile {
  data: string;
  name?: string;
  size?: string;
  attachmentParentId?: string;
}

export const extractAttachmentFields = (
  data: any,
  attachmentFieldIds: string[]
): IAttachmentFieldData[] | null => {
  const attachments: IAttachmentFieldData[] = [];

  attachmentFieldIds.forEach((id) => {
    if (data[id]?.length)
      attachments.push({
        fieldId: id,
        formFiles: data[id],
      });
  });

  if (!attachments.length) {
    return null;
  }

  return attachments;
};
