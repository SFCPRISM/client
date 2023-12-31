export const isRequired = (value: any) => (value ? undefined : "Required");
export const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number" : undefined;
export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
