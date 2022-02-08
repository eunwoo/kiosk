import { useLocation, useNavigate } from 'react-router-dom';
import FullCard from '../components/FullCard';
import map from '../kioskmap';
import { useEffect } from 'react'

export default function Program() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const path = location.pathname.split('/');
    console.log(path);
    const pageNo = path.slice(2).join('_');
    console.log(pageNo);
    let imgSrc;
    let page;
    if (path.length === 2) {
        page = 'Program';
    } else {
        page = 'Program_' + pageNo;
    }
    imgSrc = require('../static/' + page + '.jpg');

    console.log(page);
    useEffect(() => {
        console.log('Program - useEffect');
        const timer = setTimeout(()=>{
            navigate('/');
        }, 120000);
        return () => clearTimeout(timer);
    })
    return (
        <div>
            {console.log('Program')}
            {<FullCard src={imgSrc} desc="Programs" map={map} page={page} />}
        </div>
    );
}
