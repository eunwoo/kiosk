import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pointInRect, convToPoint } from '../util';
import Rect from './Rect';
import $ from 'jquery';
import imgHere from '../static/here.png';
function func1() {
    $('.abcde').css({ left: '300px' });
    $('.abcde').fadeOut(1000);
}
function func2({ x: px, y: py }) {
    $('.abcde').css({ left: px, top: py, width: '40px', height: '40px' });
    $('.abcde').fadeIn(10);
    setTimeout(() => {
        $('.abcde').fadeOut(600);
    }, 400);
}
export default function FullCard({ src, desc, map, page }) {
    const navigate = useNavigate();
    console.log(map);
    console.log(map.page);
    const click = useCallback(
        (e) => {
            if (map !== undefined) {
                map[page].forEach((x) => {
                    const pt = convToPoint(
                        x,
                        window.innerWidth,
                        window.innerHeight
                    );
                    if (pointInRect(pt, { x: e.pageX, y: e.pageY })) {
                        console.log('navigate: ' + x.to);
                        if (x.to === 'back') {
                            navigate(-1);
                        } else {
                            navigate(x.to);
                        }
                        func2({ x: e.pageX, y: e.pageY });
                    }
                });
            }
        },
        [navigate, map, page]
    );
    useEffect(() => {
        console.log('화면에 나타남');
        return () => {
            console.log('화면에서 사라짐');
        };
    });
    const clickFunc = () => {
        // $('.abcde').fadeOut(1000);
        func1();
    };
    return (
        <div>
            <img
                id="program"
                src={src}
                alt={desc}
                width="2160"
                height="3840"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                }}
                onClick={click}
            ></img>

            {map[page] !== undefined && console.log(map[page])}
            {map[page] !== undefined &&
                map[page].map((x) => {
                    const pt = convToPoint(
                        x,
                        window.innerWidth,
                        window.innerHeight
                    );

                    return (
                        <Rect
                            key={pt.x1 + '_' + pt.y1}
                            top={
                                String((pt.y1 / window.innerHeight) * 100) + '%'
                            }
                            left={
                                String((pt.x1 / window.innerWidth) * 100) + '%'
                            }
                            width={x.width}
                            height={x.height}
                            clickHandler={click}
                        />
                    );
                })}
            {/* <div
                className="abcde"
                style={{ position: 'absolute', display: 'none' }}
                onClick={clickFunc}
            >
                <img src={imgHere}></img>
            </div> */}
        </div>
    );
}
