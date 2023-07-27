export type FormField =
  | ITextareaField
  | ISelectField
  | IInputField
  | ITextField
  | IFileUploadField
  | ICheckboxField
  | IDateField
  | IInfoField;
export enum FieldType {
  Input = "INPUT",
  Select = "SELECT",
  Textarea = "TEXTAREA",
  Info = "INFO",
}

export enum InputType {
  Text = "text",
  Checkbox = "checkbox",
  File = "file",
  Date = "date",
}

export interface IFieldBase {
  id: string;
  label: string;
  required?: boolean;
  validationMessage?: string;
}

export interface ITextareaField extends IFieldBase {
  fieldType: FieldType.Textarea;
  description?: string;
  placeholder?: string;
}

export interface ISelectField extends IFieldBase {
  fieldType: FieldType.Select;
  options: IInputOption[];
  multiple?: boolean;
  /** Preselection only */
  desiredValue?: string;
}

export interface IInputField extends IFieldBase {
  fieldType: FieldType.Input;
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types */
  type: "email" | "tel" | "number";
  description?: string;
  placeholder?: string;
}

export interface ITextField extends Omit<IInputField, "type"> {
  type: InputType.Text;
}

export interface IFileUploadField extends Omit<IInputField, "type"> {
  type: InputType.File;
  attachmentParentId?: string;
  description?: string;
  multiple?: boolean;
  maxFileSize?: number;
  maxFiles?: number;
}

export interface ICheckboxField extends Omit<IFieldBase, "label"> {
  fieldType: FieldType.Input;
  type: InputType.Checkbox;
  options: IInputOption[];
  /** @default 'column' */
  layout?: "row" | "column";
  label?: string;
}

export interface IInputOption {
  label: string;
  value: string | number;
}

export interface IDateField extends IFieldBase {
  fieldType: FieldType.Input;
  type: InputType.Date;
}

export interface IInfoField {
  fieldType: FieldType.Info;
  text: string;
  title?: string;
}
