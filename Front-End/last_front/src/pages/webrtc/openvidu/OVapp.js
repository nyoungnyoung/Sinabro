import { OpenVidu } from "openvidu-browser";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import {
  getToken,
  leaveSession,
} from "./modules";
import ShareScreen from "../ShareScreen";
import Focus from "../Focus";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import styled from "styled-components";
import TogetherScreen from "../TogetherScreen";
import { useLocation } from "react-router-dom";

function App() {
  // 강사 이름 저장하는 state
  const [tname, setTname] = useState();

  const [ratio, setRatio] = useState(1);
  const handleRatio = ratio => {
    console.log(ratio);
    if (ratio > 3) setRatio(3);
    else if (ratio < 1) setRatio(1);
    else setRatio(ratio);
  };

  // LectureNo 주소에서 받아오기
  const lectureNo = (useLocation().pathname.slice(8));

  const sendMainStreamManager = newPublisher => {
    session
      .signal({
        data: newPublisher.stream.streamId,
        to: [],
        type: "changeMainStreamManager",
      })
      .then(() => {
        console.log("received signal changeMainStreamManager");
      })
      .catch(error => console.log(error));
  };

  const screenShare = async () => {
    try {
      let newPublisher = await OV.initPublisherAsync(undefined, {
        audioSource: undefined, // The source of audio. If undefined default microphone
        videoSource: "screen", // The source of video. If undefined default webcam
        publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: true, // Whether you want to start publishing with your video enabled or not
        resolution: "1280x960", // The resolution of your video
        frameRate: 30, // The frame rate of your video
        insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      });

      newPublisher.once("accessAllowed", event => {
        newPublisher.stream
          .getMediaStream()
          .getVideoTracks()[0]
          .addEventListener("ended", async () => {
            handleMode("focus");
            console.log('User pressed the "Stop sharing" button');
            let newPublisher = await OV.initPublisherAsync(undefined, {
              audioSource: undefined, // The source of audio. If undefined default microphone
              videoSource: undefined, // The source of video. If undefined default webcam
              publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
              publishVideo: true, // Whether you want to start publishing with your video enabled or not
              resolution: "640x480", // The resolution of your video
              frameRate: 30, // The frame rate of your video
              insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
              mirror: false, // Whether to mirror your local video or not
            });

            await session.unpublish(info.publisher);
            await session.publish(newPublisher);

            setInfo(prev => {
              return { ...prev, publisher: newPublisher };
            });
          });
      });
      await session.unpublish(info.publisher);
      await session.publish(newPublisher);
      setInfo(prev => {
        return { ...prev, mainStreamManager: newPublisher };
      });
      sendMainStreamManager(newPublisher);
    } catch (e) {
      console.error(e);
    }
  };

  const handleScreenShare = async () => {
    await screenShare();
    handleMode("share");
  };

  const [info, setInfo] = useState({
    mySessionId: undefined,
    myUserName: "Participant" + Math.floor(Math.random() * 100),
    session: undefined,
    mainStreamManager: undefined, // Main video of the page. Will be the 'publisher' or one of the 'subscribers'
    publisher: undefined,
    subscribers: [],
    myClassroom: undefined,
  });
  const [session, setSession] = useState(null);
  const [OV, setOV] = useState(new OpenVidu());

  // 모드 변경을 위한 변수 (share, focus, together)
  const [mode, setMode] = useState("focus");

  // 모드 변경을 위한 함수 (Navbar로 prop해줄 함수)
  const handleMode = event => {
    session
      .signal({
        data: "test mode",
        to: [],
        type: `${event}`,
      })
      .then(() => {
        console.log("success");
      });
    setMode(event);
  };

  const handleInfo = (event, type) => {
    setInfo({
      ...info,
      [type]: event,
    });
  };

  const handleLeaveSession = () => {
    leaveSession(session, handleOV);
    setOV(null);
    setSession(null);
  };

  const handleOV = event => {
    console.log(event);
  };

  //componentDidMount
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      leaveSession(session, setOV);
    });
  }, []);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      window.removeEventListener("beforeunload", () => {
        leaveSession(session, setOV);
      });
    };
  });

  useEffect(() => {
    let mySession = session;

    // --- 3) Specify the actions when events take place in the session ---

    // On every new Stream received...
    if (mySession !== null) {
      mySession.on("streamCreated", e => {
        // Subscribe to the Stream to receive it. Second parameter is undefined
        // so OpenVidu doesn't create an HTML video by its own
        let subscriber = mySession.subscribe(e.stream, undefined);
        let subscribers = info.subscribers;
        subscribers.push(subscriber);

        // Update the state with the new subscribers
        setInfo(prev => {
          return { ...prev, subscribers: subscribers };
        });
      });

      // On every Stream destroyed...
      mySession.on("streamDestroyed", e => {
        // Remove the stream from 'subscribers' array
        console.log("연결 해제");
        console.log(e);
        console.log("커넥션 ID: " + e.stream.connection.connectionId);
        deleteSubscriber(e.stream.streamManager);
      });

      mySession.on("signal:changeMainStreamManager", event => {
        for (let index = 0; index < info.subscribers.length; index++) {
          console.log(info.subscribers[index].stream.streamId);
          if (info.subscribers[index].stream.streamId === event.data) {
            setInfo(prev => {
              return { ...prev, mainStreamManager: info.subscribers[index] };
            });
          }
        }
      });

      mySession.on("signal:share", () => {
        setMode("share");
      });

      mySession.on("signal:focus", () => {
        setMode("focus");
      });

      mySession.on("signal:together", () => {
        setMode("together");
      });

      // On every asynchronous exception...
      mySession.on("exception", exception => {
        console.warn(exception);
      });

      getToken(info.mySessionId).then(dto => {
        // First param is the token got from the OpenVidu deployment. Second param can be retrieved by every user on event
        // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
        // 강사 이름 저장해야함
        // setTname(dto.teacher);
        mySession
          .connect(dto.token, { clientData: dto.name })
          .then(async () => {
            // --- 5) Get your own camera stream ---

            // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
            // element: we will manage it on our own) and with the desired properties
            let publisher = await OV.initPublisherAsync(undefined, {
              audioSource: undefined, // The source of audio. If undefined default microphone
              videoSource: undefined, // The source of video. If undefined default webcam
              publishAudio: false, // Whether you want to start publishing with your audio unmuted or not
              publishVideo: true, // Whether you want to start publishing with your video enabled or not
              resolution: "640x480", // The resolution of your video
              frameRate: 30, // The frame rate of your video
              insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
              mirror: false, // Whether to mirror your local video or not
            });

            // --- 6) Publish your stream ---

            mySession.publish(publisher);

            // Obtain the current video device in use
            let devices = await OV.getDevices();
            let videoDevices = devices.filter(
              device => device.kind === "videoinput"
            );

            let currentVideoDeviceId = publisher.stream
              .getMediaStream()
              .getVideoTracks()[0]
              .getSettings().deviceId;

            let currentVideoDevice = videoDevices.find(
              device => device.deviceId === currentVideoDeviceId
            );

            // Set the main video in the page to display our webcam and store our Publisher

            setInfo(prev => {
              return {
                ...prev,
                currentVideoDevice: currentVideoDevice,
                mainStreamManager: publisher,
                publisher: publisher,
                myClassroom: dto.subject,
              };
            });
          })
          .catch(error => {
            console.log(
              "There was an error connecting to the session:",
              error.code,
              error.message
            );
          });
      });
    }
  }, [session]);

  useEffect(() => {
    setInfo(prev => {
      return {
        ...prev,
        session: undefined,
        subscribers: [],
        mySessionId: lectureNo,
        myUserName: "Participant" + Math.floor(Math.random() * 100),
        mainStreamManager: undefined,
        publisher: undefined,
      };
    });
  }, [OV]);

  const joinSession = () => {
    // --- 1) Get an OpenVidu object ---
    // --- 2) Init a session ---
    console.log("entered joinSession");
    setSession(OV.initSession());
  };

  useEffect(() => {
    joinSession();
  }, []);

  const deleteSubscriber = streamManager => {
    let subscribers = info.subscribers;
    let index = subscribers.indexOf(streamManager, 0);
    if (index > -1) {
      subscribers.splice(index, 1);
      setInfo(prev => {
        return { ...prev, subscribers: subscribers };
      });
    }
  };

  const handleChangeSessionId = e => {
    setInfo(prev => {
      return {
        ...prev,
        mySessionId: e.target.value,
      };
    });
  };

  const handleChangeUserName = e => {
    setInfo(prev => {
      return {
        ...prev,
        myUserName: e.target.value,
      };
    });
  };

  const handleMainVideoStream = stream => {
    setInfo(prev => {
      return {
        ...prev,
        mainStreamManager: stream,
      };
    });
    sendMainStreamManager(stream);
    handleMode("together");
  };

  // 사용자 role 스토어에서 가져오기
  const role = useSelector(state => state.login.token.role);

  return (
    <div className="container">
        <div id="session">
          <div id="session-header">
            <h1 id="session-title">{info.myClassroom}</h1>
            <input
              className="btn btn-large btn-danger"
              type="button"
              id="buttonLeaveSession"
              onClick={() => {
                leaveSession(session, handleOV);
                setOV(null);
                setSession(null);
              }}
              value="Leave session"
            />
          </div>
          <Navbar
            info={info}
            handleMode={handleMode}
            handleScreenShare={handleScreenShare}
            role={role}
          />
          <StyledDiv2>
            {/* 모드별로 다른 컴포넌트 보여주기 */}
            {mode === "focus" ? (
              <Focus
                info={info}
                OV={OV}
                session={session}
                handleInfo={handleInfo}
                handleMainVideoStream={handleMainVideoStream}
                mode={mode}
                ratio={ratio}
                role={role}
              />
            ) : mode === "share" ? (
              <ShareScreen
                info={info}
                OV={OV}
                session={session}
                setInfo={setInfo}
                mode={mode}
              />
            ) : (
              <TogetherScreen
                info={info}
                OV={OV}
                session={session}
                setInfo={setInfo}
                handleMainVideoStream={handleMainVideoStream}
                mode={mode}
                ratio={ratio}
                role={role}
              />
            )}
            <SideBar
              handleLeaveSession={handleLeaveSession}
              handleRatio={handleRatio}
              info={info}
              ratio={ratio}
            />
          </StyledDiv2>

          {info.mainStreamManager !== undefined ? (
            <div id="main-video" className="col-md-6">
              {/* <UserVideoComponent streamManager={info.mainStreamManager} /> */}
            </div>
          ) : null}
          <div id="video-container" className="col-md-6">
            {info.publisher !== undefined ? (
              <div
                className="stream-container col-md-6 col-xs-6"
                onClick={() => handleMainVideoStream(info.publisher)}
              >
                {/* <UserVideoComponent streamManager={info.publisher} /> */}
              </div>
            ) : null}
            {info.subscribers.map((sub, i) => (
              <div
                key={i}
                className="stream-container col-md-6 col-xs-6"
                onClick={() => handleMainVideoStream(sub)}
              >
                {/* <UserVideoComponent streamManager={sub} /> */}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

const StyledDiv2 = styled.div`
  display: flex;
`;

export default App;
