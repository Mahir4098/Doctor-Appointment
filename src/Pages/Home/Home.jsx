import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <Doctors data={data}></Doctors>

            
        </div>
    );
};

export default Home;