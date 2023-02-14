import axios from "axios";

export const APPLICATION_SERVER_URL = "http://localhost:5000/";

export const getToken = async (mySessionId) => {
  const sessionId = await createSession(mySessionId);
  return await sessionId.token;
}

// export const getUserName = async (mySessionId) => {
//   const response = await axios.post(APPLICATION_SERVER_URL + 'api/sessions', { customSessionId: sessionId }, {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });

// }

const createSession = async (sessionId) => {
  const response = await axios.post(APPLICATION_SERVER_URL + 'api/sessions', { customSessionId: sessionId}, {
      headers: {
          'Content-Type': 'application/json', 
      },
  });
  console.log(response.data);
  return response.data; // The sessionId
}

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