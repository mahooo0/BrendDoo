// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductId from './pages/Products/Id';
import Aboutus from './pages/Aboutus';
import Liked from './pages/Liked';
import Brends from './pages/Brends';
import Contact from './pages/Contact';
import UserRules from './pages/UserRules';
import DeliveryRules from './pages/DeliveryRules';
import Login from './pages/userIn/login';
import Register from './pages/userIn/register';
// import Password from './pages/userIn/Password';
import UserSettings from './pages/userIn';
import UserLiked from './pages/userIn/Liked';
// import Notification from './pages/userIn/Notifications';
import Order from './pages/userIn/Order';
import OrderId from './pages/userIn/OrderId';
import BaskedConfirm from './pages/userIn/BaskedConfirm';
import Basked from './pages/userIn/Basked';
import PageByLang from './pages/Maincontrollers/PageByLang';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Password from './pages/userIn/Pasword';
import Notification from './pages/userIn/Nptifications';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import InnerPageByLang from './pages/Maincontrollers/InnerPagebyLang';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    // const location = useLocation(); // Hook to get the current route
    const queryClient = new QueryClient();

    useEffect(() => {
        // Scroll to the top of the page whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);

    return (
        //PODUCTS
        //ROUTE LANGS
        <GoogleOAuthProvider clientId="676362303569-egd9urrld33gs13hbpo2mks4i73jr19n.apps.googleusercontent.com">
            <HelmetProvider>
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools initialIsOpen={false} />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/:lang/:page"
                                element={<PageByLang />}
                            />
                            <Route
                                path="/:lang/:page/:slug"
                                element={<InnerPageByLang />}
                            />
                            <Route path="/poducts" element={<Products />} />
                            <Route
                                path="/products/:id"
                                element={<ProductId />}
                            />
                            <Route path="/aboutus" element={<Aboutus />} />
                            <Route path="/liked" element={<Liked />} />
                            <Route path="/brends" element={<Brends />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/userrules" element={<UserRules />} />
                            <Route
                                path="/deliveryrules"
                                element={<DeliveryRules />}
                            />
                            <Route path="/user/login" element={<Login />} />
                            <Route
                                path="/user/register"
                                element={<Register />}
                            />
                            <Route
                                path="/user/newPassword"
                                element={<Password />}
                            />
                            <Route path="/user" element={<UserSettings />} />
                            <Route path="/user/liked" element={<UserLiked />} />
                            <Route
                                path="/user/notifications"
                                element={<Notification />}
                            />
                            <Route path="/user/orders" element={<Order />} />
                            <Route
                                path="/user/orders/:id"
                                element={<OrderId />}
                            />
                            <Route
                                path="/user/basked/confirm"
                                element={<BaskedConfirm />}
                            />
                            <Route
                                path="/basked/sifarislerim"
                                element={<Basked />}
                            />
                        </Routes>{' '}
                        <Toaster />
                    </QueryClientProvider>{' '}
                </RecoilRoot>
            </HelmetProvider>
        </GoogleOAuthProvider>
    );
};

export default App;
