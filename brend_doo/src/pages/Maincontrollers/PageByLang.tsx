import React from 'react';
import { useParams } from 'react-router-dom';
import Home from '../Home';
import ROUTES from '../../setting/routes';
import Aboutus from '../Aboutus';
import Products from '../Products';
import UserRules from '../UserRules';
import DeliveryRules from '../DeliveryRules';
import Contact from '../Contact';
import Brends from '../Brends';
import Login from '../userIn/login';

const PageByLang: React.FC = () => {
    const { lang, page } = useParams<{ lang: string; page: string }>();
    if (page === ROUTES.home.en || page === ROUTES.home.ru) {
        return <Home />;
    }
    if (page === ROUTES.about.en || page === ROUTES.about.ru) {
        return <Aboutus />;
    }
    if (page === ROUTES.product.en || page === ROUTES.product.ru) {
        return <Products />;
    }
    if (page === ROUTES.rules.en || page === ROUTES.rules.ru) {
        return <UserRules />;
    }
    if (page === ROUTES.deliveryRules.en || page === ROUTES.deliveryRules.ru) {
        return <DeliveryRules />;
    }
    if (page === ROUTES.contact.en || page === ROUTES.contact.ru) {
        return <Contact />;
    }
    if (page === ROUTES.brends.en || page === ROUTES.brends.ru) {
        return <Brends />;
    }
    if (page === ROUTES.login.en || page === ROUTES.login.ru) {
        return <Login />;
    }
    return (
        <div>
            <h1>Language: {lang}</h1>
            <h1>Page: {page}</h1>
        </div>
    );
};

export default PageByLang;
