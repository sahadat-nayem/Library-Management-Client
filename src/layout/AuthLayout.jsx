import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;