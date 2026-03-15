import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ icon, end, suffix, title }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // কার্ডটি ৫০% দেখা গেলে অ্যানিমেশন শুরু হবে
        triggerOnce: true, // শুধু একবারই অ্যানিমেশন হবে
    });

    return (
        <div ref={ref} className="bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center w-64">
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-4xl font-bold text-black">
                {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : "0"}
            </h2>
            <p className="text-gray-500 mt-2 font-medium">{title}</p>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        { icon: "📋", end: 199, suffix: "+", title: "Total Doctors" },
        { icon: "⭐⭐", end: 467, suffix: "+", title: "Total Reviews" },
        { icon: "👥", end: 1900, suffix: "+", title: "Patients" },
        { icon: "🧑‍🤝‍🧑", end: 300, suffix: "+", title: "Total Stuffs" },
    ];

    return (
        <div className="bg-gray-100 py-20 flex justify-center gap-6 flex-wrap">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default StatsSection;