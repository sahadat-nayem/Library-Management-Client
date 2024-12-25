import { Link, NavLink } from "react-router-dom";
import logo from "../assets/istockphoto-1620759890-612x612-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png"

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successful sign out')
            })
            .catch(error => {
                console.log('failed to sign out .stay here. dont leave me alone')
            })
    }

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
                    <div className="md:pr-2 gap-2">
                        {user && user?.email ? (
                        <div className="group relative">
                            <img
                            className="size-12 rounded-full  border-2 to-blue-900"
                            src={user?.photoURL}
                            alt=""
                            />
                             <span className="absolute bottom-0 left-0 right-0 font-semibold bg-gray-100 text-black text-center opacity-0 group-hover:opacity-100  ">
                                {user?.displayName}
                            </span>
                        </div>
                        ) : (
                        <div>
                            <img
                            className="size-10"
                            src={userIcon}
                            />
                        </div>
                        )}
                    </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <button onClick={handleSignOut} className="btn">Log-out</button> : <Link to="/auth/login" className="btn">Login</Link>
                }
            </div>
    </div>
    );
};

export default Navbar;