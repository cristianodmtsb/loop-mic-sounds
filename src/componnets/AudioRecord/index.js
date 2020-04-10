import React, { useState } from "react";
import { ReactMic } from "react-mic";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioRecord = () => {
  const [record, setRecord] = useState(false);
  const [audio, setAudio] = useState();

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setAudio(recordedBlob.blobURL);
  };

  console.log("audio", audio);

  return (
    <>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
      <div>
        {audio && (
          <AudioPlayer
            autoPlay
            src={audio}
            onPlay={(e) => console.log("onPlay", e)}
            // other props here
          />
        )}
      </div>
    </>
  );
};

export default AudioRecord;
