import { ApplicationFormType } from "./types";

type FormField =
  | IInputField
  | IFileUploadField
  | ICheckboxField
  | ISelectField
  | IDateField
  | IInfoField;

interface IFormStep {
  label: string;
  fields: FormField[];
  description?: string;
}

enum InputType {
  Input = "Input",
  Checkbox = "CHECKBOX",
  Select = "SELECT",
  FileUpload = "FILE_UPLOAD",
  Date = "DATE",
  Info = "INFO",
}

interface IFieldBase {
  name: string;
  label: string;
  validation?: {
    required: boolean;
    message?: string;
  };
}

interface IInputField extends IFieldBase {
  InputType: InputType.Input;
  /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types */
  type: "text" | "tel" | "email" | "number";
  multiline?: boolean;
  description?: string;
  placeholder?: string;
}

interface IFileUploadField extends IFieldBase {
  InputType: InputType.FileUpload;
  description?: string;
  multiple?: boolean;
}

interface ICheckboxField extends Omit<IFieldBase, "label"> {
  InputType: InputType.Checkbox;
  options: ISelectOption[];
  /** @default 'column' */
  layout?: "row" | "column";
  label?: string;
}

interface ISelectField extends IFieldBase {
  InputType: InputType.Select;
  options: ISelectOption[];
  multiple?: boolean;
}

interface ISelectOption {
  label: string;
  value: string | number;
}

interface IDateField extends IFieldBase {
  InputType: InputType.Date;
  locale: "en-US" | "de";
}

interface IInfoField {
  InputType: InputType.Info;
  text: string;
  title?: string;
}

interface IGetFormDataApiResponse {
  jobOfferId: string;
  formType: ApplicationFormType;
  steps: IFormStep[];
}

/**
 * As example: Expected response from API
 * @example
 * `GET /forms/findByJobOfferId?jobOfferId=a0x2p00000dqza3`
 *	`paths:
 *		/forms/findByJobOfferId:
 *			get:
 *				parameters:
 *					- in: query
 *					  name: jobOfferId
 *					  schema:
 *					  	type: string
 *					  description: The id of the jobOffer
 */
export const fetchedFormDataExample: IGetFormDataApiResponse = {
  jobOfferId: "a0x2p00000dqza3",
  formType: ApplicationFormType.HighProfile,
  steps: [
    {
      label: "Persönliche Angaben",
      fields: [
        {
          InputType: InputType.Select,
          name: "salutation",
          label: "Anrede",
          options: [
            {
              label: "Herr",
              value: "male",
            },
            {
              label: "Frau",
              value: "female",
            },
          ],
        },
        {
          InputType: InputType.Input,
          name: "firstName",
          type: "text",
          label: "Vorname",
          validation: {
            required: true,
            message: "Geben Sie Ihren Vornamen an.",
          },
        },
        {
          InputType: InputType.Input,
          name: "lastName",
          type: "text",
          label: "Nachname",
        },
        {
          InputType: InputType.Input,
          name: "email",
          type: "email",
          label: "Email",
        },
        {
          InputType: InputType.Input,
          name: "phone",
          type: "tel",
          label: "Telefon",
        },
        {
          InputType: InputType.Input,
          name: "address1",
          type: "text",
          label: "Adresse",
        },
        {
          InputType: InputType.Input,
          name: "city",
          type: "text",
          label: "Ort",
        },
        {
          InputType: InputType.Input,
          name: "zipCode",
          type: "number",
          label: "PLZ",
        },
      ],
    },
    {
      label: "Dokumente",
      fields: [
        {
          InputType: InputType.FileUpload,
          name: "cvFile",
          label: "Hochladen",
          description: "Laden Sie ihren CV hoch",
          validation: {
            required: false,
          },
        },
        {
          InputType: InputType.FileUpload,
          name: "otherDocuments",
          label: "Hochladen",
          description: "Hier können Sie weitere Dokumente hochladen",
          multiple: true,
        },
      ],
    },
    {
      label: "Zusätzliche Angaben",
      fields: [
        {
          InputType: InputType.Checkbox,
          name: "languages",
          label: "Sprachen",
          layout: "row",
          options: [
            {
              label: "Deutsch",
              value: "DE",
            },
            {
              label: "Englisch",
              value: "EN",
            },
            {
              label: "Französisch",
              value: "FR",
            },
            {
              label: "Italienisch",
              value: "IT",
            },
            {
              label: "Andere",
              value: "other",
            },
          ],
        },
        {
          InputType: InputType.Select,
          name: "desiredWorkload",
          label: "Gewünschtes Arbeitspensum",
          options: [
            {
              label: "100%",
              value: "100",
            },
            {
              label: "80-100%",
              value: "80-100",
            },
            {
              label: "60-80%",
              value: "60-80",
            },
            {
              label: "20-60%",
              value: "20-60",
            },
          ],
        },
        {
          InputType: InputType.Input,
          name: "desiredSalary",
          type: "text",
          label: "Gewünschtes Salär",
          multiline: true,
        },
        {
          InputType: InputType.Input,
          name: "comments",
          type: "text",
          label: "Preferänzen, Wünsche und Kommentare",
          multiline: true,
        },
        {
          InputType: InputType.Select,
          name: "workArea",
          multiple: true,
          label: "Multiple Select als Alternative zu Checkboxes",
          options: [
            {
              label: "Graubünden",
              value: "GR",
            },
            {
              label: "Zürich",
              value: "ZH",
            },
            {
              label: "Luzern",
              value: "LU",
            },
          ],
        },
        {
          InputType: InputType.Date,
          name: "availabilityDate",
          label: "Frühestmögliches Startdatum",
          locale: "de",
        },
      ],
    },
    {
      label: "In case of Info / Alert",
      fields: [
        {
          InputType: InputType.Info,
          title: "You never know",
          text: "This is an informational text field. Can be used to add some additional info.",
        },
      ],
    },
  ],
};
