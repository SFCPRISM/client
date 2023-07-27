import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { gaSendEvent } from "../helpers/tracking";
import { SubmissionStatus } from "../services/formService";
import { useRouter } from "next/router";

interface ISuccessViewProps {
  setSubmissionStatus: Dispatch<SetStateAction<SubmissionStatus>>;
  jobOfferId: string;
  formType: string;
}

export const SubmissionView: FC<ISuccessViewProps> = ({
  jobOfferId,
  formType,
}) => {
  const router = useRouter();
  const styles = {
    loading: {
      width: "100%",
      minHeight: "calc(100vh - 416px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const language = document.documentElement.lang || "de";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    gaSendEvent({
      action: "AMS",
      category: `${formType}`,
      label: `success ${jobOfferId}`,
    });

    router.push("/jobs/apply/success");
  }, [formType, jobOfferId, language]);

  return (
    <div style={styles.loading}>
      <CircularProgress color="primary" />
    </div>
  );
};
