import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import ProductCard from '../../components/ProductCArd';
import { Favorite, TranslationsKeys } from '../../setting/Types';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import GETRequest from '../../setting/Request';
import { useEffect } from 'react';

export default function UserLiked() {
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const { data: favorites, isLoading: loading } = GETRequest<Favorite[]>(
        `/favorites`,
        'favorites',
        [lang]
    );
    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    const navigate = useNavigate();
    useEffect(() => {
        const userStr = localStorage.getItem('user-info');
        if (userStr) {
            const user = JSON.parse(userStr);
            console.log('user:', user);
        } else {
            navigate(`/en/login`);
        }
    }, []);
    // const { data: LikedProducts, isLoading: LikedProductsLOading } = useQuery<
    //     Product[]
    // >({
    //     queryKey: ['LikedProducts'],
    //     queryFn: async () => {
    //         try {
    //             const Liked_Products_string =
    //                 localStorage.getItem('liked_Produckts');
    //             const data = await axios
    //                 .post(
    //                     'https://brendo.avtoicare.az/api/getProducts',
    //                     {
    //                         product_ids: Liked_Products_string?.split(','),
    //                     },
    //                     {
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             'Accept-Language': lang,

    //                             Authorization: `Bearer YOUR_ACCESS_TOKEN`,
    //                         },
    //                     }
    //                 )
    //                 .then((res) => res.data);
    //             return data;
    //         } catch (error) {
    //             // toast.error('Error occurred');
    //             console.log(error, ``);
    //             throw error;
    //         }
    //     },
    // });
    console.log('favorites', favorites);

    if (loading || tarnslationLoading) {
        return <Loading />;
    }
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex max-sm:flex-col flex-row w-full gap-5 p-4">
                <UserAside active={2} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] lg:p-[40px] px-4 py-10">
                    <h1 className="text-[28px] font-semibold mb-[40px]">
                        {tarnslation?.Bəyəndiklərim}
                    </h1>
                    <div className=" grid lg:grid-cols-3 md:grid-cols-2   grid-cols-1 justify-items-center w-full gap-5 ">
                        {favorites?.map((item: Favorite) => (
                            <ProductCard bg="white" data={item.product} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
