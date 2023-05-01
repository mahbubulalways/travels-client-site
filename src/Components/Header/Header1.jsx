
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import logo from '../../assets/logo.png'
import '../Header/Header1.css'
const Header1 = () => {
    const [bar, setBar] = useState(false)
    return (
        <div className='w-[90%] mx-auto py- flex items-center justify-between text-white' >
            <img className='w-24 lg:w-28' src={logo} alt="" />
            <input type="search" name="" id="" className='header  px-3 py-1 w-1/3 lg:w-auto text-sm lg:text-lg rounded placeholder:text-white bg-slate-50 bg-opacity-10 outline-none border-2 border-white ' placeholder='Search your Destination...' />
            <div className=' space-x-5 text-lg hidden lg:block'>
           
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "",
                        };
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to=""
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "",
                        };
                    }}
                >
                    Destination
                </NavLink>
                <NavLink
                    to=""
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "",
                        };
                    }}
                >
                    Blog
                </NavLink>
                <NavLink
                    to=""
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "",
                        };
                    }}
                >
                    Contact
                </NavLink>
                <Link><button className='bg-yellow-500 px-5 py-1 rounded-md text-black'>Log in</button></Link>
            </div>
            <div>
            </div>
            <div className='flex justify-end sm:block lg:hidden'>
                <button className='bg-yellow-600 px-2 py-1 rounded-md' onClick={() => setBar(!bar)}>
                    <span>
                        {bar ?
                            <XMarkIcon className="h-8 w-8 text-white" />
                            : <Bars3Icon className="h-8 w-8 text-white" />
                        }
                    </span>
                </button>
            </div>
            <span className='mt-20'>
                {<div className={`flex flex-col text-lg pl-10 absolute  border-2 border-b-slate-300 rounded-md duration-500 py-5 space-y-5 pr-4 bg-yellow-700 lg:hidden sm:block ${bar ? 'left-0' : '-left-full'}`} >
                    <Link className='hover:bg-gray-700 px-3 py-1 rounded-md' to=''>News</Link>
                    <Link className='hover:bg-gray-700 px-3 py-1 rounded-md' to=''>Destination</Link>
                    <Link className='hover:bg-gray-700 px-3 py-1 rounded-md' to=''>Blog</Link>
                    <Link className='hover:bg-gray-700 px-3 py-1 rounded-md' to=''>Contact</Link>
                    <Link><button className='bg-yellow-500 px-5 py-1 rounded-md text-black'>Log in</button></Link>
                </div>}
            </span>
        </div>
    );
};

export default Header1;