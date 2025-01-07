import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import AlphabeticalList from '../components/AlphabeticalList';
import { useParams } from 'react-router-dom';
import GETRequest from '../setting/Request';
import { Brand, TranslationsKeys } from '../setting/Types';
import Loading from '../components/Loading';

export default function Brends() {
    const { lang = 'ru' } = useParams<{ lang: string }>();
    const { data: Brends, isLoading: BrendsLoading } = GETRequest<Brand[]>(
        `/categories`,
        'categories',
        [lang]
    );
    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    if (BrendsLoading || tarnslationLoading) {
        return <Loading />;
    }
    const russianAlphabet = [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ё',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ъ',
        'Ы',
        'Ь',
        'Э',
        'Ю',
        'Я',
    ];
    const englishAlphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px] mt-0 max-sm:mb-10 mb-[100px]">
                <div className="px-[40px] max-sm:px-4">
                    <BreadCump />
                </div>

                <section className="px-[40px] max-sm:px-4">
                    <h3 className="text-[40px] max-sm:text-[32px] font-semibold mt-[28px] mb-[40px]">
                        {tarnslation?.Brendlər}{' '}
                    </h3>{' '}
                    <AlphabeticalList
                        Brends={Brends}
                        letters={
                            lang === 'ru' ? russianAlphabet : englishAlphabet
                        }
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}
