import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
const Main = Loadable(lazy(() => import('./pages/Main')));
const Program = Loadable(lazy(() => import('./pages/Program')));

const routes = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'Program',
        children: [
            {
                path: '',
                element: <Program />,
            },
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        element: <Program />,
                    },
                    {
                        path: ':id',
                        element: <Program />,
                    },
                ],
            },
        ],
    },
];

export default routes;
