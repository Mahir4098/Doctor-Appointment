import React from 'react';
import { Link, NavLink, useLoaderData, useNavigate, useParams } from 'react-router';
import { addToDb } from '../../Utility/addToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const DoctorDetails = () => {
    const { id } = useParams();
    const doctorId = parseInt(id, 10);
    const data = useLoaderData();
    const navigate = useNavigate();


    const singleDoctor = data.find(doctor => doctor.id === doctorId);

    if (!singleDoctor) {
        return <p className="text-center mt-10 text-red-500">Doctor not found</p>;
    }

    const { name, image, education, speciality, workingPlace, fee, availability, RNo } = singleDoctor;

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long"
    });

    // Check doctor available today
    const isAvailableToday = availability.includes(today);

    const handleAppoint = () => {
    const isAdded = addToDb(doctorId); 

    if (isAdded) {
        // যদি নতুনভাবে অ্যাড হয় তবেই সাকসেস দেখাবে এবং নেভিগেট করবে
        MySwal.fire({
            title: "Appointment Done",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
        }).then(() => {
            navigate("/appointList");
        });
    } else {
        // যদি অলরেডি থাকে তবে এরর মেসেজ দেখাবে এবং নেভিগেট করবে না
        MySwal.fire({
            title: "Already Appointed!",
            text: "You have already booked an appointment for this doctor.",
            icon: "warning",
            confirmButtonColor: "#3085d6",
        });
    }
}
    return (
        <div className="bg-gray-100 py-10">

            {/* Top Section */}
            <div className="max-w-4xl mx-auto text-center text-black bg-white p-8 rounded-2xl shadow">
                <h1 className="text-2xl font-bold">Doctor's Profile Details</h1>
                <p className="mt-3">
                    Our platform connects you with verified doctors. View detailed
                    profile information and book appointments easily.
                </p>
            </div>

            {/* Main Card */}
            <div className="max-w-4xl mx-auto mt-6 bg-white rounded-2xl shadow p-8">

                <div className="flex gap-8 items-center">

                    {/* LEFT SIDE (Image) */}
                    <div className="w-1/3 flex justify-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-48 rounded-xl"
                        />
                    </div>

                    {/* RIGHT SIDE (Details) */}
                    <div className="w-2/3 text-black">

                        <h2 className="text-xl font-bold">{name}</h2>

                        <p className="mt-2">{education}</p>
                        <p>{speciality}</p>

                        <p className="mt-2">
                            <span className="font-semibold">Working at:</span> {workingPlace}
                        </p>

                        <div className="divider"></div>

                        <p>
                            <span className="font-semibold">Reg No:</span> {RNo}
                        </p>

                        <div className="divider"></div>

                        {/* Availability */}
                        <div className="flex gap-2 flex-wrap items-center">
                            <p className="font-semibold">Availability:</p>

                            {availability.map(day => (
                                <span key={day} className="badge badge-outline">
                                    {day}
                                </span>
                            ))}
                        </div>

                        <p className="mt-4">
                            <span className="font-semibold">Consultation Fee:</span> {fee} Taka
                        </p>

                    </div>

                </div>

            </div>

            {/* Appointment section  */}

            <div className="max-w-4xl mt-5 mx-auto text-black bg-white p-8 rounded-2xl shadow">

                <h1 className="text-center font-semibold text-xl mb-5">
                    Book an Appointment
                </h1>

                <div className="divider"></div>


                <div className="flex justify-between items-center">

                    <p className="font-medium">
                        Availability
                    </p>


                    {
                        isAvailableToday
                            ?
                            <span className="badge badge-success">
                                Doctor Available Today
                            </span>

                            :

                            <span className="badge badge-error">
                                Not Available Today
                            </span>
                    }

                </div>



                <button onClick={handleAppoint} className="mt-6 btn btn-primary w-full rounded-full">

                    Book Appointment Now

                </button>



            </div>


        </div>
    );
};

export default DoctorDetails;