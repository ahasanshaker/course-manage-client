import React from 'react';
import Banner from './Banner';
import HotCourse from '../HotCourse';
// import HotJobs from '../HotCourse';

const Home = () => {
    const coursePromise = fetch('http://localhost:3000/courses').then(res=>res.json())
    return (
        <div>
            <Banner></Banner>
            <HotCourse coursePromise={coursePromise}></HotCourse>
           
        </div>
    );
};

export default Home;