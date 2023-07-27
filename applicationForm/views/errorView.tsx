import { useRouter } from "next/router";
import React, { FC } from "react";
import { APP_STATE } from "../App";
import { getTranslation } from "../translations/translations";
import { ErrorType } from "../types";

declare global {
  interface Window {
    currentJobTitle?: string | undefined;
  }
}

export interface IErrorViewProps {
  errorType: ErrorType;
}

export const ErrorView: FC<IErrorViewProps> = ({ errorType }) => {
  const { locale } = useRouter();
  const { title, description, buttonText, buttonLink } = getErrorContent(
    errorType,
    locale
  );

  const styles = {
    title: {
      textAlign: "center",
    },
    image: {
      width: "300px",
    },
    imageWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  };

  // window.location.hash = `error`;

  return (
    <>
      <div>
        {!ErrorType.PreselectionFailed && (
          <div style={styles.imageWrapper}>
            {/* <img
              style={styles.image}
              src="https://test.stellenwerk.ch/public/assets/images/application-error.png"
              alt="error"
            /> */}
          </div>
        )}

        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button
        className="btn-large"
        onClick={() => (window.location.href = buttonLink)}
      >
        {buttonText}
      </button>
    </>
  );
};

const getErrorContent = (type: ErrorType, locale: string) => {
  let title = getTranslation("SOMETHING_WENT_WRONG", locale);
  let description: string;
  let buttonText = getTranslation("TO_START_PAGE", locale);
  let buttonLink = "/";

  const { jobOfferId } = APP_STATE;
  // TODO: Refactor me
  const jobTitle = null;

  switch (type) {
    case ErrorType.StepsNotConfigured:
    case ErrorType.MissingFormConfiguration:
      description =
        getTranslation(ErrorType.MissingFormConfiguration, locale) +
        getTranslation("APPLY_BY_MAIL_DESCRIPTION", locale);
      buttonText = getTranslation("APPLY_BY_MAIL", locale);
      buttonLink = `mailto:info@stellenwerk.ch?subject=Bewerbung: ${jobTitle} (${jobOfferId})`;
      break;
    case ErrorType.PreselectionFailed:
      title = getTranslation("WE_ARE_SORRY", locale);
      description = getTranslation(ErrorType.PreselectionFailed, locale);
      buttonText = getTranslation("FIND_ANOTHER_JOB", locale);
      buttonLink = "/jobs";
      break;
    case ErrorType.MissingJobOfferId:
      description = getTranslation(ErrorType.MissingJobOfferId, locale);
      buttonText = getTranslation("FIND_ANOTHER_JOB", locale);
      buttonLink = "/jobs";
      break;
    case ErrorType.Unknown:
    default:
      description = getTranslation("APPLY_BY_MAIL_DESCRIPTION", locale);
      buttonText = getTranslation("APPLY_BY_MAIL", locale);
      buttonLink = `mailto:info@stellenwerk.ch?subject=Bewerbung: ${jobTitle} (${jobOfferId})`;
  }

  return { title, description, buttonText, buttonLink };
};
