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
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectCube, EffectFade } from 'swiper';
import 'swiper/css';
// import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'

const host = "http://localhost";
const port = 3001;

export default function Main() {
    const navigate = useNavigate();
    const [autoplaySpeed, setAutoplaySpeed] = useState(1000);
    const [videoPaused, setVideoPaused] = useState(false);
    const videoRef = useRef(null);
    const [pages, setPages] = useState([]);
    const [videoDuration, setVideoDuration] = useState(1000);
    const [duration, setDuration] = useState(1000);
    const swiperRef = useRef(null);
    const swiper = useSwiper();
    let swiperObj = null;

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
        // setAutoplaySpeed(1000);
        console.log('useEffect');
        console.log(videoRef);
    }, [videoRef, videoDuration])
    const setDurationHook = (duration) => {
        console.log(duration);
        setVideoDuration(parseInt(duration*1000*1.1));
        if(swiperRef) {
            console.log(swiperRef);
            console.log(swiperRef.current.swiper.autoplay.delay);
            swiperRef.current.swiper.autoplay.delay = videoDuration;
            console.log(swiperRef.current.swiper.autoplay.delay);
            console.log('setDuration='+videoDuration);
        }
    }
    return (
        // <div>
        //     <FullCard src={img} map={map} page="Main" />
        //     {console.log('Main')}
        // </div>
        <div style={{width:"calc(100vw-100%)"}}>

        {/* <Slider {...settings} style={{width:"95%"}}> */}
        <Swiper 
            ref={swiperRef}
            effect="fade"
            onSwiper={(swiper) => {
                    console.log(swiper);
                    swiperObj = swiper;
                    console.log(swiperObj);
                }
            }
            onBeforeTransitionStart={(swiper, speed, internal) => {
                console.log('onBeforeTransitionStart');
                console.log(swiper);
                console.log(speed);
                console.log(internal);
                if(swiper) {
                    console.log(swiper);
                    console.log(swiper.activeIndex);
                    if(pages[swiper.activeIndex].split('.')[1] === "mp4") {
                        // setAutoplaySpeed(10000);
                        setAutoplaySpeed(videoDuration);
                        console.log('videoDuration='+videoDuration);
                        swiper.autoplay.delay = videoDuration;
                        setDuration(videoDuration);
                        replayVideo();
                    }
                    else {
                        setAutoplaySpeed(1000);
                        setDuration(1000);
                        swiper.autoplay.delay = 1000;
                        pauseVideo();
                    }
                }                
            }}
            onSlideChange={(swiper) => {
                console.log('onSlideChange');
                // console.log(swiperRef.current.activeIndex);
                // if(swiper) {
                //     console.log(swiper);
                //     console.log(swiper.activeIndex);
                //     if(pages[swiper.activeIndex].split('.')[1] === "mp4") {
                //         // setAutoplaySpeed(10000);
                //         // setAutoplaySpeed(videoDuration);
                //         console.log('videoDuration='+videoDuration);
                //         swiper.autoplay.delay = videoDuration;
                //         replayVideo();
                //     }
                //     else {
                //         // setAutoplaySpeed(1000);
                //         swiper.autoplay.delay = 1000;
                //         pauseVideo();
                //     }
                // }
                
            }}
            autoplay={{
                delay: duration,
                disableOnInteraction: true,
            }}
            modules={[Autoplay, EffectFade]}
        >
            {
                pages.length && pages.map((page) => {
                    console.log(page);
                    let isMovie = page.split('.');
                    console.log(isMovie[1]);
                    if(isMovie[1] === 'mp4') {
                        return (
                            <SwiperSlide autoPlay={{delay:"10000"}}>
                                <MyVideo1 src={require(`../static/home/${page}`)} ref={videoRef} setDuration={setDurationHook} />
                                {/* {({ isActive }) => (
                                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                                )} */}
                            </SwiperSlide>
                        )
                    }
                    else {
                        return (
                            <SwiperSlide autoPlay={{delay:"10000"}}>
                                <img src={require(`../static/home/${page}`)}></img>
                            </SwiperSlide>
                        )
                    }
                })
            }
                {/* <MyVideo1 src={img1} ref={videoRef} /> */}
        {/* </Slider> */}
        </Swiper>
        <div style={{position:"absolute", left:"0", top:"0", width:"100%", height:"100%", zIndex:"100" }} onClick={handlerClick}></div>
        </div>
    );
}
