import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const [product, setProduct] = useState(null);
    const data = useLoaderData();
    const { product_id } = useParams();

    useEffect(() => {
        const gadget = data?.find(gadgets => gadgets?.product_id == product_id);
        setProduct(gadget);
    }, [product_id, data]);

    return (
        <div className='mb-10 bg-slate-300 pb-20'>
            <div className="bg-purple-700 pb-96 h-[200px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold text-white mt-5">
                            Product Details
                        </h1>
                        <p className="py-6 text-slate-100">
                            Explore the Details option. See the details option for more details about the gadget.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-8 border rounded-xl w-[1000px] bg-white ml-36 -mt-56'>
                {
                    <div className='flex justify-around'>
                        <img className='w-80 rounded-xl' src={product?.product_image} alt="Gadget" />
                        <div>
                            <h2 className='text-5xl font-bold mb-5'>{product?.product_title}</h2>
                            <p className='text-2xl font-bold mb-5'>Price: {product?.price}</p>
                            <button className='px-2 bg-green-300 rounded-full mb-3'>In Stock</button>
                            <p className='mb-5'>{product?.description}</p>
                            <h4 className='text-2xl font-bold mb-3'>Specification:</h4>
                            <ol className='mb-5'>
                                <li>1. {product?.specifications[0]}</li>
                                <li>2. {product?.specifications[1]}</li>
                                <li>3. {product?.specifications[2]}</li>
                                <li>4. {product?.specifications[3]}</li>
                            </ol>
                            <h4 className='text-2xl font-bold mb-3'>Rating ⭐ </h4>
                            <p className='mb-5 flex gap-5 items-center'>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                                <div className='rounded-full bg-slate-300 px-2'>
                                    {product?.rating}
                                </div>
                            </p>
                            <button className="btn rounded-full bg-purple-700 text-white mr-3">Add To Card <i class="fa-solid fa-cart-shopping"></i></button>
                            <button className="btn rounded-full"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default ViewDetails;
