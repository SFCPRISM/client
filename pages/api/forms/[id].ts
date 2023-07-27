import { NextApiRequest, NextApiResponse } from "next";
import { findForm } from "./_findForm";
import Cors from "cors";
import { initMiddleware } from "../_initMiddleware";

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: /stellenwerk\.ch$/,
    methods: ["GET", "POST", "OPTIONS", "HEAD"],
  })
);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  await cors(request, response);

  const { id } = request.query;

  if (typeof id !== "string") {
    response.status(500).send("invalid request");
  }

  const acceptLanguageHeader = request.headers?.["accept-language"];
  const language =
    typeof acceptLanguageHeader === "string" ? acceptLanguageHeader : "de";

  try {
    const formData = await findForm(id as string, language);

    if (formData) {
      response.status(200).json({ formData });
    } else {
      response.status(404).send("form not found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
}

export default handler;
