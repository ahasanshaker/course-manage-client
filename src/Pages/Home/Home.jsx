import React from 'react';
import Banner from './Banner';
import HotCourse from '../HotCourse';
import FAQSection from '../FAQsection';
// import HotJobs from '../HotCourse';

const Home = () => {
    const coursePromise = fetch('http://localhost:3000/courses').then(res=>res.json())
    return (
        <div>
            <Banner></Banner>
            <HotCourse coursePromise={coursePromise}></HotCourse>
            <FAQSection></FAQSection>
           
        </div>
    );
};

export default Home;