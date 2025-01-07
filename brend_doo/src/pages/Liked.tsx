import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import ProductCard from '../components/ProductCArd';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { Product, TranslationsKeys } from '../setting/Types';
import GETRequest from '../setting/Request';

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
                    <BreadCump />
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
