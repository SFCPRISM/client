import React, { FC } from "react";
import { FormComposer } from "./form/formComposer/formComposer";
import { useFormService } from "./services/formService";
import { CircularProgress } from "@material-ui/core";
// import * as Sentry from '@sentry/react'
import { ErrorView } from "./views/errorView";
import { ApplicationFormType, ErrorType } from "./types";
import { LayoutWrapper } from "./views/layout";
import { gaSendEvent } from "./helpers/tracking";
import { useRouter } from "next/router";
import { ErrorBoundary } from "./helpers/errorBoundary";

interface IAppState {
  jobOfferId: string | null;
  language: string;
  formType: ApplicationFormType | null;
}

export const APP_STATE: IAppState = {
  jobOfferId: null,
  language: "de",
  formType: null,
};

const onError = (error: Error) => {
  const label = error.message;
  gaSendEvent({ action: "AMS", category: "error", label });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const JobApplicationForm: FC<{ jobOfferId: string }> = ({
  jobOfferId,
}) => {
  const { locale } = useRouter();

  return (
    <LayoutWrapper>
      {!jobOfferId ? (
        <ErrorView errorType={ErrorType.MissingJobOfferId} />
      ) : (
        // <Sentry.ErrorBoundary fallback={ErrorView} onError={onError}>
        <ErrorBoundary FallbackComponent={ErrorView}>
          <JobApplication jobOfferId={jobOfferId} language={locale} />
        </ErrorBoundary>
        // </Sentry.ErrorBoundary>
      )}
    </LayoutWrapper>
  );
};

interface IJobApplicationprops {
  jobOfferId: string;
  language: string;
}

const JobApplication: FC<IJobApplicationprops> = ({ jobOfferId, language }) => {
  const { data, status, error } = useFormService({
    action: "GET",
    jobOfferId,
    language,
  });
  APP_STATE.jobOfferId = jobOfferId;
  APP_STATE.language = language;
  APP_STATE.formType = data?.formType ?? null;

  switch (status) {
    case "idle":
    case "pending":
      return (
        <div
          style={{
            width: "100%",
            minHeight: "calc(100vh - 416px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      );
    case "rejected":
      throw new Error(`${error || ErrorType.Unknown}:${jobOfferId}`);
    case "resolved": {
      if (!data) {
        throw new Error(`${ErrorType.MissingFormConfiguration}:${jobOfferId}`);
      }

      const { formType, steps, preSelection } = data;

      if (!steps.length) {
        throw new Error(`${ErrorType.StepsNotConfigured}:${jobOfferId}`);
      }

      return (
        <FormComposer
          {...{ jobOfferId, formType, steps, preSelectionSteps: preSelection }}
        />
      );
    }
    default:
      throw new Error(`${ErrorType.Unknown}:${jobOfferId}`);
  }
};
