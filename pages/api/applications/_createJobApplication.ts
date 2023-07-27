import fetch from "node-fetch";

export const createJobApplication = async (
  id: string,
  applicationData: any
): Promise<any> => {
  const response = await fetch(
    `${process.env.FORCE_APEX_REST_BASE_URL}/jobs/${id}/applications`,
    {
      method: "POST",
      body: JSON.stringify(applicationData, null, 2),
    }
  );

  if (response.ok) {
    return response || Promise.reject(new Error(`Failed to apply to "${id}"`));
  } else {
    const error = new Error(response.statusText) ?? "unknown";
    return Promise.reject(error);
  }
};
