import React from 'react';

const NavBar = () => {

    const links = <>
        <li><a>Home</a></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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