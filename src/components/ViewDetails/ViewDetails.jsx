import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {

    const { gadgetId } = useParams();
    const data = useLoaderData();
    const id = parseInt(gadgetId);

    const gadget = data.find(gadget => gadget.gadgetId == id);
    console.log(gadget)

    // const { gadgetId: image } = gadget;

    return (
        <div>
            <div className="bg-purple-700 mb-10 h-[200px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold text-white mt-5">Product Details {gadgetId}</h1>
                        <p className="py-6 text-slate-100">
                            Explore the Details option.see the details option for more details about the gadget.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div>
                <img src={image} alt="" />
            </div> */}
        </div>
    );
};

export default ViewDetails;