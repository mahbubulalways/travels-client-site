import Header1 from '../Header/Header1';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRightIcon } from '@heroicons/react/24/solid'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
    const places=useLoaderData()
    return (
      
      <div  className=' bg'>
        <Header1></Header1>
      <div className="flex gap-3 flex-col lg:flex-row justify-center items-center w-[90%] mx-auto mt-2 lg:mt-20 ">
      <div className='space-y-4 lg:space-y-5'>
      <h1 className="text-4xl lg:text-8xl text-white  font-serif">COX'S BAZAR</h1>
      <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio blanditiis expedita exercitationem nam repellendus cum quas, odio dicta illum.</p>
      <button className='bg-yellow-500 px-5 py-2 rounded-md inline-flex items-center gap-2'>Booking
      <ArrowRightIcon className="h-4 w-4 text-black" />
      </button>
      </div>
      <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
     
    
         <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > {places.map(place=>
        <SwiperSlide key={place.id} className=''>
        <div>
        <Link to={`/place/${place.id}`}>
        <img className='border-8 rounded-2xl w-max border-yellow-400' src={place.imgUrl} alt="" />
        <h1 className='text-lg lg:text-2xl bg-yellow-800 w-max mx-auto px-5 py-1 rounded-2xl  relative bottom-14 text-white'>{place.destination}</h1>
        </Link>
        </div>

        </SwiperSlide>
 )}
      </Swiper>
    </>
     
       
      </div>
      </div>
      </div>

         
    
    );
};

export default Home;