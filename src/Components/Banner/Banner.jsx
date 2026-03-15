import React from 'react';

import img1 from "../../Image/banner-img-1.png"



const Banner = () => {
    return (
        <div className="w-full bg-gray-50 border border-gray-300 shadow-sm rounded-xl text-black pt-16 pb-10">

            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold">
                    Dependable Care, Backed by Trusted Professionals.
                </h1>

                <p className="py-6 text-gray-600">
                    Our platform connects you with verified, experienced doctors across various
                    specialties — all at your convenience. Whether It's a routine checkup
                </p>

                <div className="flex justify-center gap-3">
                    <input
                        type="text"
                        placeholder="Search any doctor..."
                        className="input bg-white input-bordered w-150 rounded-xl border border-gray-100"
                    />
                    <button className="btn btn-primary rounded-full">Search Now</button>
                </div>
            </div>
            <div className='max-w-6xl grid grid-cols-2 gap-3 mt-3 ml-2 mr-2'>
                <img className='' src={img1} alt="" />
                <img src={img1} alt="" />
            </div>

        </div>

    );
};

export default Banner;