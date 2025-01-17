import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx"
import axios from "axios";
import { useState,useEffect } from 'react';




function Freebook() {
  const [book,setBook]=useState([]);

    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res=await axios.get("https://book-store-project-1-yx7t.onrender.com/book");
                // console.log(res.data);
                setBook(res.data.filter((data)=>data.category==="Free"))
            } catch(error){
                console.log(error)
            }
        }
        getBook();
    },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cupiditate itaque eius magnam animi autem suscipit eum. Tenetur, aperiam accusamus molestiae saep</p>
        </div>
    </div>
    <div>
    <Slider {...settings}>
  {book.map((item) => (
    <Cards item={item} key={item.id}/>
  ))}
</Slider>

    </div>


    </>
  )
}

export default Freebook