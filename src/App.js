import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import map, { mappx } from './kioskmap';

// console.log(map['Program']);
// console.log(mappx);
mappx.forEach((x) => {
    map[x.page] = [];
    x.area.forEach((a) => {
        if (a.type === 'grid') {
            let ref = 0;
            let x_num, y_num;
            if ('x_num' in a) {
                x_num = a.x_num;
            } else {
                x_num = a.x_list.length;
            }
            if ('y_num' in a) {
                y_num = a.y_num;
            } else {
                y_num = a.x_list.length;
            }
            let x_coords = [],
                y_coords = [];
            if (x_num === 1) {
                x_coords.push(a.x_list[0]);
            } else {
                let i;
                for (i = 0; i < x_num; i++) {
                    x_coords.push(
                        a.x_list[0] +
                            ((a.x_list[1] - a.x_list[0]) / (x_num - 1)) * i
                    );
                }
            }
            if (y_num === 1) {
                y_coords.push(a.y_list[0]);
            } else {
                let i;
                for (i = 0; i < y_num; i++) {
                    y_coords.push(
                        a.y_list[0] +
                            ((a.y_list[1] - a.y_list[0]) / (y_num - 1)) * i
                    );
                }
            }
            x_coords.forEach((xp) => {
                y_coords.forEach((yp) => {
                    let to;
                    // if (a.to[ref][0] === '/') {
                    //     to = a.to[ref];
                    // } else {
                    //     to = x.page + '/' + a.to[ref];
                    // }
                    to = a.to[ref];
                    // console.log(to);
                    map[x.page].push({
                        x: String((xp / x.image_size.w) * 100) + '%',
                        y: String((yp / x.image_size.h) * 100) + '%',
                        width: String((a.size.w / x.image_size.w) * 100) + '%',
                        height: String((a.size.h / x.image_size.h) * 100) + '%',
                        to: to,
                    });
                    ref++;
                });
            });
        } else if (a.type === 'rect') {
            map[x.page].push({
                x: String((a.x / x.image_size.w) * 100) + '%',
                y: String((a.y / x.image_size.h) * 100) + '%',
                width: String((a.size.w / x.image_size.w) * 100) + '%',
                height: String((a.size.h / x.image_size.h) * 100) + '%',
                to: a.to,
            });
        }
    });
});
// console.log(map);

function App() {
    return useRoutes(routes);
}

export default App;
