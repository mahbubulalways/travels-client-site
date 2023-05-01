
import { Link, useLoaderData } from 'react-router-dom';
import './Visitform.css'
import Header1 from '../../Header/Header1';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React, { Children, createContext, useState } from "react";
import { SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';




const Visitform = () => {
    const singleData=useLoaderData()
   
    return (
        <div className='bg'>
            <Header1></Header1>
            <div className="flex gap-3 flex-col lg:flex-row justify-center items-center w-[90%] mx-auto mt-2 lg:mt-20 ">
            <div className='space-y-4 lg:space-y-5'>
      <h1 className="text-4xl lg:text-8xl text-white  font-serif">COX'S BAZAR</h1>
      <p className='text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio blanditiis expedita exercitationem nam repellendus cum quas, odio dicta illum.</p>
      <button className='bg-yellow-500 px-5 py-2 rounded-md inline-flex items-center gap-2'>Booking
      <ArrowRightIcon className="h-4 w-4 text-black" />
      </button>
      </div>


      <div className='bg-white rounded w-full p-10'>
        <p>Origin</p>
        <h1 className='text-2xl font-bold bg-gray-300 p-2 rounded-md mt-2'>Dhaka</h1>
        <p className='mt-5'>Destination</p>
        <h1 className='text-2xl font-semibold bg-gray-300 p-2 rounded-md mt-2'>Cox's Bazar</h1>
        <div className=' justify-between'>
       <div>
       <p>From</p>
        <div className='w-'>
        <SingleDatePicker
  startDate={new Date()}
  onChange={(startDate) => onDateChange(startDate)}
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date(2100, 0, 1)}
  dateFormat="D"
  monthFormat="MMM YYYY"
  startDatePlaceholder="Date"
  disabled={false}
  className="my-own-class-name"
  startWeekDay="monday"
/>
        </div>
       </div>
       <div>
       <p>To</p>
        <SingleDatePicker
  startDate={new Date()}
  onChange={(startDate) => onDateChange(startDate)}
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date(2100, 0, 1)}
  dateFormat="D"
  monthFormat="MMM YYYY"
  startDatePlaceholder="Date"
  disabled={false}
  className="my-own-class-name"
  startWeekDay="monday"
/>
       </div>
        <div>
       
        </div>
        </div>
        <span>
        </span>
        <Link to={`/details/${singleData.id}`}><button className='bg-yellow-500 px-5 py-2 rounded-md text-black w-full'>Start Booking</button></Link>
      </div>
     
            </div>

        </div>
    );
};

export default Visitform;