import jsforce, { Connection } from "jsforce";

/** @link https://jsforce.github.io/document/#connection */
export let currentJsForceConnection: Connection;

export async function createJsForceConnection(): Promise<Connection> {
  return new Promise((resolve, reject) => {
    checkConnectionRequirements();

    currentJsForceConnection = new jsforce.Connection({
      loginUrl: process.env.SF_LOGIN_URL,
    });

    currentJsForceConnection.login(
      process.env.SF_USER as string,
      ((process.env.SF_PASS as string) + process.env.SF_TOKEN) as string,
      (error, _userInfo) => {
        if (error) {
          console.error(error);
          reject(error);
        }

        console.log("connected");
        resolve(currentJsForceConnection);
      }
    );
  });
}

export async function getJsForceConnection(): Connection {
  // assert whatever you feel is necessary (is alive, logged in, ...)
  if (!currentJsForceConnection) {
    console.log("creating connection");
    return await createJsForceConnection();
  }

  return currentJsForceConnection;
}

function checkConnectionRequirements() {
  if (
    !process.env.SF_USER ||
    !process.env.SF_PASS ||
    !process.env.SF_TOKEN ||
    !process.env.SF_LOGIN_URL
  ) {
    console.error(
      "Cannot start app: missing mandatory configuration. Check your .env file."
    );
  }
}
