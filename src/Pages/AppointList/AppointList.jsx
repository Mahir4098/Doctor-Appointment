import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredAppoint, removeStoredAppoint } from '../../Utility/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    CartesianGrid,
} from 'recharts';

// #region Sample data

const colors = ['#3B82F6', '#FACC15', '#3B82F6', '#14B8A6', '#EAB308', '#F97316'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const MySwal = withReactContent(Swal)

const AppointList = () => {

    const data = useLoaderData();
    const [appoint, setAppoint] = useState([]);

    useEffect(() => {
        const storedData = getStoredAppoint();
        const convertedData = storedData.map(id => Number(id));
        const myReadList = data.filter(appoint => convertedData.includes(appoint.id));

        setAppoint(myReadList);



    }, [data])

    const handleCancel = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Clicked ID:", id);
                console.log("Before delete:", getStoredAppoint());

                const remain = appoint.filter((app) => app.id !== id);
                setAppoint(remain);

                removeStoredAppoint(id);

                console.log("After delete:", getStoredAppoint());

                Swal.fire({
                    title: "Canceled!",
                    text: "Your appointment has been canceled.",
                    icon: "success",
                });
            }
        });
    };

    const chartData = appoint.map((item) => ({
        name: item.name,
        fee: item.fee,
    }));

    return (
        <div className="bg-gray-100 py-10 text-black">
            {appoint.length > 0 && (
                <div className="w-full h-[350px] bg-white rounded-2xl shadow p-4 mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="fee" />
                            <Tooltip />
                            <Bar dataKey="fee" shape={<TriangleBar />} label={{ position: "top" }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

            <div className='text-center px-4'>
                <h1 className='text-2xl font-bold mb-2 mt-2'>My Today's Appointments: {appoint.length}</h1>
                <p>Our platform connects you with verified, experienced doctors.</p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {
                    appoint.length === 0 ? (
                        /* --- খালি থাকলে এই অংশটি দেখাবে --- */
                        <div className="bg-white rounded-2xl shadow p-10 mt-10 text-center">
                            <h2 className="text-2xl font-semibold text-gray-500">No Appointments Found!</h2>
                            <p className="text-gray-400 mt-2 mb-6">You haven't booked any doctors yet. Start booking to see them here.</p>
                            <button 
                                onClick={() => window.location.href = '/'} 
                                className="btn btn-primary rounded-full px-8"
                            >
                                Browse Doctors
                            </button>
                        </div>
                    ) : (
                        /* --- ডাটা থাকলে লিস্ট দেখাবে --- */
                        appoint.map(singleAppoint => (
                            <div key={singleAppoint.id} className="bg-white rounded-2xl shadow p-5 mt-5 text-black">
                                <h2 className='font-semibold mb-2'>{singleAppoint.name}</h2>
                                <div className='flex justify-between mb-3'>
                                    <p>{singleAppoint.education} {singleAppoint.speciality}</p>
                                    <p className="font-bold text-blue-600">Fee: {singleAppoint.fee} TK</p>
                                </div>
                                <button 
                                    onClick={() => handleCancel(singleAppoint.id)} 
                                    className='btn btn-outline btn-error rounded-2xl w-full'
                                > 
                                    Cancel Appointment 
                                </button>
                            </div>
                        ))
                    )
                }
            </div>

        </div>
    );
};

export default AppointList;