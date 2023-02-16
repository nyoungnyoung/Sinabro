import axios from "axios";

export const APPLICATION_SERVER_URL = "https://i8d203.p.ssafy.io/api";

export const getToken = async mySessionId => {
  const responseDto = await createSession(mySessionId);
  return await responseDto;
};

const createSession = async sessionId => {
  var accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const response = await axios.post(
    APPLICATION_SERVER_URL + "api/sessions",
    { customSessionId: sessionId },
    {
      headers: {
        "Content-Type": "application/json",
        "X-ACCESS-TOKEN": accessToken,
      },
    }
  );
  return response.data; // The sessionId
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
