import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    return (
        <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full">
            <figure className="h-48 overflow-hidden">
                <img 
                    src={course.image} 
                alt={course.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </figure>
            <div className="card-body flex flex-col justify-between h-64">
                <div>
                    <h2 className="card-title text-lg font-bold text-gray-800">{course.title}</h2>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-3">{course.description}</p>
                    <p className="text-gray-700 font-medium mt-2">Instructor: {course.instructor}</p>
                    <p className="text-gray-500 text-sm">Duration: {course.duration}</p>
                </div>
                <div className="card-actions mt-4 flex items-center justify-between">
                    <span className="text-indigo-600 font-bold text-lg">${course.price}</span>
                    <Link to={`/courses/${course._id}`}>  <button className="btn btn-primary btn-sm">Course Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
