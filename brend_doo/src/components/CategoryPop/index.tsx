import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import { CatalogCategory } from '../../setting/Types';
import { useEffect, useState } from 'react';
import ROUTES from '../../setting/routes';

export default function CategoryNavigation({
    handleClose,
}: {
    handleClose: () => void;
}) {
    const [CurretCategory, setCurrentCategory] = useState<number>(0);
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const { data: catalog_categories } = GETRequest<CatalogCategory[]>(
        `/catalog_categories`,
        'catalog_categories',
        [lang]
    );
    useEffect(() => {
        if (catalog_categories) {
            setCurrentCategory(catalog_categories[0].id);
        }
    }, [catalog_categories]);
    console.log('catalog_categories', catalog_categories);

    return (
        <div className="w-full max-w-7xl mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-4 p-4">
                {/* Sidebar Categories */}
                <div className="space-y-2">
                    {catalog_categories?.map((item) => (
                        <CategoryLink
                            link={`/${lang}/${
                                ROUTES.product[
                                    lang as keyof typeof ROUTES.product
                                ]
                            }?category=${item.id}`}
                            action={() => {
                                setCurrentCategory(item.id);
                            }}
                            active={item.id === CurretCategory}
                        >
                            <img src={item.image} alt="" className="w-5 h-5" />
                            {item.title}
                        </CategoryLink>
                    ))}
                    {/* <CategoryLink href="/erkek">Erkek</CategoryLink>
                    <CategoryLink href="/anne-cocuk">Anne & Çocuk</CategoryLink>
                    <CategoryLink href="/ev-mobilya">Ev & Mobilya</CategoryLink>
                    <CategoryLink href="/supermarket">Süpermarket</CategoryLink>
                    <CategoryLink href="/kozmetik">Kozmetik</CategoryLink>
                    <CategoryLink href="/ayakkabi-canta">
                        Ayakkabı & Çanta
                    </CategoryLink>
                    <CategoryLink href="/elektronik">Elektronik</CategoryLink>
                    <CategoryLink href="/spor-outdoor">
                        Spor & Outdoor
                    </CategoryLink> */}
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {catalog_categories
                        ?.filter((item) => item.id === CurretCategory)
                        .map((Category1) => {
                            return Category1.subCategories.map((Category2) => (
                                <div className="space-y-4">
                                    <h3 className="font-medium text-[#3873C3] flex flex-row gap-2  items-center hover:text-[#3873C3] hover:underline cursor-pointer">
                                        <Link
                                            onClick={() => {
                                                handleClose();
                                            }}
                                            to={`/${lang}/${
                                                ROUTES.product[
                                                    lang as keyof typeof ROUTES.product
                                                ]
                                            }?category=${
                                                Category1.id
                                            }&subCategory=${Category2.id}`}
                                        >
                                            {Category2.title}
                                        </Link>
                                    </h3>
                                    <ul className="space-y-2">
                                        {Category2.third_categories.map(
                                            (item) => (
                                                <li key={item.id}>
                                                    <Link
                                                        onClick={() => {
                                                            handleClose();
                                                        }}
                                                        to={`/${lang}/${
                                                            ROUTES.product[
                                                                lang as keyof typeof ROUTES.product
                                                            ]
                                                        }?category=${
                                                            Category1.id
                                                        }&subCategory=${
                                                            Category2.id
                                                        }&third_category=${
                                                            item.id
                                                        }`}
                                                        className="text-sm text-gray-600 hover:text-[#3873C3] hover:underline"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ));
                        })}

                    {/* <CategoryColumn
                        title="Giyim"
                        items={[
                            'Elbise',
                            'Tişört',
                            'Gömlek',
                            'Kot Pantolon',
                            'Kot Ceket',
                            'Pantolon',
                            'Mont',
                            'Bluz',
                            'Ceket',
                            'Etek',
                            'Kazak',
                        ]}
                    />
                    <CategoryColumn
                        title="Ayakkabı"
                        items={[
                            'Topuklu Ayakkabı',
                            'Sneaker',
                            'Günlük Ayakkabı',
                            'Babet',
                            'Sandalet',
                            'Bot',
                            'Çizme',
                        ]}
                    />
                    <CategoryColumn
                        title="Çanta"
                        items={[
                            'Omuz Çantası',
                            'Sırt Çantası',
                            'Bel Çantası',
                            'Okul Çantası',
                            'Laptop Çantası',
                            'Portföy',
                            'El Çantası',
                        ]}
                    />
                    <CategoryColumn
                        title="İç Giyim"
                        items={[
                            'Pijama Takımı',
                            'Gecelik',
                            'Sütyen',
                            'İç Çamaşırı Takımları',
                            'Fantezi Giyim',
                            'Çorap',
                        ]}
                    />
                    <CategoryColumn
                        title="Spor & Outdoor"
                        items={[
                            'Sweatshirt',
                            'Tişört',
                            'Spor Sütyeni',
                            'Tayt',
                            'Eşofman',
                            'Koşu Ayakkabısı',
                            'Spor Çantası',
                        ]}
                    /> */}
                </div>
            </div>
        </div>
    );
}

function CategoryLink({
    action,
    children,
    active = false,
    link,
}: {
    action: () => void;
    children: React.ReactNode;
    active?: boolean;
    link: string;
}) {
    return (
        <div
            onMouseEnter={() => action()}
            className={`flex items-center cursor-pointer justify-between p-2 rounded hover:bg-gray-100 transition-colors ${
                active ? 'text-[#3873C3] font-medium' : 'text-gray-700'
            }`}
        >
            <Link to={link}>
                <span className="flex flex-row gap-2 justify-center items-center">
                    {children}
                </span>
            </Link>
            <ChevronRight className="h-4 w-4" />
        </div>
    );
}
