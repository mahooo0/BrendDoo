import React from 'react';
import { useParams } from 'react-router-dom';
import ROUTES from '../../setting/routes';

import ProductId from '../Products/Id';

const InnerPageByLang: React.FC = () => {
    const { lang, page, slug } = useParams<{
        lang: string;
        page: string;
        slug: string;
    }>();

    if ((page === ROUTES.product.en || page === ROUTES.product.ru, slug)) {
        return <ProductId />;
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
