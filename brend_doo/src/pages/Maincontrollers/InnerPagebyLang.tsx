import React from 'react';
import { useParams } from 'react-router-dom';
import ROUTES from '../../setting/routes';

import ProductId from '../Products/Id';
import ResetPasswordConfrim from '../userIn/ResetPasswordConfrim';
import OrderId from '../userIn/OrderId';

const InnerPageByLang: React.FC = () => {
    const { lang, page, slug } = useParams<{
        lang: string;
        page: string;
        slug: string;
    }>();
    if (page === ROUTES.product.en || page === ROUTES.product.ru) {
        return <ProductId />;
    }
    if (
        page === ROUTES.password_reset_confrim.en ||
        page === ROUTES.password_reset_confrim.ru
    ) {
        return <ResetPasswordConfrim />;
    }
    if (page === ROUTES.orderdetail.en || page === ROUTES.orderdetail.ru) {
        return <OrderId />;
    }
    return (
        <div>
            <h1>Language: {lang}</h1>
            <h1>Page: {page}</h1>
            <h1>Slug: {slug}</h1>
        </div>
    );
};

export default InnerPageByLang;
