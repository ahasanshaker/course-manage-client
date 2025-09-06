import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
// import CourseCard from './Shared/CourseCard';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <p className="text-center py-10 text-lg font-medium">
                Loading courses...
            </p>
        );
    }

    if (courses.length === 0) {
        return (
            <p className="text-center py-10 text-lg font-medium">
                No courses found.
            </p>
        );
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                All Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
