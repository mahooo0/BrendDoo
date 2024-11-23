import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import ProductCard from '../../components/ProductCArd';

export default function UserLiked() {
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex flex-row w-full gap-5 p-5">
                <UserAside active={2} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] p-[40px]">
                    <h1 className="text-[28px] font-semibold mb-[40px]">
                        Bəyəndiklərim
                    </h1>
                    <div className=" grid lg:grid-cols-3 grid-cols-1 justify-items-center w-full ">
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                    </div>
                </div>
            </main>
        </div>
    );
}
