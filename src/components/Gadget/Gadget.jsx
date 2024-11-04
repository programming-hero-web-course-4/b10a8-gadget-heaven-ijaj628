import React from 'react';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, category, price, specifications, availability, rating } = gadget;

    return (
        <div className=''>
            <div className="card bg-white w-96 shadow-xl">
                <figure>
                    <img 
                        className='w-80 mt-5 rounded-xl'
                        src={product_image}
                        alt="Product" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}k</p>
                    <div className="card-actions">
                        <button className="btn rounded-full px-8 bg-white text-purple-700 font-bold border-purple-700">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;