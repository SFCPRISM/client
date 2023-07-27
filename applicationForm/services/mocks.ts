import { FieldType, InputType } from "../form/formFields/types";
import { ApplicationFormType } from "../types";
import { IGetFormDataApiResponse } from "./formService";

export const fetchedFormDataMock: IGetFormDataApiResponse = {
  jobOfferId: "a0x2p00000dqwl6AAA",
  formType: ApplicationFormType.HighProfile,
  // preSelection: [
  //   {
  //     label: 'Preselection Gruppe 1',
  //     fields: [
  //       {
  //         options: [
  //           {
  //             value: 'yes',
  //             label: 'Ja',
  //           },
  //           {
  //             value: 'no',
  //             label: 'Nein',
  //           },
  //         ],
  //         fieldType: FieldType.Select,
  //         id: 'a2g9E00000160TRQA',
  //         desiredValue: 'yes',
  //         label: 'Question No. 1',
  //         required: true
  //       },
  //       {
  //         options: [
  //           {
  //             value: 'yes',
  //             label: 'Ja',
  //           },
  //           {
  //             value: 'no',
  //             label: 'Nein',
  //           },
  //         ],
  //         fieldType: FieldType.Select,
  //         id: 'a2g9E00000160TRQAY',
  //         desiredValue: 'yes',
  //         label: 'Question No. 2',
  //       },
  //       {
  //         options: [
  //           {
  //             value: 'yes',
  //             label: 'Ja',
  //           },
  //           {
  //             value: 'no',
  //             label: 'Nein',
  //           },
  //         ],
  //         fieldType: FieldType.Select,
  //         id: 'a2g9E00000160TRQAZ',
  //         desiredValue: 'no',
  //         label: 'Question No. 3',
  //       },
  //     ],
  //   },
  // ],
  steps: [
    {
      label: "Persönliche Angaben",
      fields: [
        {
          fieldType: FieldType.Select,
          id: "salutation",
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
          fieldType: FieldType.Input,
          type: InputType.Text,
          id: "firstName",
          label: "Vorname",
          required: true,
        },
        {
          fieldType: FieldType.Input,
          type: InputType.Text,
          id: "lastName",
          label: "Nachname",
        },
        {
          fieldType: FieldType.Input,
          id: "email",
          type: "email",
          label: "Email",
          required: true,
        },
        {
          fieldType: FieldType.Input,
          id: "phone",
          type: "tel",
          label: "Telefon",
        },
        {
          fieldType: FieldType.Input,
          type: InputType.Text,
          id: "address1",
          label: "Adresse",
        },
        {
          fieldType: FieldType.Input,
          type: InputType.Text,
          id: "city",
          label: "Ort",
        },
        {
          fieldType: FieldType.Input,
          id: "zipCode",
          type: "number",
          label: "PLZ",
        },
      ],
    },
    {
      label: "Dokumente",
      fields: [
        {
          fieldType: FieldType.Input,
          type: InputType.File,
          id: "cvFile",
          label: "Hochladen",
          description:
            "Laden Sie Ihren Lebenslauf als PDF-Datei hoch. (max. [maxFileSize])",
          required: true,
        },
        {
          fieldType: FieldType.Input,
          type: InputType.File,
          id: "otherDocuments",
          label: "Hochladen",
          description:
            "Sie können weitere Unterlagen wie z.B. Zeugnisse oder Diplome hochladen. Optimal eine PDF-Datei (max. [maxFiles] Dateien à [maxFileSize])",
          multiple: true,
        },
      ],
    },
    {
      label: "Zusätzliche Angaben",
      fields: [
        {
          fieldType: FieldType.Input,
          type: InputType.Checkbox,
          id: "languages",
          label: "Sprachen",
          layout: "row",
          required: true,
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
          fieldType: FieldType.Select,
          id: "desiredWorkload",
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
          fieldType: FieldType.Textarea,
          id: "desiredSalary",
          label: "Gewünschtes Salär",
        },
        {
          fieldType: FieldType.Textarea,
          id: "comments",
          label: "Preferänzen, Wünsche und Kommentare",
        },
        {
          fieldType: FieldType.Select,
          id: "workArea",
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
          fieldType: FieldType.Input,
          type: InputType.Date,
          id: "availabilityDate",
          label: "Frühestmögliches Startdatum",
        },
      ],
    },
    // {
    //   label: 'In case of Info / Alert',
    //   fields: [
    //     {
    //       fieldType: FieldType.Info,
    //       title: 'You never know',
    //       text: 'This is an informational text field. Can be used to add some additional info.'
    //     }
    //   ]
    // }
  ],
};

// {
//   InputType: InputType.GroupSelect,
//   id: 'languages',
//   label: 'Sprachen',
//   groups: [
//     {
//       label: 'Sprachen wählen',
//       options: [
//         {label: 'Deutsch', value: 'DE'},
//         {label: 'Englisch', value: 'EN'},
//         {label: 'Französisch', value: 'FR'},
//         {label: 'Italienisch', value: 'IT'}
//       ]
//     },
//     {
//       label: 'Skill level',
//       options: [
//         {label: 'Muttersprache', value: 'A1'},
//         {label: 'B2', value: 'B2'},
//       ]
//     }
//   ],
// },

export const dataMock: IGetFormDataApiResponse = {
  jobOfferId: "a0x2p00000dqwl6AAA",
  formType: ApplicationFormType.HighProfile,
  preSelection: [
    {
      label: "Preselection Gruppe 1",
      fields: [
        {
          options: [
            {
              value: "yes",
              label: "Ja",
            },
            {
              value: "no",
              label: "Nein",
            },
          ],
          fieldType: FieldType.Select,
          id: "a2g9E00000160TRQA",
          desiredValue: "yes",
          label: "Question No. 1",
        },
        {
          options: [
            {
              value: "yes",
              label: "Ja",
            },
            {
              value: "no",
              label: "Nein",
            },
          ],
          fieldType: FieldType.Select,
          id: "a2g9E00000160TRQAY",
          desiredValue: "yes",
          label: "Question No. 2",
        },
        {
          options: [
            {
              value: "yes",
              label: "Ja",
            },
            {
              value: "no",
              label: "Nein",
            },
          ],
          fieldType: FieldType.Select,
          id: "a2g9E00000160TRQAZ",
          desiredValue: "no",
          label: "Question No. 3",
        },
      ],
    },
  ],
  steps: [
    {
      label: "Step One",
      fields: [
        {
          fieldType: FieldType.Input,
          type: InputType.Text,
          id: "firstName",
          label: "Vorname",
          required: true,
        },
      ],
    },
    {
      label: "Dokumente",
      fields: [
        {
          fieldType: FieldType.Input,
          type: InputType.File,
          id: "cvFile",
          label: "Hochladen",
          description: "Laden Sie ihren CV hoch",
        },
        {
          fieldType: FieldType.Input,
          type: InputType.File,
          id: "otherDocuments",
          label: "Hochladen",
          description: "Hier können Sie weitere Dokumente hochladen",
          multiple: true,
        },
      ],
    },
  ],
};
