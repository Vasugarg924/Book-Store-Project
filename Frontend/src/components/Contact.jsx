import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col h-screen justify-center items-center px-8'>
        <h1 className='text-2xl font-bold mb-8'>Contact Us</h1>
        
        <div className='mb-4 w-full max-w-md'>
          <h1 className='text-md font-semibold mb-2'>Name</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-full p-2  rounded-md" placeholder="Enter your Name" />
          </label>
        </div>
        
        <div className='mb-4 w-full max-w-md'>
          <h1 className='text-md font-semibold mb-2'>Email</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-full p-2 rounded-md" placeholder="Email" />
          </label>
        </div>
        
        <div className='mb-4 w-full max-w-md'>
          <h1 className='text-md font-semibold mb-2'>Message</h1>
          <textarea className="w-full p-2 border border-gray-300 rounded-md h-64" placeholder="Type Your Message"></textarea>
        </div>
        <button className='bg-blue-700 text-white rounded border p-3'>Submit</button>

      </div>
      <Footer />
    </>
  );
}

export default Contact;
