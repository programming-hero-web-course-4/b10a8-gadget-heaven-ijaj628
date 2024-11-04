import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div className='mb-10 bg-slate-100 pb-20'>
            <div className="bg-purple-700 lg:mx-14 rounded-xl h-[35rem]">
                <div className="flex justify-center items-center pt-5 gap-2 text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6 text-slate-100">
                            Our Shop is the best for deal with.To buy reasonable prices visited our website.
                        </p>
                        <button className="btn bg-white text-purple-700 font-bold">Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[1000px] h-[600px] mx-auto rounded-3xl -mt-40 p-4 bg-white bg-opacity-50' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Home;