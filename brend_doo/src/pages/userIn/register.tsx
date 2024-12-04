import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Validation Schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Ad daxil edin'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Telefon nömrəsi düzgün deyil')
            .required('Telefon nömrəsi daxil edin'),
        email: Yup.string()
            .email('Email düzgün deyil')
            .required('Email daxil edin'),
        password: Yup.string()
            .min(6, 'Şifrə ən az 6 simvoldan ibarət olmalıdır')
            .required('Şifrə daxil edin'),
    });
    const navigate = useNavigate();

    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <div className="flex relative flex-col w-full h-[100vh] max-md:max-w-full justify-center items-center px-[40px]">
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

                <div className="flex overflow-hidden relative flex-col justify-center self-center lg:px-16  lg:py-6 p-[10px] mb-0 max-w-full rounded-3xl bg-white bg-opacity-20 w-[560px] ">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col items-center self-center text-center">
                            <div className="text-3xl font-bold text-white">
                                Qeydiyyatdan Keçin
                            </div>
                            <div className="mt-3 text-base text-white text-opacity-80">
                                Hesab yaratmaq üçün məlumatlarınızı daxil edin.
                            </div>
                        </div>

                        {/* Formik Form */}
                        <Formik
                            initialValues={{
                                name: '',
                                phone: '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({}) => (
                                <Form className="flex flex-col items-center mt-4 w-full max-md:max-w-full">
                                    <div className="flex gap-3 items-center text-base font-semibold text-center text-white">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3022fd65942a1f100f9b4b03e803efbd39acdf620aeebe49dd8d33234dd171c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-full"
                                        />
                                        <div className="self-stretch my-auto">
                                            Google ilə davam et
                                        </div>
                                    </div>
                                    <div className="flex lg:gap-10 gap-5 items-center mt-4 text-xs text-center text-white w-full mb-4">
                                        <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                                        <div className="self-stretch my-auto text-nowrap">
                                            Və ya
                                        </div>
                                        <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                                    </div>
                                    <div className="flex flex-col w-full max-md:max-w-full">
                                        <Field
                                            name="name"
                                            className="overflow-hidden px-5 py-5 w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60"
                                            placeholder="Ad - Soyad"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />

                                        <div className="flex  overflow-hidden px-5  w-full h-[56px] text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3">
                                            <span className="text-black text-opacity-60 flex justify-center items-center">
                                                +994
                                            </span>
                                            <Field
                                                name="phone"
                                                className="outline-none bg-transparent ml-1 w-full h-[56px]"
                                                placeholder="XX XXX XX XX"
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
                                                placeholder="Şifrə"
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
                                        <div className="flex items-center mt-4">
                                            <Field
                                                type="checkbox"
                                                name="acceptTerms"
                                                className="mr-2 w-[14px] h-[14px]"
                                            />
                                            <label className="text-sm font-semibold text-white ">
                                                İstifadəçi qaydaları ilə razıyam
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
                                                Qeydiyyatdan Keç
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
                            navigate('/user/login');
                        }}
                    >
                        <span>Hesabınız var?</span> Daxil olun
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
