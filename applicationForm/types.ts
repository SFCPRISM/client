export enum ApplicationFormType {
  HighProfile = "HIGH_PROFILE",
  Standard = "STANDARD",
  TemporaryWorkers = "TEMPORARY_WORKERS",
  Spontaneous = "SPONTANEOUS",
}

export enum ErrorType {
  StepsNotConfigured = "STEPS_NOT_CONFIGURED",
  PreselectionFailed = "PRESELECTION_FAILED",
  MissingJobOfferId = "MISSING_JOB_OFFER_ID",
  MissingFormConfiguration = "MISSING_FORM_CONFIGURATION",
  FailedToSubmit = "FAILED_TO_SUBMIT",
  Unknown = "UNKNOWN",
}
