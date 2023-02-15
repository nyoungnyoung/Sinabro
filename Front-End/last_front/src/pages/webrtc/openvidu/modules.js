import axios from "axios";

export const APPLICATION_SERVER_URL = "http://localhost:5000/";

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
  console.log(response.data);
  return response.data; // The sessionId
};

export const leaveSession = (session, handler) => {
  // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
  console.log(session);
  const mySession = session;

  if (mySession) {
    mySession.disconnect();
  }

  // Empty all properties...
  handler(null);
};
