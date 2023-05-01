
import React from "react";



import { useLoaderData } from 'react-router-dom';
const Details = () => {
 
    const data=useLoaderData()
    const {roomImg,description,destination,flexibility,price,roomBed,roomWifi,title,total ,rating   }=data
    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex gap-5 items-center'>
                <img className='w-1/3' src={roomImg} alt="" />
                <div>
                    <h1 className='text-3xl'>{title}</h1>
                    <h1 className='text-lg'>{roomBed}</h1>
                    <p>{roomWifi}</p>
                    <p>{flexibility}</p>
                    <p>{rating}</p>
                    <p>{price} {total}</p>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default Details;
