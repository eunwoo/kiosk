import { useEffect, useState, forwardRef, useImperativeHandle } from "react"
import { Replay } from "vimond-replay"

const MyVideo = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({

        getAlert() {
            console.log('getAlert');
        },
        play() {
            handleRestartClick();
            handleStartClick();
        },
        pause() {
            handlePauseClick();
        },

    }));  

    let playVideo, setPlaybackPosition, setPlaybackProperties
  
    const playbackActionsReady = ({ play, setPosition, setProperties }) => {
      playVideo = play
      setPlaybackPosition = setPosition
      setPlaybackProperties = setProperties
    }
    const handleRestartClick = () => {
      if (setPlaybackPosition) {
        setPlaybackPosition(0)
      }
    }
  
    const handleStartClick = () => {
      if (playVideo) {
        playVideo()
      }
    }

    const handlePauseClick = () => {
        if (setPlaybackProperties) {
          setPlaybackProperties({ isPaused: true })
        }
    }
      
    // The alternative way, setting properties instead of calling a dedicated method, e.g. unmute().
    const handleMuteClick = () => {
      if (setPlaybackProperties) {
        setPlaybackProperties({ isMuted: true })
      }
    }
  
    const handleUnmuteClick = () => {
      if (setPlaybackProperties) {
        setPlaybackProperties({ isMuted: false })
      }
    }
  
    // Check the Dev tools console for the log output from this handler:
    const handleStreamStateChange = stateProperties => {
      if (stateProperties) {
        // if ('position' in stateProperties) {
        //   console.log(
        //     'Stream observation example: Playback position is ' +
        //       stateProperties.position.toFixed(1),
        //   )
        // }
        if ('volume' in stateProperties) {
          console.log(
            'Stream observation example: Playback position is ' +
              Math.round(stateProperties.volume * 100),
          )
        }
        if (stateProperties.isPaused) {
          console.log('Stream observation example: The playback was paused.')
        }
        if (stateProperties.isPaused === false) {
          console.log('Stream observation example: The playback was resumed.')
        }
        if (stateProperties.playState === 'inactive') {
          console.log('Stream observation example: The playback has ended.')
        }
      }
    }
    useEffect(() => {
        console.log('a');
    })

    return (
      <div>
        <Replay
          source={{
            streamUrl: props.src,
            startPosition: 0,
          }}
          initialPlaybackProps={{ isPaused: true, isMuted: false }}
          onStreamStateChange={handleStreamStateChange}
          onPlaybackActionsReady={playbackActionsReady}
          options={{controls:{includeControls: [],}}}
          style={{width: "100%"}}
        />
      </div>
    )
});

export default MyVideo;

  