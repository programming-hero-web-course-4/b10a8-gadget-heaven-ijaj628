import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => { 
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-20 mb-20">Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadgets.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;