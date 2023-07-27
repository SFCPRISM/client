import { RecordResult } from "jsforce";
import Cors from "cors";
import { initMiddleware } from "../_initMiddleware";
import { NextApiRequest, NextApiResponse } from "next";
import {
  createJsForceConnection,
  getJsForceConnection,
} from "./_jsForceConnection";

export interface IFormFile {
  data: string;
  name?: string;
  size?: string;
  attachmentParentId?: string;
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: /stellenwerk\.ch$/,
    methods: ["POST", "OPTIONS", "HEAD"],
  })
);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  await cors(request, response);

  if (request.query.init === "true") {
    try {
      await createJsForceConnection();
      response.status(200).send({});
    } catch (error) {
      return response.status(500).send(error.message);
    }
  } else if (!request.body.file || !request.body.fieldId) {
    response.status(500).send("Missing file or fieldId");
  } else {
    const file: IFormFile = request.body.file;
    const fieldId = request.body.fieldId;

    let attachmentIds: string[] = [];
    const attachments = [
      {
        body: file.data,
        parentId: file.attachmentParentId || "0039E00001FxDnIQAV",
        name: file.name || "new_attachment",
      },
    ];

    const connection = await getJsForceConnection();

    try {
      await connection
        .sobject("Attachment")
        .create(attachments, function (error, recordResults: RecordResult[]) {
          if (error) {
            Promise.reject(error);
          }

          if (!recordResults?.length) {
            console.log("attachment name: ", attachments[0].name);
            console.log("Connection userInfo: ", connection._userInfo);
            console.warn("No record results provided on attachment creation.");
          } else {
            recordResults.forEach((recordResult) => {
              if (recordResult.success) {
                attachmentIds.push(recordResult.id);
              }
            });
          }
        });
    } catch (error) {
      return response.status(500).send(error.message);
    }

    if (attachmentIds.length !== 1) {
      const error = new Error("Something went wrong creating an attachment");
      return Promise.reject(error);
    }

    return response.status(200).json({
      fieldId,
      attachmentId: attachmentIds[0],
    });
  }
}

export default handler;
