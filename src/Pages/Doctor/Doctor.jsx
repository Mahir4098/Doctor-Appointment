import React, { useState } from 'react';

import pic from "../../Image/doctor-sample.png"
import { Link } from 'react-router';

const Doctor = ({ singleDoctor }) => {



    const { name, education, speciality, experience, RNo,id } = singleDoctor
    return (
        <div>
            <div className=" card bg-white h-full w-80 shadow-sm gap-1">
                <figure>
                    <img className='h-[248px] w-[347px] p-5'
                        src={pic}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Available
                        <div className="badge badge-secondary">{experience} Experience</div>
                    </h2>
                    <div>
                        <h1 className='font-bold'>{name}</h1>
                        <p>{education} - {speciality}</p>

                    </div>
                    <div className=' border border-t-1 border-dashed'></div>
                    <div>
                        Registration No: {RNo}
                    </div>
                    <Link to={`/doctorDetails/${id}`}>
                        <button className="btn bg-white text-blue-600 border border-blue-600 btn-wide rounded-2xl">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Doctor;