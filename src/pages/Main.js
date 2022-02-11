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
import { Autoplay, EffectCube, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
// import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import '../styles.css'

const host = "http://localhost";
const port = 3001;

const homeImageDisplayTime = 10000; // 10초
const homeImageTransitionTime = 3000; // 화면전환시간

export default function Main() {
    const navigate = useNavigate();
    const [transitionSpeed, setTransitionSpeed] = useState(2500);
    const videoRef = useRef(null);
    const [pages, setPages] = useState([]);
    const [duration, setDuration] = useState(1000);
    const swiperRef = useRef(null);
    const dictVideo = useRef({});
    const [pagination1, setPagination1] = useState(false);
    const [pagination2, setPagination2] = useState(true);

    const handlerClick = () => {
        console.log('handlerClick');
        navigate('Program');
    }
    const getPages = async () => {
        // console.log('getPages');
        // console.log(`${host}:${port}`);
        const response = await axios.get('http://localhost:3001');
        // console.log(response.data);
        setPages(response.data);
    }
    useEffect(() => {
        getPages();
    }, [videoRef])
    const getVideoInfoHook = (_duration, filename, _ref) => {
        console.log('getVideoInfoHook');
        console.log(_duration);
        console.log(filename);
        console.log(_ref);
        // dictVideo.current[`${filename.split('/')[3].split('.')[0]}`]={ref:_ref, duration:_duration};
        dictVideo.current[`${filename.split('/')[2].split('.')[0]}`]={ref:_ref, duration:_duration};
        console.log(dictVideo.current);
    }
    return (
        <div style={{WebkitBackfaceVisibility: "hidden"}}>
        <Swiper
            style={{WebkitBackfaceVisibility: "hidden"}} 
            speed={transitionSpeed}
            ref={swiperRef}
            effect="fade"
            pagination={{
                dynamicBullets: pagination1,
                clickable: pagination2,
            }}
            onSwiper={(swiper) => {
                    console.log(swiper);
                }
            }
            onSlideChange = {(swiper) => {
                console.log('onSlideChange');
                if(pages[swiper.activeIndex].split('.')[1] === "mp4") {
                    let filename = pages[swiper.activeIndex].split('.')[0];
                    console.log('filename='+filename);
                    console.log(dictVideo);
                    console.log(dictVideo.current[`${filename}`]);
                    let videoRefCurrent = dictVideo.current[`${filename}`];
                    let transitionTime = parseInt(videoRefCurrent.duration*1000) - homeImageTransitionTime;
                    setDuration(transitionTime);
                    videoRefCurrent.ref.current.play();
                }
                else {
                    console.log('set duration for image='+homeImageDisplayTime);
                    setDuration(homeImageDisplayTime);
                    videoRef.current.pause();
                }
            }}
            onSlideChangeTransitionStart={(swiper) => {
                console.log('onSlideChangeTransitionEnd');

            }}
            onBeforeTransitionStart={(swiper, speed, internal) => {
                // console.log('onBeforeTransitionStart');
                if(swiper) {
                    if(pages.length === swiper.activeIndex + 1) {
                        setTransitionSpeed(0);
                    }
                    else {
                        setTransitionSpeed(homeImageTransitionTime);
                    }
                }                
            }}
            autoplay={{
                delay: duration,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
        >
            {
                pages.length && pages.map((page, index) => {
                    let isMovie = page.split('.');
                    if(isMovie[1] === 'mp4') {
                        let myVideo = `/home/${page}`;
                        return (
                            <SwiperSlide key={index}>
                                {/* <MyVideo1 src={require(`../static/home/${page}`)} ref={videoRef} getVideoInfoHook={getVideoInfoHook} /> */}
                                <MyVideo1 src={myVideo} ref={videoRef} getVideoInfoHook={getVideoInfoHook} />
                            </SwiperSlide>
                        )
                    }
                    else {
                        let myImage = `/home/${page}`;
                        return (
                            <SwiperSlide key={index}>
                                {/* <img src={require(`../static/home/${page}`)} alt={page} ></img> */}
                                <img src={myImage} alt={page} ></img>
                            </SwiperSlide>
                        )
                    }
                })
            }
        </Swiper>
        <div style={{position:"absolute", left:"0", top:"0", width:"100%", height:"85%", zIndex:"100" }} onClick={handlerClick}></div>
        </div>
    );
}
