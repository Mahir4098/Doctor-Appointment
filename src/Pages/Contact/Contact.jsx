import React from 'react';

const Contact = () => {
    return (
        <div className=''>

        <div className="max-w mx-auto my-12 p-3 bg-white rounded-3xl shadow-md text-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Get in Touch</h2>
            <p className="text-gray-500">Reach out to us directly through any of these channels.</p>
          </div>
          
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="font-semibold text-blue-500">📍 Address:</span> 
              Dhanmandi, Dhaka-1205
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-blue-500">📞 Phone:</span> 
              +880 1234 567890
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-blue-500">✉️ Email:</span> 
              support@doccare.com
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-blue-500">🕒 Hours:</span> 
              Sat - Thu: 10 AM - 8 PM
            </p>
          </div>
        </div>

        {/* Right Side: Simple Form */}
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="input input-bordered w-full bg-gray-50 focus:border-blue-500 rounded-xl" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="input input-bordered w-full bg-gray-50 focus:border-blue-500 rounded-xl" 
          />
          <textarea 
            placeholder="How can we help you?" 
            className="textarea textarea-bordered h-28 bg-gray-50 focus:border-blue-500 rounded-xl"
          ></textarea>
          <button className="btn btn-primary w-full rounded-2xl text-white font-semibold">
            Send Message
          </button>
        </form>

      </div>
    </div>
            </div>

  );
};

export default Contact;