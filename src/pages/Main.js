import { useLocation } from 'react-router-dom';
import FullCard from '../components/FullCard';
import img from '../static/Main.jpg';
import map from '../kioskmap';

export default function Main() {
    const location = useLocation();
    return (
        <div>
            <FullCard src={img} map={map} page="Main" />
            {console.log('Main')}
        </div>
    );
}
