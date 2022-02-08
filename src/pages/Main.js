import { Navigate, useLocation } from 'react-router-dom';
import FullCard from '../components/FullCard';
import map from '../kioskmap';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {useNavigate} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import MyVideo1 from "../components/MyVideo1"
import axios from 'axios';
const host = "http://localhost";
const port = 3001;

export default function Main() {
    const navigate = useNavigate();
    const [autoplaySpeed, setAutoplaySpeed] = useState(1000);
    const [videoPaused, setVideoPaused] = useState(false);
    const videoRef = useRef(null);
    const [pages, setPages] = useState([]);
    const [videoDuration, setVideoDuration] = useState(1000);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplaySpeed,
        beforeChange: (current, next) => {
            console.log('beforeChange: current='+ current);
            if(pages.length) {
                console.log(pages);
                if(current >= 0) {
                    if(pages[next].split('.')[1] === "mp4") {
                        // setAutoplaySpeed(10000);
                        setAutoplaySpeed(videoDuration);
                        console.log('videoDuration='+videoDuration);
                        replayVideo();
                    }
                    else {
                        setAutoplaySpeed(1000);
                        pauseVideo();
                    }
                }
            }
            // if(current === 0 && next === 1) { // image to video
            //     console.log('1');
            //     setAutoplaySpeed(10000);
            //     replayVideo();
            // }
            // else {
            //     setAutoplaySpeed(3000);
            //     pauseVideo();
            // }
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
    const handlerClick = () => {
        console.log('handlerClick');
        navigate('Program');
    }
    const getPages = async () => {
        console.log('getPages');
        console.log(`${host}:${port}`);
        const response = await axios.get('http://localhost:3001');
        console.log('this')
        console.log(response.data);
        setPages(response.data);
    }
    useEffect(() => {
        addTimeUpdate();
        getPages();
        setAutoplaySpeed(1000);
        console.log('useEffect');
        console.log(videoRef);
    }, [videoRef, videoDuration])
    const setDuration = (duration) => {
        console.log(duration);
        setVideoDuration(parseInt(duration*1000*1.1));
        console.log('setDuration='+videoDuration);
    }
    return (
        // <div>
        //     <FullCard src={img} map={map} page="Main" />
        //     {console.log('Main')}
        // </div>
        <div style={{width:"calc(100vw-100%)"}}>

        <Slider {...settings} style={{width:"95%"}}>
            {
                pages.length && pages.map((page) => {
                    console.log(page);
                    let isMovie = page.split('.');
                    console.log(isMovie[1]);
                    if(isMovie[1] === 'mp4') {
                        return (
                            <div>
                                <MyVideo1 src={require(`../static/home/${page}`)} ref={videoRef} setDuration={setDuration} />
                                {
                                    // videoRef.current.play()
                                }
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <img src={require(`../static/home/${page}`)}></img>
                            </div>
                        )
                    }
                })
            }
                {/* <MyVideo1 src={img1} ref={videoRef} /> */}
        </Slider>
        <div style={{position:"absolute", left:"0", top:"0", width:"100%", height:"100%" }} onClick={handlerClick}></div>
        </div>
    );
}
