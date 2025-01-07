type Route = {
    en: string;
    ru: string;
};

const ROUTES: { [key: string]: Route } = {
    home: {
        en: 'home',
        ru: 'домашняя',
    },
    about: {
        en: 'about',
        ru: 'онас',
    },
    contact: {
        en: 'contact',
        ru: 'контакт',
    },
    product: {
        en: 'product',
        ru: 'продукт',
    },
    login: {
        en: 'login',
        ru: 'вход',
    },
    brends: {
        en: 'brends',
        ru: 'бренды',
    },
    rules: {
        en: 'rules',
        ru: 'правила',
    },
    deliveryRules: {
        en: 'deliveryRules',
        ru: 'правила_доставки',
    },
    userSettings: {
        en: 'userSettings',
        ru: 'nastroykapolzovatelya',
    },
    orders: {
        en: 'orders',
        ru: 'zakazi',
    },
    liked: {
        en: 'liked',
        ru: 'ponravivsheyesyaTovari',
    },
    notification: {
        en: 'notification',
        ru: 'uvedomleniya',
    },
    order: {
        en: 'order',
        ru: 'zakaz',
    },

    // services: {
    //     en: 'services',
    //     ru: 'услуги'
    // }
};

export const getRouteKey = (searchString: string): string | null => {
    for (const key in ROUTES) {
        if (
            ROUTES[key].en === searchString ||
            ROUTES[key].ru === searchString
        ) {
            return key;
        }
    }
    return null;
};

// Example usage to avoid 'declared but its value is never read' error
// console.log(getRouteKey('home'));
export default ROUTES;