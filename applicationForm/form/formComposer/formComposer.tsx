import React, { useState, useEffect } from "react";
import { IFormStep, IPreselectionStep } from "../formSteps/types";
import { submitFormData, SubmissionStatus } from "../../services/formService";
import { ApplicationFormType, ErrorType } from "../../types";
import { gaSendEvent } from "../../helpers/tracking";
import { IPreselectionData, MainForm, PreselectionForm } from "../forms";
import { useSessionStorageState } from "../../utils";
import { FC } from "react";
import { SubmissionView } from "../../views/submissionView";
import { filterFilesFromFormValues } from "./helpers";
import { useIsLiechtenstein } from "lib/i18n/useLocalizationId";

interface IFormComposerProps {
  jobOfferId: string;
  formType: ApplicationFormType;
  steps: IFormStep[];
  preSelectionSteps?: IPreselectionStep[];
}

type View = "preselection" | "form" | "success";

/** Details: @link https://final-form.org/docs/react-final-form/getting-started  */
export const FormComposer: FC<IFormComposerProps> = ({
  jobOfferId,
  formType,
  steps,
  preSelectionSteps,
}) => {
  const [isPreselectionValid, setIsPreselectionValid] = useState<
    boolean | null
  >(null);
  const [initialFormValues, setInitialFormValues] =
    useSessionStorageState(formType);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [view, setView] = useState<View>(() =>
    preSelectionSteps?.length ? "preselection" : "form"
  );
  const isLiechtenstein = useIsLiechtenstein();

  const onMainFormSubmit = async (values: any) => {
    const formData = { ...values };
    const status = await submitFormData({
      jobOfferId,
      formData,
      isLiechtenstein,
    });
    setInitialFormValues(filterFilesFromFormValues(values));
    setSubmissionStatus(status);
  };

  const onPreselectionFormSubmit = (preselection: IPreselectionData) => {
    const providedValues = Object.values(preselection);

    if (preSelectionSteps?.length && providedValues.length) {
      const desiredValues = preSelectionSteps.flatMap(
        (step) =>
          step.fields
            .map((field) => field.desiredValue)
            .filter((desiredValue) => desiredValue !== undefined) as string[]
      );
      const isEqual =
        JSON.stringify(desiredValues) === JSON.stringify(providedValues);
      setIsPreselectionValid(isEqual);
    }
  };

  useEffect(() => {
    if (submissionStatus === "rejected") {
      throw new Error(`${ErrorType.FailedToSubmit}:${jobOfferId}`);
    }
    if (submissionStatus === "resolved") {
      setView("success");
    }
  }, [submissionStatus, jobOfferId]);

  useEffect(() => {
    if (isPreselectionValid === false) {
      throw new Error(`${ErrorType.PreselectionFailed}:${jobOfferId}`);
    }
    if (isPreselectionValid === true) {
      setView("form");
    }
  }, [isPreselectionValid, jobOfferId]);

  useEffect(() => {
    if (view === "preselection") {
      gaSendEvent({
        action: "AMS",
        category: "preselection",
        label: "started",
      });
    }
    if (view === "form") {
      gaSendEvent({ action: "AMS", category: `${formType}`, label: "started" });
    }
  }, [view, formType]);

  switch (view) {
    case "success":
      return (
        <SubmissionView {...{ setSubmissionStatus, jobOfferId, formType }} />
      );
    case "preselection":
      return (
        <PreselectionForm
          onSubmit={onPreselectionFormSubmit}
          jobOfferId={jobOfferId}
          preSelectionSteps={preSelectionSteps as IPreselectionStep[]}
        />
      );
    default:
    case "form":
      return (
        <MainForm
          onSubmit={onMainFormSubmit}
          jobOfferId={jobOfferId}
          formType={formType}
          steps={steps}
          initialValues={initialFormValues}
        />
      );
  }
};
