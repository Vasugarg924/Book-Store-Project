import React from 'react'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
function About() {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col h-screen'>
        <h1 className='text-3xl font-bold flex  justify-center mt-32 mb-20'>About Us</h1>
        <div className=''>
          <div className="avatar flex items-center justify-center">
            <div className=" w-52 rounded-xl mb-12">
              <img src="../public/contact image.png" alt='Photo'/>
            </div>
          </div>
          <p className='text-xl font-semibold mx-auto max-w-md text-justify'>
            Welcome to my website! My name is Vasu Garg, and I am currently a student at Jaypee Institute of Information Technology, Pursuing  B.Tech. I designed this website to practice my skills. <span className='flex justify-center'><br />Thank you for visiting!</span>
          </p>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About