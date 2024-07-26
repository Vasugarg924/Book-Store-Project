import React from 'react'
import Cards from './Cards'
// import list from "../../public/list.json"
import axios from "axios";
import { useState,useEffect } from 'react';

function Course() {
    const [book,setBook]=useState([]);

    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res=await axios.get("https://book-store-backend-ujwy.onrender.com/book");
                console.log(res.data);
                setBook(res.data)
            } catch(error){
                console.log(error)
            }
        }
        getBook();
    },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-16 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold mt-8 md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum amet dicta in aperiam porro ipsa assumenda corrupti nesciunt cumque! Ipsum id voluptates molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quis sit dicta, necessitatibus accusamus velit vel consequuntur voluptatem alias fuga optio quos nulla porro ipsam consectetur dignissimos explicabo inventore iusto.</p>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6' onClick={()=>window.location.href="/"}>Back</button>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards item={item} key={(item.id)}></Cards>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course