export type Category = {
    id: number;
    title: string;
    subCategories: SubCategory[];
    filters: Filter[];
};

export type SubCategory = {
    id: number;
    title: string;
};

export type Filter = {
    id: number;
    title: string;
    options: Option[];
};

type Option = {
    id: number;
    title: string;
    color_code: string | null;
};
export type HomeHero = {
    id: number;
    title: string;
    description: string;
    image: string;
};
export type Advanteges = {
    id: number;
    title: string;
    icon: string;
};
export type ProductResponse = {
    data: Product[];
    meta: Meta;
};

export type Product = {
    id: number;
    title: string;
    price: string;
    discount: string | null;
    discounted_price: string;
    unit: string | null;
    category: Category;
    sub_category: SubCategory;
    brand: Brand;
    image: string;
    sliders: Slider[];
    slug: {
        en: string;
        ru: string;
    };
};

export type Brand = {
    id: number;
    title: string;
    logo: string;
};

type Slider = {
    id: number;
    image: string;
};

type Meta = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};
export type RulesType = {
    id: number;
    title: string;
    description: string; // Since the description contains HTML-like content, you can use `string`.
};
export type Translation = {
    [key: string]: string;
};

export type TranslationsKeys = Record<keyof Translation, string>;

export type Tiktok = {
    id: number;
    title: string;
    image: string;
    products: Product[];
};

export type Tiktoks = Tiktok[];
export interface SpecialOffer {
    id: number;
    title: string;
    discount: string;
    description: string;
}

export type HomeCategory = {
    id: number;
    title: string;
    products: Product[];
};
export type LoginBunner = {
    title: string;
    id: string; // A string identifier or message
    image: string; // URL to the primary image
    second_image: string; // URL to the secondary image
};
export type SocialMediaLink = {
    id: number; // A numeric identifier
    title: string; // The name of the social media platform
    url: string; // URL to the social media page
    icon: string; // URL to the icon image
};
export type Holideys = {
    id: number;
    title: string;
    value: string;
    description: string;
    video: string;
};
export type About = {
    id: number;
    title: string;
    description: string; // Assuming this will remain an HTML string.
    image: string; // URL to the image.
};
export type FaqCategory = {
    id: number;
    title: string;
};
export type FaqItem = {
    id: number;
    title: string;
    description: string;
};
export type ProductDetail = {
    id: number;
    sub_category_id: number;
    category_id: number;
    title: string;
    slug: {
        en: string;
        ru: string;
    };
    price: string;
    discount: string | null;
    discounted_price: string;
    unit: string;
    category: {
        id: number;
        title: string;
        subCategories: {
            id: number;
            title: string;
        }[];
        filters: {
            id: number;
            title: string;
            options: {
                id: number;
                title: string;
                color_code: string | null;
            }[];
        }[];
    };
    sub_category: {
        id: number;
        title: string;
    };
    brand: string | null;
    image: string;
    sliders: {
        id: number;
        image: string;
    }[];
    comments: {
        id: number;
        comment: string;
        star: number;
        customer: {
            id: number;
            name: string;
            email: string;
            phone: string;
        };
    }[];
    options: {
        id: number;
        is_default: number;
        title: string;
        color_code: string | null;
    }[];
};
export type ConmtactItem = {
    id: number;
    title: string;
    value: string;
    icon: string;
};
export type AuthResponse = {
    token: string;
    customer: {
        id: number;
        name: string;
        email: string;
        phone: string;
    };
};

export type BaskedItem = {
    id: number;
    quantity: number;
    price: string;
    product: Product;
};
