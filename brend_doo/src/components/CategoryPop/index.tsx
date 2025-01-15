import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryNavigation() {
    return (
        <div className="w-full max-w-7xl mx-auto bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-4 p-4">
                {/* Sidebar Categories */}
                <div className="space-y-2">
                    <CategoryLink href="/kadin" active>
                        Kadın
                    </CategoryLink>
                    <CategoryLink href="/erkek">Erkek</CategoryLink>
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
                    </CategoryLink>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <CategoryColumn
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
                    />
                </div>
            </div>
        </div>
    );
}

function CategoryLink({
    href,
    children,
    active = false,
}: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <Link
            to={href}
            className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors ${
                active ? 'text-[#3873C3] font-medium' : 'text-gray-700'
            }`}
        >
            <span>{children}</span>
            <ChevronRight className="h-4 w-4" />
        </Link>
    );
}

function CategoryColumn({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="space-y-4">
            <h3 className="font-medium text-[#3873C3]">{title}</h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item}>
                        <Link
                            to="#"
                            className="text-sm text-gray-600 hover:text-[#3873C3] hover:underline"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
