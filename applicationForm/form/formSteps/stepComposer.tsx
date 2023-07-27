import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { FormFieldComposer } from "../formFields/formFieldComposer";
import { IFormStep } from "./types";
import { useFormState } from "react-final-form";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    step: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(12),
    },
    stepContent: {
      marginBottom: theme.spacing(6),
    },
    stepLabel: {
      // marginBottom: theme.spacing(3)
    },
    actionsContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

interface IStepComposerProps {
  steps: IFormStep[];
}

export const StepComposer = ({ steps }: IStepComposerProps) => {
  const classes = useStyles();
  const env = localStorage.getItem("env") || "false";
  const isDev = /dev/i.test(env);
  const { values } = useFormState({
    subscription: { values: isDev ? true : false },
  });

  return (
    <div className={classes.root}>
      {steps.map((step, index) => (
        <section key={`${step.label}-${index}`} className={classes.step}>
          <Grid
            container
            spacing={3}
            direction={"column"}
            className={classes.stepContent}
            item
            xs={12}
          >
            <Grid item xs={12}>
              <div className={classes.stepLabel}>
                <StepLabel>{step.label}</StepLabel>
              </div>
            </Grid>
            <FormFieldComposer fields={step.fields} />
          </Grid>
        </section>
      ))}

      {isDev && (
        <>
          <code>only visible in dev mode:</code>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

const StepLabel = styled.h2`
  font-size: 40px;
`;
