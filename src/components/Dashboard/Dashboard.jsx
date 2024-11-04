import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple-700 mb-10 h-[250px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold text-white mt-5">Dashboard</h1>
                        <p className="py-6 text-slate-100">
                            Explore the cart and Wishlist button.go to cart section and Wishlist section to explore.
                        </p>
                        <div>
                            <button className="btn bg-purple-700 hover:bg-white px-10 mr-5 rounded-full text-white font-bold hover:text-purple-700">Cart</button>
                            <button className="btn bg-purple-700 hover:bg-white px-10 rounded-full text-white font-bold hover:text-purple-700">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;