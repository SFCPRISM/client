export function filterFilesFromFormValues(formData: any) {
  let valuesWithoutFiles = {};

  for (const property in formData) {
    if (!formData[property][0]?.data) {
      valuesWithoutFiles = Object.assign(valuesWithoutFiles, {
        [property]: formData[property],
      });
    }
  }

  return valuesWithoutFiles;
}

export function retrieveAttachmentFieldIds(formData: any) {
  const attachmentFieldIds = [];

  for (const property in formData) {
    if (formData[property][0]?.data) {
      attachmentFieldIds.push(property);
    }
  }

  return attachmentFieldIds;
}
