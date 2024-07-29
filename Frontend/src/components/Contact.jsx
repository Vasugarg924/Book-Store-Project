import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "171027fa-e2c4-4997-9f1d-498b7f5ed8d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-screen px-8'>
        <form onSubmit={onSubmit} className='w-full max-w-md'>
          <h1 className='text-2xl font-bold mb-2 mt-4 text-center'>Contact Us</h1>
          
          <div className='mb-4'>
            <h1 className='text-md font-semibold mb-2'>Name</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow w-34 p-2 rounded-md dark:text-black" placeholder="Enter your Name" name="name" required/>
            </label>
          </div>
          
          <div className='mb-4'>
            <h1 className='text-md font-semibold mb-2'>Email</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow w-full p-2 rounded-md dark:text-black" placeholder="Email" name="email" required/>
            </label>
          </div>
          
          <div className='mb-4'>
            <h1 className='text-md font-semibold mb-2'>Message</h1>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-64 dark:text-black" placeholder="Type Your Message" name="message" required></textarea>
          </div>
          
          <div className='flex justify-center'>
            <button className='bg-blue-700 text-white rounded p-3' type='submit'>Submit</button>
          </div>

          <div className='text-center mt-4'>
            <span>{result}</span>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
