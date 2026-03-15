import React from 'react';
import NavBar from '../Components/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Navbar/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;