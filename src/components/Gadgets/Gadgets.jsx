import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import GadgetBtn from '../GadgetBtn/GadgetBtn';

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
            <div className='lg:flex mx-10 lg:gap-5'>
                <div className=' mb-5 lg:w-1/4'>
                    <GadgetBtn></GadgetBtn>
                </div>
                <div className='lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        gadgets.map((gadget, index) => <Gadget gadget={gadget} key={index}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;