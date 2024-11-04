import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="statistics">Statistics</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
    </>

    return (
        <div className='lg:mx-14'>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-1 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a className="btn rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                    <a className="btn rounded-full"><i class="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;