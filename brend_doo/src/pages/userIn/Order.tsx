import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import NoneToBlue from '../../components/buttons/NoneT0Blue';
import { Link, useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import { Order, TranslationsKeys } from '../../setting/Types';
import Loading from '../../components/Loading';
import ROUTES from '../../setting/routes';
// https://brendo.avtoicare.az/api/getOrders
export default function ORder() {
    const { lang = 'ru' } = useParams<{ lang: string }>();

    const { data: translation, isLoading: transloationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    const { data: Orders, isLoading: OrdersLoading } = GETRequest<Order[]>(
        `/getOrders`,
        'getOrders',
        [lang]
    );
    console.log('Orders:', Orders);

    if (transloationLoading || OrdersLoading) {
        return <Loading />;
    }
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex flex-row max-sm:flex-col w-full gap-5 p-4">
                <UserAside active={1} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] lg:p-[40px] px-2 py-10">
                    <div className="flex flex-row flex-wrap justify-between">
                        <h1 className="text-[28px] font-semibold mb-[40px]">
                            {translation?.oders}
                        </h1>
                        <div
                            style={{ scrollbarWidth: 'none' }}
                            className="flex flex-row  overflow-x-scroll gap-4 h-fit justify-around"
                        >
                            <NoneToBlue>Hamısı</NoneToBlue>
                            <NoneToBlue>Hamısı</NoneToBlue>
                            <NoneToBlue>Hamısı</NoneToBlue>
                            <NoneToBlue>Hamısı</NoneToBlue>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 gap-6  px-[20px] [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent">
                        {Orders?.map((order) => (
                            <>
                                <div className="flex flex-wrap gap-10 items-center text-sm font-medium  justify-between ">
                                    <div className="flex gap-3 max-md:flex-col items-center lg:justify-start md:justify-start justify-start text-xs text-black text-opacity-60">
                                        <img
                                            loading="lazy"
                                            src={
                                                order.order_items[0].product
                                                    .image
                                            }
                                            className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                        />
                                        <div className="flex flex-col self-stretch my-auto  w-full">
                                            <div className="flex flex-col w-full">
                                                <div>{order.order_date}</div>
                                                <div className="mt-2 text-sm font-medium text-black">
                                                    {/* {order.} */}
                                                    {
                                                        order.order_items[0]
                                                            .product.title
                                                    }
                                                </div>
                                                <div className="mt-2">
                                                    {order.order_items.length}{' '}
                                                    {translation?.məhsul}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch my-auto text-orange-400">
                                        {order.status}
                                        {/* Sifariş edildi */}
                                    </div>
                                    <div className="flex gap-2 items-center self-stretch py-0.5 my-auto text-blue-600 border-b border-solid border-b-blue-600">
                                        <Link
                                            to={`/${lang}/${
                                                ROUTES.orderdetail[
                                                    lang as keyof typeof ROUTES.orderdetail
                                                ]
                                            }/${order.id}`}
                                        >
                                            <div className="self-stretch my-auto">
                                                {translation?.Ətraflı}

                                                {/* Ətraflı{' '} */}
                                            </div>
                                        </Link>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb33272426474b6cfc7e6fb7845ec75a127871361b134f28ac6d244fdcaafb03?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                        />
                                    </div>
                                </div>{' '}
                                <hr />
                            </>
                        ))}
                        {/* {Array.from({ length: 10 }).map(() => (
                            <>
                                {' '}
                                <div className="flex flex-wrap gap-10 items-center text-sm font-medium  justify-between ">
                                    <div className="flex gap-3 flex-wrap items-center lg:justify-start md:justify-start justify-start text-xs text-black text-opacity-60">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                        />
                                        <div className="flex flex-col self-stretch my-auto  w-full">
                                            <div className="flex flex-col w-full">
                                                <div>24 sentyabr 2024</div>
                                                <div className="mt-2 text-sm font-medium text-black">
                                                    Zara iki tərəfli kolleksiya
                                                    pencək
                                                </div>
                                                <div className="mt-2">
                                                    4 məhsul
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch my-auto text-orange-400">
                                        Sifariş edildi
                                    </div>
                                    <div className="flex gap-2 items-center self-stretch py-0.5 my-auto text-blue-600 border-b border-solid border-b-blue-600">
                                        <Link to={`/user/orders/${1}`}>
                                            <div className="self-stretch my-auto">
                                                Ətraflı{' '}
                                            </div>
                                        </Link>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb33272426474b6cfc7e6fb7845ec75a127871361b134f28ac6d244fdcaafb03?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                        />
                                    </div>
                                </div>{' '}
                                <hr />
                            </>
                        ))} */}
                    </div>
                </div>
            </main>
        </div>
    );
}
