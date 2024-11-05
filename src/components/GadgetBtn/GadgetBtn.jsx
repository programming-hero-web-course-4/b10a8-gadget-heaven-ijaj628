import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetBtn = () => {

    const { gadgetId } = useParams();

    const data = useLoaderData();
    const gadget = data.filter(gadget => gadget.gadgetId === gadgetId)

    const handleAll= () => {
        console.log(gadget)
    }

    return (
        <div onClick={handleAll} className='border p-5 rounded-lg bg-white'>
            <button className='btn rounded-full hover:text-white hover:bg-purple-700 px-14 mb-5'>All Product</button>
            <br />
            <button className='btn rounded-full hover:text-white hover:bg-purple-700 px-14 mb-5'>Computer</button>
            <br />
            <button className='btn rounded-full hover:text-white hover:bg-purple-700 px-16 mb-5'>Phones</button>
            <br />
            <button className='btn rounded-full hover:text-white hover:bg-purple-700 px-12 mb-5'>Headphones</button>
            <br />
            <button className='btn rounded-full hover:text-white hover:bg-purple-700 px-10 mb-5'>Smart Watches</button>
        </div>
    );
};

export default GadgetBtn;