import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import GETRequest, { axiosInstance } from '../../setting/Request';
import { TranslationsKeys } from '../../setting/Types';
import ROUTES from '../../setting/routes';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentemail, setemail] = useState<string>('');
    const [forumValue, setforumValue] = useState<any | null>(null);
    const [variant, setvariant] = useState<1 | 2>(1);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Validation Schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Ad daxil edin'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(
                /^[0-9]{10}$/,
                'Phone number must be 10 digits long and start with 9 (e.g., 911123456)'
            ),
        email: Yup.string()
            .email('Email düzgün deyil')
            .required('Email daxil edin'),
        password: Yup.string()
            .min(8, 'Şifrə ən az 9 simvoldan ibarət olmalıdır')
            .required('Şifrə daxil edin'),
        acceptTerms: Yup.boolean()
            .oneOf([true], 'İstifadəçi qaydaları ilə razı olmalısınız')
            .required('İstifadəçi qaydaları ilə razı olmalısınız'),
    });
    const navigate = useNavigate();
    async function handleRegister(values: {
        name: string;
        phone: string;
        email: string;
        password: string;
        gender: string;
    }) {
        setemail(values.email);
        setforumValue(values);
        await axios
            .post('https://brendo.avtoicare.az/api/register', {
                name: values.name,
                phone: `${values.phone}`,
                email: values.email,
                password: values.password,
                gender: values.gender,
            })
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    localStorage.setItem('register-token', response.data.token);
                    // toast.success('registred sucsesfulley');
                    setvariant(2);
                }
            })
            .catch((error) => {
                console.log('er', error);
                // error.response.data.error.map((item: string) => {
                //     toast.error('aa');
                // });
                if (error.response.data.error) {
                    error.response.data.error.map((item: string) => {
                        toast.error(item);
                    });
                }
                // if (error.response.data.errors?.password) {
                //     toast.error(error.response.data.errors?.password[0]);
                // }
            });
        // if (response.status === 201) {
        //     // toast.success('registred sucsesfulley');
        //     setvariant(2);
        // }
        // if (response.status === 402) {
        //     toast.success('registred eror 402');
        //     setvariant(2);
        // }
    }
    const { lang = 'ru' } = useParams<{ lang: string }>();

    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const handleSuccess = (response: any) => {
        console.log('Login Success:', response);
        const credential = response.credential; // The ID token
        axiosInstance
            .post('/register/google', { token: credential })
            .then((response) => {
                toast.success('register sucsesfylly ');
                localStorage.setItem('user-info', JSON.stringify(response));

                navigate(`/${lang}`);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
        // console.log('credential', credential);

        // You can send this credential to your backend for verification
    };

    const handleError = () => {
        console.log('Login Failed');
    };
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <div className="flex relative flex-col w-full h-[100vh] max-md:max-w-full justify-center items-center px-[40px] max-sm:px-4">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f57b393c120b19ab9db1e7a4aa3dc11e48fdaa0526b775a0fd5a02c9292e45c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-cover absolute inset-0 size-full"
                />
                <div
                    onClick={() => navigate(-1)}
                    className="rounded-full bg-white lg:w-[56px] lg:h-[56px] w-[35px] h-[35px] bg-opacity-60 z-50 absolute top-5 left-5 cursor-pointer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d01662ce302f4f64e209cc8ecd0540b6f0e5fb3d4ccd79eead1b316a272d11?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain w-14 aspect-square rounded-full"
                    />
                </div>

                {variant === 1 && (
                    <div className="flex  overflow-hidden relative flex-col justify-center self-center lg:px-16  lg:py-6 p-[10px] mb-0 max-w-full rounded-3xl bg-white bg-opacity-20 w-[560px] ">
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="flex flex-col items-center self-center text-center">
                                <div className="text-3xl font-bold text-white">
                                    {tarnslation?.register}
                                </div>
                                <div className="mt-3 text-base text-white text-opacity-80">
                                    {tarnslation?.registerdesc}
                                </div>
                            </div>

                            {/* Formik Form */}
                            <Formik
                                initialValues={{
                                    name: '',
                                    phone: '',
                                    email: '',
                                    password: '',
                                    gender: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    console.log(values);
                                    handleRegister({
                                        name: values.name,
                                        password: values.password,
                                        email: values.email,
                                        phone: values.phone,
                                        gender: values.gender,
                                    });
                                }}
                            >
                                {({}) => (
                                    <Form className="flex flex-col items-center mt-4 w-full max-md:max-w-full">
                                        <div className="flex gap-3 items-center text-base font-semibold text-center text-white">
                                            <GoogleLogin
                                                onSuccess={handleSuccess}
                                                onError={handleError}
                                            />
                                        </div>
                                        <div className="flex lg:gap-10 gap-5 items-center mt-4 text-xs text-center text-white w-full mb-4">
                                            <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                                            <div className="self-stretch my-auto text-nowrap">
                                                {tarnslation?.or}
                                            </div>
                                            <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                                        </div>
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <Field
                                                name="name"
                                                className="overflow-hidden px-5 py-5 w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60"
                                                placeholder={tarnslation?.name}
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <div className="flex  overflow-hidden px-5  w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3">
                                                <span className="text-black text-opacity-60 flex justify-center items-center">
                                                    +7
                                                </span>
                                                <Field
                                                    name="phone"
                                                    type="number"
                                                    className="outline-none bg-transparent ml-1 w-full h-[56px]"
                                                    placeholder="XXXXXXX"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <Field
                                                name="email"
                                                className="overflow-hidden px-5 py-5 w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3"
                                                placeholder="Email"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <div className="flex overflow-hidden gap-5 justify-between px-5  w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3">
                                                <Field
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    name="password"
                                                    placeholder={
                                                        tarnslation?.password
                                                    }
                                                    className="outline-none bg-transparent w-full h-[56px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                    src={
                                                        showPassword
                                                            ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                            : '/svg/closedaye.svg'
                                                    }
                                                    className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
                                                    alt="Toggle Password Visibility"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <Field
                                                as="select"
                                                name="gender"
                                                className="overflow-hidden px-5 py-2 w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3"
                                            >
                                                {/* <option value="">
                                                    {tarnslation?.gender}
                                                </option> */}
                                                <option value="man">
                                                    {lang === 'en'
                                                        ? 'Male'
                                                        : 'мужчина'}
                                                </option>
                                                <option value="woman">
                                                    {lang === 'en'
                                                        ? 'Female'
                                                        : 'женщина'}
                                                </option>
                                            </Field>
                                            <ErrorMessage
                                                name="gender"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <div className="flex items-center mt-4">
                                                <Field
                                                    type="checkbox"
                                                    name="acceptTerms"
                                                    className="mr-2 w-[14px] h-[14px]"
                                                />
                                                <label className="text-sm font-semibold text-white ">
                                                    {tarnslation?.razıyam}
                                                </label>
                                            </div>
                                            <ErrorMessage
                                                name="acceptTerms"
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />

                                            <div className="gap-2.5 self-stretch px-10 py-4 lg:mt-7 mt-4 w-full text-base font-medium text-black border border-solid bg-slate-300 border-slate-300 rounded-[100px] max-md:px-5 max-md:max-w-full">
                                                <button
                                                    type="submit"
                                                    className="w-full cursor-pointer"
                                                >
                                                    {tarnslation?.login}
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>

                        <div
                            className="mt-4 cursor-pointer text-base font-semibold text-center text-white text-opacity-80 lg:mt-4  max-md:max-w-full"
                            onClick={() => {
                                navigate(
                                    `/${lang}/${
                                        ROUTES.login[
                                            lang as keyof typeof ROUTES.login
                                        ]
                                    }`
                                );
                            }}
                        >
                            <span>{tarnslation?.Hesabınız_var}?</span>{' '}
                            {tarnslation?.login}
                        </div>
                    </div>
                )}
                {variant === 2 && (
                    <div className="bg-white z-50 rounded-[20px] bg-opacity-25  px-[50px] py-[60px] flex flex-col justify-center items-center">
                        <h5 className="text-[32px] mb-3 text-white font-semibold leading-10">
                            {tarnslation?.Elektron}
                        </h5>
                        <p className="text-[16px] text-white mb-[40px] max-w-[460px] font-normal text-center">
                            {currentemail} {tarnslation?.ünvanına}
                        </p>
                        <Formik
                            initialValues={{ code: '' }}
                            validationSchema={Yup.object({
                                code: Yup.string()
                                    .length(6, 'Kod 6 rəqəmli olmalıdır')
                                    .required('Kod daxil edin'),
                            })}
                            onSubmit={async (values) => {
                                const token =
                                    localStorage.getItem('register-token');
                                console.log('values', values);
                                await axios
                                    .post(
                                        'https://brendo.avtoicare.az/api/verifyEmail',
                                        {
                                            verification_code: +values.code,
                                            verification_token: token,
                                        }
                                    )
                                    .then(() => {
                                        localStorage.setItem;
                                        toast.success(
                                            'register sucsesfylly ,now log in '
                                        );
                                        navigate('/user/login');
                                    })
                                    .catch((error) => {
                                        console.log('er', error);
                                        toast.error(
                                            error.response.data.message
                                        );

                                        // if (error.response.data.error) {
                                        //     error.response.data.error.map(
                                        //         (item: string) => {
                                        //             toast.error(item);
                                        //         }
                                        //     );
                                        // }
                                    });
                                // Handle code verification
                            }}
                        >
                            {({ handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="w-full"
                                >
                                    <Field
                                        placeholder="6 rəqəmli kod"
                                        className="overflow-hidden px-5 py-5 w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60"
                                        type="text"
                                        name="code"
                                    />
                                    <ErrorMessage
                                        name="code"
                                        component="div"
                                        className="text-red-500 text-xs mt-1"
                                    />
                                    <button
                                        type="submit"
                                        className="gap-2.5 self-stretch px-10 py-4 lg:mt-7 mt-4 w-full text-base font-medium text-black border border-solid bg-[#B1C7E4] border-[#B1C7E4] rounded-[100px] max-md:px-5 max-md:max-w-full"
                                    >
                                        {tarnslation?.Təsdiq_et}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <button
                            className="mt-4 cursor-pointer text-base font-semibold text-center text-white text-opacity-80 lg:mt-4  max-md:max-w-full"
                            onClick={async () => {
                                await axios
                                    .post(
                                        'https://brendo.avtoicare.az/api/register',
                                        {
                                            name: forumValue.name,
                                            phone: `${forumValue.phone}`,
                                            email: forumValue.email,
                                            password: forumValue.password,
                                            gender: forumValue.gender,
                                        }
                                    )
                                    .then((response) => {
                                        if (
                                            response.status === 200 ||
                                            response.status === 201
                                        ) {
                                            localStorage.setItem(
                                                'register-token',
                                                response.data.token
                                            );
                                            toast.success(
                                                'code was sent to ur email '
                                            );
                                        }
                                    })
                                    .catch((error) => {
                                        console.log('er', error);
                                        // error.response.data.error.map((item: string) => {
                                        //     toast.error('aa');
                                        // });
                                        if (error.response.data.error) {
                                            error.response.data.error.map(
                                                (item: string) => {
                                                    toast.error(item);
                                                }
                                            );
                                        }
                                    });
                            }}
                        >
                            {tarnslation?.Kodu_yenidən_göndər}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
