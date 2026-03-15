import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import { BiLoaderCircle } from "react-icons/bi";
import CountUp from 'react-countup';
import StatsSection from '../Animated/StatsSection';


const Doctors = ({ data }) => {

    const [showAll, setShowAll] = useState(false);

    const visible = showAll ? data : data.slice(0, 6);


    return (
        <div className=" text-black pt-10 pb-5">
            <div className='max-w-4xl mx-auto text-center text-black'>
                <h1 className='mx-auto font-bold'>Our Best Doctors</h1>
                <p className='py-3'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>

            </div>

            <Suspense fallback={<BiLoaderCircle />}>
                <div className="grid grid-cols-3 gap-2">
                    {
                        visible.map(singleDoctor => <Doctor key={singleDoctor.RNo} singleDoctor={singleDoctor}></Doctor>)
                    }
                </div>
            {
                !showAll && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn btn-primary bg-blue-600 rounded-4xl"
                        >
                            View All Doctors
                        </button>
                    </div>
                )

            }
            <div>
                <h1 className='font-bold text-3xl justify-center text-center mt-10 '>We Provide Best Medical Services</h1>
                <p className='text-center mt-3'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>
                <div>
                    <StatsSection></StatsSection>
                </div>
            </div>
                        </Suspense>


        </div>
    );
};

export default Doctors;