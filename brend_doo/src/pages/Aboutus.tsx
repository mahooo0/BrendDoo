import Header from '../components/Header';
import { Footer } from '../components/Footer';
import FAQSection from '../components/Faq';
import { BreadCump } from '../components/BroadCump';
import GETRequest from '../setting/Request';
import { useParams } from 'react-router-dom';
import { About, TranslationsKeys } from '../setting/Types';
import Loading from '../components/Loading';

export default function Aboutus() {
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    const { data: About, isLoading: AboutLoading } = GETRequest<About>(
        `/about`,
        'about',
        [lang]
    );
    if (AboutLoading || tarnslationLoading) {
        return <Loading />;
    }
    return (
        <div>
            <Header />
            <main className=" mt-0">
                <div className="px-[40px] max-sm:px-4 max-sm:pt-6 pt-[40px] mb-[28px]">
                    <BreadCump />
                </div>
                <section className="mb-[100px] max-sm:mb-[40px] max-sm:mt-10">
                    <div
                        className="w-full h-[500px] bg-cover bg-center flex items-center lg:justify-start justify-center max-sm:h-[300px]"
                        style={{
                            backgroundImage: `url(${About?.image})`,
                        }}
                    >
                        <h1 className="text-[40px] max-sm:text-[32px] lg:ml-[50%] font-bold text-[#081D39] lg:w-[60%] w-[80%] max-sm:w-[90%]  lg:pr-[100px]">
                            {About?.title}
                        </h1>
                    </div>

                    <div
                        className="mx-[40px] mt-[40px] max-sm:mt-5 max-sm:mx-4"
                        dangerouslySetInnerHTML={
                            About?.description
                                ? { __html: About?.description }
                                : { __html: '' }
                        }
                    ></div>
                </section>
                <FAQSection Title={tarnslation?.Tez_tez_verilən_suallar} />
            </main>
            <Footer />
        </div>
    );
}
