import React from 'react';
import Posts from './Posts';
import SideBar from './SideBar';

const Home = () => {
    return (
        <section class="wrapper">
            <SideBar />
            <Posts />
        </section>
    );
};

export default Home;