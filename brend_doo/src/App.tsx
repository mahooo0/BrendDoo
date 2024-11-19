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
import Password from './pages/userIn/Pasword';
import UserSettings from './pages/userIn';
import UserLiked from './pages/userIn/Liked';
import Notification from './pages/userIn/Nptifications';
import Order from './pages/userIn/Order';
import OrderId from './pages/userIn/OrderId';
import BaskedConfirm from './pages/userIn/BaskedConfirm';
import Basked from './pages/userIn/Basked';
// import Basked from './pages/userIn/Basked';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poducts" element={<Products />} />
            <Route path="/poducts/:id" element={<ProductId />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/brends" element={<Brends />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userrules" element={<UserRules />} />
            <Route path="/deliveryrules" element={<DeliveryRules />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/newPasword" element={<Password />} />
            <Route path="/user" element={<UserSettings />} />
            <Route path="/user/liked" element={<UserLiked />} />
            <Route path="/user/notifications" element={<Notification />} />
            <Route path="/user/orders" element={<Order />} />
            <Route path="/user/orders/:id" element={<OrderId />} />
            <Route path="/user/basked/confirm" element={<BaskedConfirm />} />
            <Route path="/user/basked" element={<Basked />} />
        </Routes>
    );
};

export default App;
