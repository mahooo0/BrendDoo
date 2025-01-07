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
    return (
        <div className="overflow-hidden bg-black">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-sm:mt-[10px] max-md:max-w-full">
                        <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                            <div className="w-full max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-[16%] lg:mt-12 mt-3 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0857f2353cd7255e656a0a2479a123345dfdf271a45bcabb88ee880b53c2bbf3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 max-w-full aspect-[1.5] w-[120px] max-sm:mt-5 max-md:mt-10"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-row max-sm:flex-col flex-wrap justify-between gap-10 items-start mt-[48px] max-md:mt-10 max-sm:mt-5 max-md:max-w-full">
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

                                                    {/* <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate('/poducts')
                                                        }
                                                    >
                                                        Geyim
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate('/poducts')
                                                        }
                                                    >
                                                        Elektronika
                                                    </div>
                                                    <div
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            navigate('/poducts')
                                                        }
                                                    >
                                                        Endirimli məhsullar
                                                    </div> */}
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 max-sm:hidden items-center self-start mt-36 max-md:mt-10">
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

                                {/* <img
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
                                /> */}
                            </div>
                        </div>
                        <div className="shrink-0 mt-7 max-sm:hidden h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                        <div className="self-start max-sm:hidden mt-7 ml-10 text-sm text-white max-md:ml-2.5">
                            ©2024 | Brendoo
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow px-10 pt-12 pb-28 w-full bg-zinc-900 max-md:px-5 max-md:pb-24 max-md:mt-2.5 max-md:max-w-full">
                        <div className="self-start text-lg font-medium text-white">
                            {tarnslation?.Bizimlə_əlaqə}
                        </div>
                        <div className="flex flex-col mt-5">
                            <div className="flex flex-col w-full text-base text-white">
                                {ContactInfo?.map((item) => (
                                    <div className="flex overflow-hidden flex-col justify-center items-start p-2 w-full bg-white bg-opacity-[4%] rounded-[100px] max-md:pr-5">
                                        <div className="flex gap-3 items-center">
                                            <img
                                                loading="lazy"
                                                src={item.icon}
                                                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                                            />
                                            <div className="self-stretch my-auto">
                                                {item.value}{' '}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="flex overflow-hidden flex-col justify-center items-start p-2 mt-3 w-full whitespace-nowrap bg-white bg-opacity-[4%] rounded-[100px] max-md:pr-5">
                                    <div className="flex gap-3 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/161de883df74d279327ebe38239ac3ee158b349be262eab6d78ae5425d2bc1f6?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            nümunə@gmail.com
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="mt-7 w-full border border-solid border-white border-opacity-10 min-h-[1px]" />
                            <div className="flex flex-col mt-7 w-full text-sm">
                                <div className="leading-5 text-white">
                                    {tarnslation?.Ən_son_teklifler}
                                </div>
                                <div className="flex overflow-hidden gap-5 justify-between py-1.5 pr-1.5 pl-4 mt-5 w-full border border-solid bg-white bg-opacity-0 border-white border-opacity-10 rounded-[100px] lg:min-w-[360px]">
                                    <div className="flex items-center gap-2 text-white text-opacity-60">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d54c92c55ebb5790287e2964bc3b43f1e4f8c94296eca7a946b46bc921b98d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain w-5 aspect-square"
                                        />
                                        <input
                                            onChange={(e) =>
                                                setinputvalue(e.target.value)
                                            }
                                            value={inputvalue}
                                            type="email"
                                            placeholder="Email"
                                            className="bg-transparent outline-none text-white placeholder-white placeholder-opacity-60"
                                            required
                                        />
                                    </div>
                                    <button
                                        onClick={async () => {
                                            const emailRegex =
                                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            if (!emailRegex.test(inputvalue)) {
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
                                                        console.log(error);
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
                    </div>
                </div>
                <div className=" gap-4  max-sm:flex hidden  items-center self-start max-sm:mt-4 mt-36 max-md:mt-10">
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
                </div>

                <div className="shrink-0 max-sm:flex hidden max-sm:mt-0  mt-7 h-px border border-solid border-white border-opacity-10 max-md:max-w-full" />
                <div className="self-start max-sm:mt-3 max-sm:mb-6 max-sm:flex hidden  mt-7 ml-10 text-sm text-white max-md:ml-2.5">
                    ©2024 | Brendoo
                </div>
            </div>
        </div>
    );
}
