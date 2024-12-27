import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import Loading from '../components/Loading';
import GETRequest from '../setting/Request';
import { useParams } from 'react-router-dom';
import { RulesType } from '../setting/Types';

export default function DeliveryRules() {
    const { lang } = useParams<{ lang: string }>();
    const { data: rule, isLoading: ruleLoading } = GETRequest<RulesType>(
        `/delivery`,
        'delivery',
        [lang]
    );
    if (ruleLoading) return <Loading />;
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px]  px-[40px] max-sm:px-4 mb-[100px]  mt-6">
                <div className="">
                    <BreadCump />
                    <h3 className="text-[40px] font-semibold   max-sm:text-[32px] mt-[28px] mb-[40px]">
                        {rule?.title}{' '}
                    </h3>{' '}
                </div>

                <section
                    className="px-[28px] w-full bg-[#F8F8F8] py-[40px] rounded-[20px]  max-sm:px-4 max-sm:py-5"
                    dangerouslySetInnerHTML={{
                        __html: rule?.description ? rule?.description : '',
                    }}
                ></section>
            </main>
            <Footer />
        </div>
    );
}
