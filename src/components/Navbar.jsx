import { Link, NavLink } from "react-router-dom";
import logo from "../assets/istockphoto-1620759890-612x612-removebg-preview.png"

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allBooks">All Books</NavLink></li>
        <li><NavLink to="/addBooks">Add Book</NavLink></li>
        <li><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
            </div>
            <a className="btn btn-ghost text-xl items-center">
                <img className='w-14' src={logo} alt="" />
                <h3 className="text-xl">Library Management</h3>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end">
            {/* {
                user ? <>
                    <button onClick={handleSignOut} className="btn">Sign out</button>
                </> : <>
                    <Link to="/register">Register</Link>
                    <Link to="/signIn">
                        <button className="btn">Sign In</button>
                    </Link>
                </>
            } */}

        </div>
    </div>
    );
};

export default Navbar;