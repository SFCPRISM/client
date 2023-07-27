import { NextApiRequest, NextApiResponse } from "next";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { key } = request.query;

  if (key !== "f81d6422-8b72-42d6-9d78-063a32900e16") {
    return response.status(500).send("update failed");
  }

  try {
    await fetch(
      `https://cms.stellenwerk.ch/index.php/actions/feed-me/feeds/run-task?direct=1&feedId=1&passkey=xkctranfmf`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.redirect("/jobs/update");
  } catch (error) {
    return response.status(500).send(error.message);
  }
}

export default handler;
