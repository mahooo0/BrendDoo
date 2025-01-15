import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import { AuthResponse, TranslationsKeys } from '../../setting/Types';
import { useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { cn } from '../../utils/cn';
import VerificationDialog from '../../components/otpPopup/dialog';

export default function UserSettings() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [ConfrimEmail, setConfrimEmail] = useState(false);
    const [ChangeEmail, setChangeEmail] = useState(false);
    const [NewEmail, setNewEmail] = useState('');

    const [userInfo, setUserInfo] = useState<AuthResponse | null>(null);
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
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
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex max-sm:flex-col flex-row w-full gap-5 p-4">
                <UserAside active={0} />
                <div className="flex overflow-hidden flex-col   lg:px-10 px-4 pt-10 pb-96 min-w-[230px] rounded-3xl bg-[#F8F8F8]  max-md:pb-24 w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full ">
                        <div className="text-3xl font-semibold text-black">
                            {translation?.settings}
                        </div>
                        <button
                            onClick={() => setChangeEmail(true)}
                            className="gap-2 self-stretch py-0.5 my-auto text-base font-medium text-blue-600 border-b border-solid border-b-blue-600"
                        >
                            {translation?.changeEmail}
                        </button>
                    </div>

                    <Formik
                        initialValues={{
                            name: '',
                            phone: '',
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                        }}
                        onSubmit={async (values) => {
                            if (values.confirmPassword != values.newPassword) {
                                toast.error(
                                    'the new password and confrim password need to be same '
                                );
                                return;
                            }

                            await axios
                                .post(
                                    'https://brendo.avtoicare.az/api/update',
                                    {
                                        email: userInfo?.customer.email,
                                        name: values.name,
                                        phone: values.phone,
                                        password: values.currentPassword,
                                        new_password: values.newPassword,
                                        new_password_confirmation:
                                            values.confirmPassword,
                                    },
                                    {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Authorization: `Bearer ${userInfo?.token}`,
                                        },
                                    }
                                )
                                .then(() => {
                                    toast.success(
                                        'user is sucsesfully updated'
                                    );
                                })
                                .catch((error) => {
                                    console.log(error);

                                    if (error.response.data.error) {
                                        error.response.data.error.map(
                                            (item: string) => {
                                                toast.error(item);
                                            }
                                        );
                                    }
                                });
                            console.log(values);
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col mt-10 w-full text-base text-black text-opacity-90 "
                            >
                                <div className="flex flex-wrap gap-3 items-center w-full ">
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <div className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                            {userInfo?.customer.name}
                                        </div>
                                    </div>
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <div className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                            {userInfo?.customer.email}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 items-center mt-3 w-full ">
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <div className="overflow-hidden flex px-4 flex-row items-center w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                            +7
                                            <input
                                                className="w-full focus:outline-none py-4 h-full"
                                                type="number"
                                                name="phone"
                                                placeholder=" 00 000 00 00"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            placeholder={
                                                translation?.Mövcud_şifrə
                                            }
                                            value={values.currentPassword}
                                            onChange={handleChange}
                                            className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] "
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 items-center mt-3 w-full text-black text-opacity-60 ">
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                            <input
                                                type={
                                                    !showPassword
                                                        ? 'password'
                                                        : 'text'
                                                }
                                                name="newPassword"
                                                placeholder={
                                                    translation?.Yeni_şifrə
                                                }
                                                value={values.newPassword}
                                                onChange={handleChange}
                                                className="flex-1 bg-transparent outline-none"
                                            />
                                            <img
                                                loading="lazy"
                                                src={
                                                    !showPassword
                                                        ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                        : '/svg/closedaye.svg'
                                                }
                                                className="object-contain shrink-0 w-6 aspect-square cursor-pointer lg:block md:block hidden"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                        <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                            <input
                                                type={
                                                    showPassword2
                                                        ? 'password'
                                                        : 'text'
                                                }
                                                name="confirmPassword"
                                                placeholder={
                                                    translation?.Şifrənin_təkrarı
                                                }
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                className="flex-1 bg-transparent outline-none"
                                            />
                                            <img
                                                loading="lazy"
                                                src={
                                                    showPassword2
                                                        ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                        : '/svg/closedaye.svg'
                                                }
                                                className="object-contain shrink-0 w-6 aspect-square cursor-pointer lg:block md:block hidden"
                                                onClick={() =>
                                                    setShowPassword2(
                                                        !showPassword2
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="gap-2.5 self-start px-10 leading-[19px] py-4 mt-7 lg:w-fit w-full text-base font-medium text-black border border-solid bg-[#B1C7E4] border-[#B1C7E4] rounded-[100px] max-md:px-5"
                                >
                                    {translation?.Yadda_saxla}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div
                    className={cn(
                        'fixed top-0 flex justify-center items-center  left-0 w-[100vw] duration-300 h-[100vh] z-[99999999999]',
                        !ChangeEmail
                            ? 'scale-0 opacity-0'
                            : ' opacity-100 scale-100'
                    )}
                >
                    <div
                        className="bg-black opacity-55 w-full h-full"
                        onClick={() => setChangeEmail(false)}
                    />
                    <div
                        className={cn(
                            'w-[520px] h-[440px] bg-white rounded-[20px] fixed  z-50'
                        )}
                    >
                        <Formik
                            initialValues={{ email: '' }}
                            onSubmit={async (values) => {
                                await axios
                                    .post(
                                        'https://brendo.avtoicare.az/api/change-email/request',
                                        { new_email: values.email },
                                        {
                                            headers: {
                                                'Content-Type':
                                                    'application/json',
                                                Authorization: `Bearer ${userInfo?.token}`,
                                            },
                                        }
                                    )
                                    .then(() => {
                                        toast.success(
                                            'Verification code sent to new email'
                                        );
                                        setNewEmail(values.email);
                                        setChangeEmail(false);
                                        setConfrimEmail(true);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        toast.error(
                                            'Failed to send verification code'
                                        );
                                    });
                            }}
                        >
                            {({ values, handleChange, handleSubmit }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col items-center justify-center py-[120px] px-[40px] w-full h-full relative"
                                >
                                    <img
                                        onClick={() => setChangeEmail(false)}
                                        src="/svg/close.svg"
                                        className=" absolute top-3 right-3 cursor-pointer"
                                        alt=""
                                    />
                                    <h4 className="text-[28px] font-semibold mb-2">
                                        Email adresini dəyiş!
                                    </h4>
                                    <p className="text-[16px] font-normal mb-10">
                                        Yeni email adresini qeyd et.
                                    </p>
                                    <input
                                        className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] mb-7"
                                        type="email"
                                        name="email"
                                        placeholder="Yeni email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="submit"
                                        className="gap-2.5 self-start w-full px-10 leading-[19px] py-4 text-base font-medium text-white border border-solid bg-[#3873C3] border-[#3873C3] rounded-[100px] max-md:px-5"
                                    >
                                        Kod göndər
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="z-[100]">
                    <VerificationDialog
                        email="ilahanazarli@gmail.com"
                        open={ConfrimEmail}
                        onClose={() => setConfrimEmail(false)}
                        onSubmit={async (code: any) => {
                            await axios
                                .post(
                                    'https://brendo.avtoicare.az/api/change-email/verify',
                                    {
                                        new_email: NewEmail,
                                        verification_code: code,
                                    },
                                    {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Authorization: `Bearer ${userInfo?.token}`,
                                        },
                                    }
                                )
                                .then(() => {
                                    toast.success(
                                        'Verification code sent to new email'
                                    );
                                })
                                .catch((error) => {
                                    console.log(error);
                                    toast.error(
                                        'Failed to send verification code'
                                    );
                                });
                            // console.log('Verification code:', code);
                            setConfrimEmail(false);
                        }}
                    />
                </div>
            </main>
        </div>
    );
}
