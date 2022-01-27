import { useEffect, useState } from 'react';

export default function Rect({ top, left, width, height, clickHandler }) {
    const [styles, setStyles] = useState({
        position: 'absolute',
        // top: Number(top),
        // left: Number(left),
        top: top,
        left: left,
        right: 0,
        bottom: 0,
        height: height,
        width: width,
        // border: '1px solid red',
        zindex: 1,
    });
    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    // });
    // const handleResize = () => {
    //     setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     });
    //     console.log('resize');
    //     console.log(styles.initial_top);
    //     console.log(windowSize.initial_width);
    //     // setStyles({ top: top  });
    // };
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // });
    return <div style={styles} onClick={clickHandler}></div>;
}
