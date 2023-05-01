import React from 'react';
import Header1 from '../Header/Header1';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;