// NotFound.jsx
import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <p className="text-2xl font-semibold mt-4 text-black">Oops! Page Not Found</p>
            <p className="text-gray-500 mt-2">আপনি যে পেজটি খুঁজছেন সেটি এখানে নেই।</p>
            <Link to="/" className="mt-6 btn btn-primary">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;