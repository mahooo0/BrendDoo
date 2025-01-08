import Header from '../components/Header';
import { Footer } from '../components/Footer';
import ProductCard from '../components/ProductCArd';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { Product, TranslationsKeys } from '../setting/Types';
import GETRequest from '../setting/Request';
import { Link } from 'react-router-dom';

export default function Liked() {
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const { data: LikedProducts, isLoading: LikedProductsLOading } = useQuery<
        Product[]
    >({
        queryKey: ['LikedProducts'],
        queryFn: async () => {
            try {
                const Liked_Products_string =
                    localStorage.getItem('liked_Produckts');
                const data = await axios
                    .post(
                        'https://brendo.avtoicare.az/api/getProducts',
                        {
                            product_ids: Liked_Products_string?.split(','),
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': lang,

                                Authorization: `Bearer YOUR_ACCESS_TOKEN`,
                            },
                        }
                    )
                    .then((res) => res.data);
                return data;
            } catch (error) {
                // toast.error('Error occurred');
                console.log(error, ``);
                throw error;
            }
        },
    });
    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    if (LikedProductsLOading || tarnslationLoading) {
        return <Loading />;
    }
    console.log('LikedProducts:', LikedProducts);

    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px] mt-0">
                <div className="px-[40px] max-sm:px-4">
                    <div className="flex items-center gap-2">
                        <Link to={`${lang}`}>
                            <h6 className="text-nowrap self-stretch my-auto text-black hover:text-blue-600">
                                {tarnslation?.home}{' '}
                            </h6>
                        </Link>
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bb3b3dae771cd265db1accd95aa96f30bd9da3da88a57867743da53bebc0eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />

                        <Link
                            to={`/${lang}/${
                                ROUTES.product[
                                    lang as keyof typeof ROUTES.product
                                ]
                            }`}
                        >
                            <h6 className="text-nowrap self-stretch my-auto hover:text-blue-600">
                                {tarnslation?.Məhsullar}{' '}
                            </h6>
                        </Link> */}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bb3b3dae771cd265db1accd95aa96f30bd9da3da88a57867743da53bebc0eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <h6 className="text-nowrap self-stretch my-auto">
                            {tarnslation?.Bəyəndiklərim}{' '}
                        </h6>
                    </div>{' '}
                </div>

                <section className="lg:px-[40px] px-4">
                    <h3 className="text-[40px] font-semibold mt-[28px]">
                        {tarnslation?.Bəyəndiklərim}{' '}
                    </h3>{' '}
                    <div className="grid  w-full justify-self-center max-sm:w-full gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-[100px] mt-[40px]">
                        {LikedProducts?.map((product: Product) => (
                            <ProductCard bg="grey" data={product} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
