import classNames from "classnames";
import React, { memo, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

const MyVideo1 = forwardRef((props, ref1) => {
    const [nowPlaying, setNowPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControl, setShowControl] = useState(false);
    const ref = useRef(null);

    useImperativeHandle(ref1, () => ({

        getAlert() {
            console.log('getAlert');
        },
        play() {
            
            if (videoElement) {
              videoElement.currentTime = 0;
              console.log('load and play');
              videoElement.load();
              videoElement.play();
              setNowPlaying(true);
            }
        },
        pause() {
            videoElement.pause();
            setNowPlaying(false);
        },

    }));  


  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  const videoSrc = props.src || "";
  const startTime = Math.floor(currentTime);

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function() {
        setCurrentTime(observedVideoElement.currentTime);
      });
      // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
    console.log('MyVideo1 useEffect');
  }, [nowPlaying]);

  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 2000);
    }
  };
  const handlePlay = () => {
    console.log('handlePlay');
  };
  const handlePlaying = () => {
    console.log('handlePlaying');
  };
  const handlePause = () => {
    console.log('handlePause');
    videoElement.pause();
  };
  const handleEnded = () => {
    console.log('handleEnded');
    videoElement.pause();
  };
  const handleLoadedmetadata = () => {
      console.log('handleMetadata');
      console.log(videoElement.duration);
      props.setDuration(videoElement.duration);
      // console.log(props);
  }

  return (
    <div>
      <video
        loop={false}
        muted={false}
        ref={ref}
        playsInline={true}
        onClick={handleControlVisible}
        onPlay={handlePlay}
        onPlaying={handlePlaying}
        onPause={handlePause}
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedmetadata}
        style={{width: "100%"}}
        data-keepplaying
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* <Controlbar
        onProgressChange={onProgressChange}
        onPlayIconClick={onPlayIconClick}
        totalTime={totalTime}
        currentTime={currentTime}
        startTime={startTime}
        showControl={showControl}
        nowPlaying={nowPlaying}
        videoElement={videoElement}
      /> */}
    </div>
  );
});

export default MyVideo1;