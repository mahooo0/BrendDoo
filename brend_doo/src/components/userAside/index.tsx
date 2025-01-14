import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthResponse, TranslationsKeys } from '../../setting/Types';
import GETRequest from '../../setting/Request';
import ROUTES from '../../setting/routes';

function UserAside({ active }: { active: number }) {
    const [userInfo, setUserInfo] = useState<AuthResponse | null>(null);
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const navigate = useNavigate();
    const { data: translation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    useEffect(() => {
        const userStr = localStorage.getItem('user-info');
        if (userStr) {
            const user = JSON.parse(userStr);
            setUserInfo(user.data);
            console.log('user:', user);
        }
    }, []);
    return (
        <section className="flex overflow-hidden max-sm:flex-row flex-col grow max-sm:px-0  max-sm:justify-center z-[49] max-sm:shadow-md px-5 pt-5 max-sm:py-3 gap-2 max-sm:h-fit  h-[100vh] sticky top-2 pb-3 lg:w-full min-w-[88px] w-[88px] max-sm:w-full  text-base bg-[#F8F8F8] rounded-[20px]    lg:max-w-[325px] max-w-full ">
            <div className="flex flex-col self-center justify-center max-w-full font-medium text-black w-[122px] max-sm:w-12 max-sm:h-14 min-w-12 min-h-14 items-center">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1f1b628a1bdffc4af6dbbde03769db38732ca0c0a134eb6b33fe35ac9df3eb1?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    alt="İlaha Nazarova's profile picture"
                    className="object-contain self-center !w-20 aspect-square rounded-[100px]"
                />
                <h1 className="mt-3 max-sm:hidden text-center text-[16px] font-normal">
                    {userInfo?.customer.name}{' '}
                </h1>
            </div>
            <hr className="mt-4 w-full max-sm:hidden border border-solid border-black border-opacity-10" />
            <Link
                to={`/${lang}/${
                    ROUTES.userSettings[
                        lang as keyof typeof ROUTES.userSettings
                    ]
                }`}
            >
                <div
                    className={`flex w-full overflow-hidden flex-col lg:h-[56px] h-fit text-black justify-center p-1 ${
                        active === 0 ? 'bg-[#B1C7E4]' : 'bg-white'
                    } rounded-3xl mt-2`}
                >
                    <div className="flex gap-3 items-center">
                        <div
                            className={`p-2 rounded-full ${
                                active === 0 ? 'bg-white' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="3"
                                    stroke="black"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M13.7658 2.15224C13.3983 2 12.9324 2 12.0005 2C11.0686 2 10.6027 2 10.2351 2.15224C9.74505 2.35523 9.35571 2.74458 9.15272 3.23463C9.06005 3.45834 9.02379 3.7185 9.0096 4.09799C8.98875 4.65568 8.70274 5.17189 8.21943 5.45093C7.73612 5.72996 7.14608 5.71954 6.65268 5.45876C6.31693 5.2813 6.07349 5.18262 5.83342 5.15102C5.30753 5.08178 4.77567 5.22429 4.35485 5.5472C4.03923 5.78938 3.80626 6.1929 3.34032 6.99993C2.87438 7.80697 2.64141 8.21048 2.58948 8.60491C2.52025 9.1308 2.66276 9.66266 2.98566 10.0835C3.13305 10.2756 3.34019 10.437 3.66167 10.639C4.13429 10.936 4.43838 11.4419 4.43835 12C4.43832 12.5581 4.13424 13.0639 3.66167 13.3608C3.34013 13.5629 3.13297 13.7244 2.98557 13.9165C2.66266 14.3373 2.52015 14.8691 2.58938 15.395C2.64131 15.7894 2.87428 16.193 3.34022 17C3.80616 17.807 4.03913 18.2106 4.35475 18.4527C4.77557 18.7756 5.30743 18.9181 5.83333 18.8489C6.07338 18.8173 6.31681 18.7186 6.65253 18.5412C7.14596 18.2804 7.73605 18.27 8.21939 18.549C8.70273 18.8281 8.98874 19.3443 9.0096 19.9021C9.0238 20.2815 9.06006 20.5417 9.15272 20.7654C9.35571 21.2554 9.74505 21.6448 10.2351 21.8478C10.6027 22 11.0686 22 12.0005 22C12.9324 22 13.3983 22 13.7658 21.8478C14.2559 21.6448 14.6452 21.2554 14.8482 20.7654C14.9409 20.5417 14.9772 20.2815 14.9914 19.902C15.0122 19.3443 15.2982 18.8281 15.7815 18.549C16.2648 18.2699 16.8549 18.2804 17.3484 18.5412C17.6841 18.7186 17.9275 18.8172 18.1675 18.8488C18.6934 18.9181 19.2253 18.7756 19.6461 18.4527C19.9617 18.2105 20.1947 17.807 20.6606 16.9999C21.1266 16.1929 21.3595 15.7894 21.4115 15.395C21.4807 14.8691 21.3382 14.3372 21.0153 13.9164C20.8679 13.7243 20.6607 13.5628 20.3392 13.3608C19.8666 13.0639 19.5626 12.558 19.5626 11.9999C19.5626 11.4418 19.8667 10.9361 20.3392 10.6392C20.6608 10.4371 20.868 10.2757 21.0154 10.0835C21.3383 9.66273 21.4808 9.13087 21.4116 8.60497C21.3596 8.21055 21.1267 7.80703 20.6607 7C20.1948 6.19297 19.9618 5.78945 19.6462 5.54727C19.2254 5.22436 18.6935 5.08185 18.1676 5.15109C17.9276 5.18269 17.6841 5.28136 17.3484 5.4588C16.855 5.71959 16.2649 5.73002 15.7816 5.45096C15.2982 5.17191 15.0122 4.65566 14.9914 4.09794C14.9772 3.71848 14.9409 3.45833 14.8482 3.23463C14.6452 2.74458 14.2559 2.35523 13.7658 2.15224Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                />
                            </svg>
                        </div>
                        <div className="self-stretch my-auto w-[182px] lg:block  hidden">
                            {translation?.Tənzimləmələr}
                        </div>
                    </div>
                </div>
            </Link>
            <Link
                to={`/${lang}/${
                    ROUTES.orders[lang as keyof typeof ROUTES.orders]
                }`}
            >
                <div
                    className={`flex w-full overflow-hidden flex-col lg:h-[56px] h-fit text-black justify-center p-1 ${
                        active === 1 ? 'bg-[#B1C7E4]' : 'bg-white'
                    } rounded-3xl mt-2`}
                >
                    <div className="flex gap-3 items-center">
                        <div
                            className={`p-2 rounded-full ${
                                active === 1 ? 'bg-white' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_481_12649)">
                                    <path
                                        d="M15.0982 12.145C14.4961 11.5428 13.6802 11.2033 12.8287 11.2007H12.8183C11.9628 11.1982 11.1419 11.5381 10.5384 12.1446L10.0205 12.6646L9.50049 12.1446C8.89792 11.5391 8.07846 11.1992 7.2242 11.2007H7.21341C5.43314 11.2062 3.99447 12.6539 4.00002 14.4342C4.00267 15.2857 4.34215 16.1016 4.94432 16.7036L9.73448 21.493C9.80948 21.568 9.91117 21.6102 10.0173 21.6102H10.0249C10.1311 21.6103 10.233 21.5681 10.3081 21.493L15.0978 16.7036C16.3567 15.4449 16.3568 13.4039 15.0982 12.145ZM14.5322 16.138L10.0212 20.6486L5.50984 16.138C4.57109 15.1943 4.56649 13.6709 5.49944 12.7214C5.95162 12.2605 6.57009 12.0009 7.21575 12.0007H7.22415C7.86712 11.9991 8.48409 12.2545 8.93767 12.7102L9.73443 13.5074C9.89622 13.6573 10.1462 13.6573 10.308 13.5074L11.1048 12.7102C11.5583 12.2544 12.1753 11.999 12.8183 12.0007H12.8263C14.1647 12.0048 15.2464 13.0932 15.2423 14.4316C15.2403 15.0719 14.985 15.6854 14.5322 16.138Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M22.7991 23.5724L21.5992 6.37329C21.5846 6.16325 21.4097 6.00041 21.1992 6.00091H17.5994V4.80097C17.6007 2.15145 15.4539 0.00255856 12.8044 0.00125863C12.3283 0.00100864 11.8549 0.0716551 11.3997 0.210798C8.86591 -0.563663 6.18399 0.862516 5.40953 3.39629C5.27039 3.85152 5.19974 4.32494 5.19999 4.80097V6.00091H2.80011C2.58957 6.00041 2.41468 6.16325 2.40013 6.37329L1.20019 23.5724C1.18494 23.7928 1.35123 23.9838 1.57162 23.9991C1.58112 23.9997 1.59067 24 1.60017 24H22.3991C22.51 24 22.6159 23.9539 22.6915 23.8728C22.7675 23.792 22.8065 23.6832 22.7991 23.5724ZM12.7996 0.801169C15.0076 0.803619 16.797 2.59293 16.7994 4.80097V6.00091H14.7995V4.80097C14.7989 3.1958 13.9954 1.69732 12.6588 0.808368C12.706 0.806768 12.752 0.801169 12.7996 0.801169ZM13.9995 4.80097V6.00091H8.79981V4.80097C8.80281 3.13405 9.83851 1.64343 11.3997 1.05916C12.9609 1.64348 13.9965 3.13405 13.9995 4.80097ZM5.99995 4.80097C6.0024 2.59293 7.79171 0.803619 9.99975 0.801169C10.0473 0.801169 10.0933 0.806768 10.1405 0.808368C8.80396 1.69727 8.0005 3.1958 7.99985 4.80097V6.00091H5.99995V4.80097ZM2.02895 23.2L3.17329 6.80087H5.19999V7.60083H5.99995V6.80087H13.9995V7.60083H14.7995V6.80087H16.8262L17.9701 23.2H2.02895ZM19.3649 23.2L20.3992 22.1657L21.4336 23.2H19.3649ZM20.7852 21.4205L19.5993 7.56683L18.7993 7.63483L19.9832 21.4489L18.7357 22.6965L17.6286 6.80087H20.826L21.9256 22.5601L20.7852 21.4205Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M6.00031 7.60083V8.00081C6.00031 8.2217 5.82122 8.40079 5.60033 8.40079C5.37944 8.40079 5.20035 8.2217 5.20035 8.00081V7.60083H4.40039V8.00081C4.40039 8.66353 4.93761 9.20075 5.60033 9.20075C6.26305 9.20075 6.80027 8.66353 6.80027 8.00081V7.60083H6.00031Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M14.7991 7.60083V8.00081C14.7991 8.2217 14.62 8.40079 14.3992 8.40079C14.1783 8.40079 13.9992 8.2217 13.9992 8.00081V7.60083H13.1992V8.00081C13.1992 8.66353 13.7364 9.20075 14.3992 9.20075C15.0619 9.20075 15.5991 8.66353 15.5991 8.00081V7.60083H14.7991Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_481_12649">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="self-stretch my-auto w-[182px] lg:block  hidden">
                            {' '}
                            {translation?.Sifarişlərim}
                        </div>
                    </div>
                </div>
            </Link>
            <Link
                to={`/${lang}/${
                    ROUTES.likedUser[lang as keyof typeof ROUTES.likedUser]
                }`}
            >
                <div
                    className={`flex w-full overflow-hidden lg:h-[56px] h-fit flex-col text-black justify-center p-1 ${
                        active === 2 ? 'bg-[#B1C7E4]' : 'bg-white'
                    } rounded-3xl mt-2`}
                >
                    <div className="flex gap-3 items-center">
                        <div
                            className={`p-2 rounded-full ${
                                active === 2 ? 'bg-white' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div className="self-stretch my-auto w-[182px] lg:block  hidden">
                            {translation?.Bəyəndiklərim}{' '}
                        </div>
                    </div>
                </div>
            </Link>
            <Link
                to={`/${lang}/${
                    ROUTES.notification[
                        lang as keyof typeof ROUTES.notification
                    ]
                }`}
            >
                <div
                    className={`flex w-full lg:h-[56px] h-fit overflow-hidden flex-col text-black justify-center p-1 ${
                        active === 3 ? 'bg-[#B1C7E4]' : 'bg-white'
                    } rounded-3xl mt-2`}
                >
                    <div className="flex gap-3 items-center">
                        <div
                            className={`p-2 rounded-full ${
                                active === 3 ? 'bg-white' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.0006 9.7041V9C19.0006 5.13401 15.8665 2 12.0006 2C8.13456 2 5.00055 5.13401 5.00055 9V9.7041C5.00055 10.5491 4.75043 11.3752 4.28172 12.0783L3.13311 13.8012C2.08398 15.3749 2.88491 17.5139 4.70962 18.0116C9.48307 19.3134 14.518 19.3134 19.2915 18.0116C21.1162 17.5139 21.9171 15.3749 20.868 13.8012L19.7194 12.0783C19.2507 11.3752 19.0006 10.5491 19.0006 9.7041Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <rect
                                    x="16"
                                    width="8"
                                    height="8"
                                    rx="4"
                                    fill="#FD0769"
                                />
                            </svg>
                        </div>
                        <div className="self-stretch my-auto w-[182px] lg:block  hidden">
                            {translation?.Bildirşlər}{' '}
                        </div>
                    </div>
                </div>
            </Link>
            <div
                className="cursor-pointer"
                onClick={() => {
                    localStorage.removeItem('user-info');
                    navigate(
                        `/${lang}/${
                            ROUTES.home[lang as keyof typeof ROUTES.home]
                        }`
                    );
                }}
            >
                <div
                    className={`flex lg:h-[56px] h-fit w- overflow-hidden flex-col text-black justify-center p-1 ${
                        active === 4 ? 'bg-[#B1C7E4]' : 'bg-white'
                    } rounded-3xl mt-2`}
                >
                    <div className="flex gap-3 items-center">
                        <div
                            className={`p-2 rounded-full ${
                                active === 3 ? 'bg-white' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                                    stroke="#FD0769"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                                    stroke="#FD0769"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="self-stretch my-auto w-[182px] lg:block  hidden  text-[#FD0769]">
                            {translation?.Çıxış}{' '}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserAside;
