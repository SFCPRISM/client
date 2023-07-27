import { FormField, ISelectField } from "../formFields/types";

export interface IFormStep {
  label: string;
  fields: FormField[];
  description?: string;
}
export interface IPreselectionStep {
  label: string;
  fields: ISelectField[];
  description?: string;
}
