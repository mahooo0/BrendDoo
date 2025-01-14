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
import UserSettings from '../userIn';
import Notification from '../userIn/Nptifications';
import Basked from '../userIn/Basked';
import Liked from '../Liked';
import UserLiked from '../userIn/Liked';
import BaskedConfirm from '../userIn/BaskedConfirm';
import ORder from '../userIn/Order';
import Register from '../userIn/register';
import Password from '../userIn/Pasword';
import SucsesPassword from '../userIn/sucsesPasword';

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
    if (page === ROUTES.userSettings.en || page === ROUTES.userSettings.ru) {
        return <UserSettings />;
    }
    if (page === ROUTES.orders.en || page === ROUTES.orders.ru) {
        return <ORder />;
    }
    if (page === ROUTES.liked.en || page === ROUTES.liked.ru) {
        return <Liked />;
    }
    if (page === ROUTES.notification.en || page === ROUTES.notification.ru) {
        return <Notification />;
    }
    if (page === ROUTES.order.en || page === ROUTES.order.ru) {
        return <Basked />;
    }
    if (page === ROUTES.likedUser.en || page === ROUTES.likedUser.ru) {
        return <UserLiked />;
    }
    if (page === ROUTES.ordersConfirm.en || page === ROUTES.ordersConfirm.ru) {
        return <BaskedConfirm />;
    }
    if (page === ROUTES.register.en || page === ROUTES.register.ru) {
        return <Register />;
    }
    if (page === ROUTES.resetPasword.en || page === ROUTES.resetPasword.ru) {
        return <Password />;
    }
    if (
        page === ROUTES.resetPaswordSucses.en ||
        page === ROUTES.resetPaswordSucses.ru
    ) {
        return <SucsesPassword />;
    }

    return (
        <div>
            <h1>Language: {lang}</h1>
            <h1>Page: {page}</h1>
        </div>
    );
};

export default PageByLang;
