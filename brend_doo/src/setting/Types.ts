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

type Filter = {
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
