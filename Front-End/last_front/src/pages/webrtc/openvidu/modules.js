import axios from "axios";

export const APPLICATION_SERVER_URL = "http://localhost:5000/";

export const getToken = async (mySessionId) => {
  const sessionId = await createSession(mySessionId);
  return await createToken(sessionId);
};

const createSession = async (sessionId) => {
  const response = await axios.post(
    APPLICATION_SERVER_URL + "api/sessions",
    { customSessionId: sessionId },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data; // The sessionId
};

const createToken = async (sessionId) => {
  const response = await axios.post(
    APPLICATION_SERVER_URL + "api/sessions/" + sessionId + "/connections",
    {},
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data; // The token
};

export const leaveSession = (session, handler) => {
    // --- 7) Leave the session by calling 'disconnect' method over the Session object ---

    const mySession = session;

    if (mySession) {
      mySession.disconnect();
    }

    // Empty all properties...
    handler(null);
  };