export const getTrimmedDescription = (description: string): string =>
  description.length > 140
    ? `${description.substring(0, 140)}...`
    : description;
