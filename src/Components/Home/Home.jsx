import React from 'react';
import Banner from '../Header/Banner';
import Latest from '../Latest/Latest';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
                        <Banner></Banner>
                        <section className="my-7"><Latest></Latest></section>
                        <Outlet></Outlet>
        </div>
    );
};

export default Home;