import { React } from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from './Components/MainPage';
import { AboutPage } from './Components/AboutPage';
import { ProductsPage } from './Components/ProductsPage';

const routes = [
    {
        path: '/',
        component: MainPage
    }, {
        path: '/about',
        component: AboutPage
    }, {
        path: '/products',
        component: ProductsPage
    }
];

export const Routing = () => {
    return routes.map((route, index) => (<Route key={index}
        path={route.path}
        render={props => (<route.component />)} />
    ));
};