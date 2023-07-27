import { Box, Container, LinearProgress } from "@material-ui/core";
import React from "react";
import { Form } from "react-final-form";
import { StepComposer } from "./formSteps/stepComposer";
import { IFormStep, IPreselectionStep } from "./formSteps/types";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getTranslation } from "../translations/translations";
import { ApplicationFormType } from "../types";
import { useRouter } from "next/router";
import { Button } from "components/ui/button/Button";
import { Checkboxes } from "mui-rff";
import { useTranslations } from "lib/i18n/translations";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: "middle",
      marginRight: theme.spacing(1),
    },
    formActions: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    progress: {
      width: "100%",
    },
  })
);

export interface IPreselectionData {
  [Key: string]: string;
}

interface IPreselectionFormProps {
  onSubmit: (preselection: IPreselectionData) => void;
  jobOfferId: string;
  preSelectionSteps: IPreselectionStep[];
}

export const PreselectionForm = ({
  onSubmit,
  jobOfferId,
  preSelectionSteps,
}: IPreselectionFormProps) => {
  const classes = useStyles();
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ pristine: true }}
      key={`preselection:${jobOfferId}`}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} data-form-type={`preSelection`}>
            <StepComposer steps={preSelectionSteps} />
            <div className={classes.formActions}>
              <button type={"submit"} className="btn-large">
                Weiter
              </button>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

interface IMainFormProps {
  onSubmit: (values: any) => void;
  jobOfferId: string;
  formType: ApplicationFormType;
  steps: IFormStep[];
  initialValues?: any;
}

export const MainForm = ({
  onSubmit,
  jobOfferId,
  formType,
  steps,
  initialValues,
}: IMainFormProps) => {
  const classes = useStyles();
  const { locale } = useRouter();
  const translations = useTranslations([
    "data_sharing:option1",
    "data_sharing:option2",
    "data_sharing",
    "data_sharing:addition",
  ]);

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, pristine: true }}
      key={`applicationForm:${jobOfferId}`}
      initialValues={initialValues || undefined}
    >
      {({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit} data-form-type={formType}>
            <div
              style={{
                backgroundColor: "#A7B4CB4D",
                paddingTop: "64px",
                paddingBottom: "2px",
              }}
            >
              <Container maxWidth="sm">
                <Box my={4}>
                  <StepComposer steps={steps} />
                </Box>
              </Container>
            </div>
            <div className={classes.formActions}>
              <Container maxWidth="sm">
                <Box my={4}>
                  <div style={{ marginTop: "80px" }}>
                    <div
                      style={{
                        marginBottom: "52px",
                        paddingBottom: "24px",
                        borderBottom: "1px solid #1F4776",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "32px",
                          lineHeight: "36px",
                          marginBottom: "40px",
                        }}
                      >
                        {translations["data_sharing"]} <br />
                        <span style={{ fontWeight: "300", fontSize: "24px" }}>
                          {translations["data_sharing:addition"]}
                        </span>
                      </h2>
                      <div
                        style={{
                          paddingTop: "40px",
                          borderTop: "1px solid #1F4776",
                        }}
                      ></div>
                      <Checkboxes
                        name={"legal:1"}
                        formControlProps={{ margin: "none" }}
                        formGroupProps={{}}
                        formControlLabelProps={{ labelPlacement: "end" }}
                        data={[
                          {
                            label: translations["data_sharing:option1"],
                            value: "agree",
                          },
                        ]}
                        required={true}
                        color={"primary"}
                      />
                      <Checkboxes
                        name={"legal:2"}
                        formControlProps={{ margin: "normal" }}
                        formGroupProps={{}}
                        data={[
                          {
                            label: translations["data_sharing:option2"],
                            value: "privacy policy agreement",
                          },
                        ]}
                        required={true}
                        color={"primary"}
                      />
                    </div>

                    <Button type="submit" variant="contained">
                      {getTranslation("APPLY_NOW", locale)}
                    </Button>

                    {submitting && (
                      <div className={classes.progress}>
                        <LinearProgress color="primary" />
                      </div>
                    )}
                  </div>
                </Box>
              </Container>
            </div>
          </form>
        );
      }}
    </Form>
  );
};
