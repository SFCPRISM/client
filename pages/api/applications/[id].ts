import { NextApiRequest, NextApiResponse } from "next";
import { createJobApplication } from "./_createJobApplication";
import Cors from "cors";
import { initMiddleware } from "../_initMiddleware";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "30mb",
    },
  },
};

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: /stellenwerk\.ch$/,
    methods: ["GET", "POST", "OPTIONS", "HEAD"],
  })
);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  await cors(request, response);

  if (request.method === "OPTIONS") {
    response.status(204).send("Ok");
  }

  const { id } = request.query;
  let data = request.body;

  if (typeof id !== "string" || !data) {
    response.status(500).send("invalid request");
  } else {
    try {
      await createJobApplication(id as string, data);
      response
        .status(201)
        .json({ success: `Application created for job:${id}` });
    } catch (e) {
      response.status(500).send(e.message);
    }
  }
}

export default handler;
