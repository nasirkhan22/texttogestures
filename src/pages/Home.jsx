import React, { useState } from "react";
import { useRecordWebcam } from "react-record-webcam";
import Recorder from "../assets/svgs/recorder.svg";
import { Button } from "antd";
import HandtalkComponent from "./HandtalkComponent";
export default function Home() {
  const {
    activeRecordings,
    createRecording,
    openCamera,
    startRecording,
    stopRecording,
  } = useRecordWebcam();
  const [isRecording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const startRecorder = async () => {
    try {
      const recording = await createRecording();
      setRecording(true);
      if (!recording) return;
      await openCamera(recording.id);
      await startRecording(recording.id);
      //   await new Promise((resolve) => setTimeout(resolve, 3000));
      // await stopRecording(recording.id);
    } catch (error) {
      console.error({ error });
    }
  };

  const stopRecorder = async () => {
    if (isRecording) {
      try {
        // await stopRecording(activeRecordings[0].id);
        const videoBlob = await stopRecording(activeRecordings[0].id);
        setRecording(false);
        setRecordedVideo(videoBlob);
        console.log("recorddedd", videoBlob);
      } catch (error) {
        console.error({ error });
      }
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col gap-7 items-center border min-h-[500px] max-h-full w-[500px] mt-14 rounded-md">
        {isRecording ? (
          activeRecordings.map((recording) => (
            <div key={recording.id}>
              <video ref={recording.webcamRef} autoPlay muted />
            </div>
          ))
        ) : (
          <img className="w-[120px] h-[150px]" src={Recorder} alt="" />
        )}
        {/* <p className="text-white">Get ready to start camera recording</p> */}
        {isRecording ? (
          <>
            <p className="text-white">Your recording is started</p>
            <Button
              className="text-white w-[150px] h-[42px] mb-5"
              onClick={stopRecorder}
            >
              Stop Recording
            </Button>
          </>
        ) : (
          <>
            <p className="text-white">Get ready to start camera recording</p>
            <Button
              className="text-white w-[150px] h-[42px]"
              onClick={startRecorder}
            >
              Start Recording
            </Button>
          </>
        )}
      </div>
      {/* {recordedVideo && (
        // Display the recorded video
        <video controls src={URL.createObjectURL(recordedVideo)} />
      )} */}
      <HandtalkComponent />
    </div>
  );
}
