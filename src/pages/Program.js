import { useLocation } from 'react-router-dom';
import FullCard from '../components/FullCard';
import map from '../kioskmap';

export default function Program() {
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
    return (
        <div>
            {console.log('Program')}
            {<FullCard src={imgSrc} desc="Programs" map={map} page={page} />}
        </div>
    );
}
