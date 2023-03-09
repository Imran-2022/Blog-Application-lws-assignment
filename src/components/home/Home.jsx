import React from 'react';
import Posts from './Posts';
import SideBar from './SideBar';

const Home = () => {
    return (
        <section className="wrapper">
            <SideBar />
            <Posts />
        </section>
    );
};

export default Home;