import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-3'>Gadget Heaven</h2>
                <p className='border-b-2 mx-36 pb-5'>Best Offer Shopping Platform</p>
            </div>
            <footer className="grid grid-cols-1 lg:grid-cols-3 p-10 text-center gap-5 lg:gap-0">
                <nav>
                    <h6 className="text-xl font-bold mb-3">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <br />
                    <a className="link link-hover">Order Tracking</a>
                    <br />
                    <a className="link link-hover">Shipping & Delivery</a>
                    <br />
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold mb-3">Company</h6>
                    <a className="link link-hover">About us</a>
                    <br />
                    <a className="link link-hover">Careers</a>
                    <br />
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-bold mb-3">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <br />
                    <a className="link link-hover">Privacy policy</a>
                    <br />
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;