import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, category, price, specifications, availability, rating, product_id } = gadget;

    return (
        <div className=''>
            <div className="card bg-white shadow-xl">
                <figure>
                    <img 
                        className='mt-5 rounded-xl'
                        src={product_image}
                        alt="Product" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}k</p>
                    <div className="card-actions">
                        <Link to={`/gadget/${product_id}`}><button className="btn rounded-full px-8 bg-white text-purple-700 font-bold border-purple-700">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;