import { useLocation } from 'react-router-dom';
import FullCard from '../components/FullCard';
import img from '../static/Main.jpg';
import img1 from '../static/Main1.mp4';
import map from '../kioskmap';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useState, useRef, useEffect } from 'react'
import { Replay } from 'vimond-replay'
import MyVideo from "../components/MyVideo"
import MyVideo1 from "../components/MyVideo1"

export default function Main() {
    const [autoplaySpeed, setAutoplaySpeed] = useState(1000);
    const [videoPaused, setVideoPaused] = useState(false);
    const videoRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplaySpeed,
        beforeChange: (current, next) => {
            console.log('beforeChange');
            if(current === 0 && next === 1) { // image to video
                console.log('1');
                setAutoplaySpeed(10000);
                replayVideo();
            }
            else {
                setAutoplaySpeed(3000);
                pauseVideo();
            }
        }
    }

    const addTimeUpdate = () => {
        const observedVideoElement = videoRef && videoRef.current;
        console.log(observedVideoElement);
    }
    const replayVideo = () => {
        const observedVideoElement = videoRef && videoRef.current;
        observedVideoElement.play();
    }
    const pauseVideo = () => {
        const observedVideoElement = videoRef && videoRef.current;
        observedVideoElement.pause();
    }
    useEffect(() => {
        addTimeUpdate();
        console.log('useEffect');
        console.log(videoRef);
    }, [videoRef])

    return (
        // <div>
        //     <FullCard src={img} map={map} page="Main" />
        //     {console.log('Main')}
        // </div>
        <Slider {...settings} >
            <div>
                <img src={img}></img>
            </div>
            <div>
                {/* <Replay 
                    options={{controls:{includeControls: [],}}} 
                    source={img1} 
                    initialPlaybackProps={{ isPaused: true }}
                    onPlaybackActionsReady={playbackActionsReady} /> */}

                    {/* <video ref={videoRef} style={{width: "100%"}} muted>
                        <source src={img1}></source>
                    </video> */}
                {/* <MyVideo src={img1} ref={videoRef}/> */}
                <MyVideo1 src={img1} ref={videoRef} />
            </div>
            <div>
                <img src={img}></img>
            </div>
        </Slider>
    );
}
