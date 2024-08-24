import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from '../screens/LandingPage/LandingPage';

import App from "../App";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '*',
                element: <h1>404 - Página no encontrada</h1>, 
            }
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;