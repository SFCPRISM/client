import fetch from "node-fetch";

export const findForm = async (id: string, language: string): Promise<any> => {
  const response = await fetch(
    `${process.env.FORCE_APEX_REST_BASE_URL}/jobs/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Accept-Language": language,
      },
    }
  );

  if (response.ok) {
    return (
      (await response.json()) ||
      Promise.reject(new Error(`No form for the jobOffer "${id} found"`))
    );
  } else {
    const error = new Error(response.statusText) ?? "unknown";
    return Promise.reject(error);
  }
};
