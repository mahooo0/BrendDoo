import { useNavigate, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ROUTES from '../../setting/routes';
import GETRequest from '../../setting/Request';
import {
    Category,
    ConmtactItem,
    SocialMediaLink,
    TranslationsKeys,
} from '../../setting/Types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ChevronDown } from 'lucide-react';
export function Footer() {
    const navigate = useNavigate();
    const [inputvalue, setinputvalue] = useState<string>('');
    const [validatemessage, setvalidatemessage] = useState<string>('');
    const { lang = 'ru' } = useParams<{ lang: string }>();
    const { data: categories } = GETRequest<Category[]>(
        `/categories`,
        'categories',
        [lang]
    );
    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const { data: socials } = GETRequest<SocialMediaLink[]>(
        `/socials`,
        'socials',
        []
    );
    const { data: ContactInfo } = GETRequest<ConmtactItem[]>(
        `/contact_items`,
        'contact_items',
        [lang]
    );
    console.log('ContactInfo', ContactInfo);

    return (
        <div className="overflow-hidden bg-black">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-sm:mt-[10px] max-md:max-w-full">
                        <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full ">
                            <div className="w-full max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col ml-5 w-full justify-between max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-row max-sm:flex-col justify-between flex-wrap w-full gap-10 items-start mt-[48px] max-md:mt-10 max-sm:mt-5 max-md:max-w-full max-sm: order-1  ">
                                            <div className="flex flex-col w-[158px]">
                                                <div className="text-lg font-medium text-white">
                                                    {tarnslation?.Kateqoriyalar}
                                                </div>
                                                <div className="flex flex-col gap-2 mt-5 w-full text-base text-white text-opacity-80">
                                                    {categories?.map(
                                                        (item: Category) => (
                                                            <div
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    navigate(
                                                                        `/${lang}/${
                                                                            ROUTES
                                                                                .product[
                                                                                lang as keyof typeof ROUTES.product
                                                                            ]
                                                                        }?category=${
                                                                            item.id
                                                                        }`
                                                                    )
                                                                }
                                                            >
                                                                {item.title}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-[171px] gap-2">
                                                <div className="text-lg font-medium text-white">
                                                    {tarnslation?.Şirkət}
                                                </div>
                                                <div className="flex flex-col mt-5 text-base text-white text-opacity-80">
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .about[
                                                                        lang as keyof typeof ROUTES.about
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {
                                                            tarnslation?.Şirkət_haqqında
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex flex-col  text-base text-white text-opacity-80">
                                                    <HashLink
                                                        to={`/${lang}/${
                                                            ROUTES.about[
                                                                lang as keyof typeof ROUTES.about
                                                            ]
                                                        }#faq`}
                                                        className="cursor-pointer"
                                                        smooth
                                                    >
                                                        {
                                                            tarnslation?.Tez_tez_verilən_suallar
                                                        }{' '}
                                                    </HashLink>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-[164px]">
                                                <div className="text-lg font-medium text-white">
                                                    {
                                                        tarnslation?.Digər_keçidlər
                                                    }{' '}
                                                </div>
                                                <div className="flex flex-col gap-2 mt-5 max-w-full text-base text-white text-opacity-80 w-[164px]">
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .contact[
                                                                        lang as keyof typeof ROUTES.contact
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {tarnslation?.Əlaqə}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .deliveryRules[
                                                                        lang as keyof typeof ROUTES.deliveryRules
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {
                                                            tarnslation?.Çatdırılma_və_ödəniş
                                                        }{' '}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .brends[
                                                                        lang as keyof typeof ROUTES.brends
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {tarnslation?.Brendlər}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .rules[
                                                                        lang as keyof typeof ROUTES.rules
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {
                                                            tarnslation?.Qaydalar_və_şərtlər
                                                        }{' '}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-[164px]">
                                                <div className="text-lg font-medium text-white">
                                                    {
                                                        tarnslation?.Digər_keçidlər
                                                    }{' '}
                                                </div>
                                                <div className="flex flex-col gap-2 mt-5 max-w-full text-base text-white text-opacity-80 w-[164px]">
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .contact[
                                                                        lang as keyof typeof ROUTES.contact
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {tarnslation?.Əlaqə}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .deliveryRules[
                                                                        lang as keyof typeof ROUTES.deliveryRules
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {
                                                            tarnslation?.Çatdırılma_və_ödəniş
                                                        }{' '}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .brends[
                                                                        lang as keyof typeof ROUTES.brends
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {tarnslation?.Brendlər}
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate(
                                                                `/${lang}/${
                                                                    ROUTES
                                                                        .rules[
                                                                        lang as keyof typeof ROUTES.rules
                                                                    ]
                                                                }`
                                                            )
                                                        }
                                                    >
                                                        {
                                                            tarnslation?.Qaydalar_və_şərtlər
                                                        }{' '}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex lg:flex-row  flex-col justify-center items-center order-6  lg:gap-[300px] gap-5">
                                <div className="flex flex-col mt-5  ">
                                    <div className="mt-7 w-full border border-solid border-white border-opacity-10 min-h-[1px]" />
                                    <div className="flex flex-col mt-7 w-full text-sm ">
                                        <div className="leading-5 text-white">
                                            {tarnslation?.Ən_son_teklifler}
                                        </div>
                                        <div className="flex mt-36 overflow-hidden gap-5 justify-between py-1.5 pr-1.5 pl-4 mt-5  w-full border border-solid bg-white bg-opacity-0 border-white border-opacity-10 rounded-[100px] lg:min-w-[360px]">
                                            <div className="flex items-center gap-2 text-white text-opacity-60 w-full">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d54c92c55ebb5790287e2964bc3b43f1e4f8c94296eca7a946b46bc921b98d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                    className="object-contain w-5 aspect-square"
                                                />
                                                <input
                                                    onChange={(e) =>
                                                        setinputvalue(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={inputvalue}
                                                    type="email"
                                                    placeholder="Email"
                                                    className="bg-transparent outline-none text-white placeholder-white placeholder-opacity-60 w-full max-sm:w-10"
                                                    required
                                                />
                                            </div>
                                            <button
                                                onClick={async () => {
                                                    const emailRegex =
                                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                    if (
                                                        !emailRegex.test(
                                                            inputvalue
                                                        )
                                                    ) {
                                                        setvalidatemessage(
                                                            'incorrect email type'
                                                        );
                                                    } else {
                                                        setvalidatemessage('');
                                                        axios
                                                            .post(
                                                                'https://brendo.avtoicare.az/api/subscribe',
                                                                {
                                                                    email: inputvalue,
                                                                }
                                                            )
                                                            .then(() =>
                                                                toast.success(
                                                                    'message sucsesfully sended'
                                                                )
                                                            )
                                                            .catch((error) => {
                                                                console.log(
                                                                    error
                                                                );
                                                                toast.error(
                                                                    'something went wrong'
                                                                );
                                                            });
                                                    }
                                                }}
                                                className="px-6 py-3.5 font-medium text-white bg-blue-600 rounded-[100px] max-md:px-5"
                                            >
                                                {tarnslation?.Abunə_ol}
                                            </button>
                                        </div>
                                        <p className="text-red-600">
                                            {validatemessage}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4  items-center self-end h-[40px]  w-full  max-md:mt-10">
                                    {socials?.map((item: SocialMediaLink) => (
                                        <Link to={item.url}>
                                            <img
                                                loading="lazy"
                                                alt={item.title}
                                                src={item.icon}
                                                className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 mt-7 max-sm:hidden h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                        <div className="self-start max-sm:hidden mt-7 ml-10 text-sm text-white max-md:ml-2.5">
                            ©2024 | Brendoo
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-sm:order-2 max-md:w-full">
                    <div className="flex overflow-hidden flex-col  grow px-10 pt-12 pb-28 w-full bg-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-2.5 max-md:max-w-full">
                        <div className="col-span-1 lg:col-span-2">
                            <h3 className="mb-6 text-lg font-semibold text-white">
                                Sualın var? Müraciət et
                            </h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Ad və soyad"
                                    className="w-full px-4 py-2 bg-white bg-opacity-10 text-white rounded-[20px] focus:outline-none focus:ring-2 "
                                />
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="00 000 00 00"
                                        className="w-full pl-16 pr-4 py-2 bg-white bg-opacity-10 text-white rounded-[20px] focus:outline-none focus:ring-2 "
                                    />
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        +994
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 bg-white bg-opacity-10 text-white rounded-[20px] focus:outline-none focus:ring-2 "
                                />
                                <div className="relative">
                                    <select className="w-full rounded-[20px] px-4 py-2 bg-white bg-opacity-10 text-white appearance-none focus:outline-none focus:ring-2 ">
                                        <option value="" className="text-black">
                                            Kateqoriya seç
                                        </option>
                                        <option
                                            value="kosmetika"
                                            className="text-black"
                                        >
                                            Kosmetika
                                        </option>
                                        <option
                                            value="geyim"
                                            className="text-black"
                                        >
                                            Geyim
                                        </option>
                                        <option
                                            value="elektronika"
                                            className="text-black"
                                        >
                                            Elektronika
                                        </option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                                <textarea
                                    placeholder="Qeyd"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white bg-opacity-10 text-white rounded-[20px] focus:outline-none focus:ring-2 "
                                />
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#3873C3] text-white rounded-[100px] hover:bg-blue-700 transition-colors"
                                >
                                    Göndər
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className=" gap-4  max-sm:flex hidden  items-center self-start max-sm:mt-4 mt-36 max-md:mt-10 order-4">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c891e0d2e270a6c2698c5da6121f1272da234ccd0fec708d0d297b73a3e1868?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e06bb4cf3fc4b77ac6b044ac7bdda391aba00d1bcca1a4249df9e7464d23e24e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c41d5cc5afe0acbdb644fa2679576ddbe04783fb7c40be5776c38c21dceafdc5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9c6260e063308a546a293046cfcff2f5c69c163e27c20ee30538b452a359ca?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
                    />
                </div> */}

                <div className="shrink-0 max-sm:flex hidden max-sm:mt-0  mt-7 h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                <div className="self-start max-sm:mt-3 max-sm:mb-6 max-sm:flex hidden  mt-7 ml-10 text-sm text-white max-md:ml-2.5 order-3">
                    ©2024 | Brendoo
                </div>
            </div>
        </div>
    );
}
