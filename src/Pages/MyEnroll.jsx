import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const MyEnroll = () => {
    const { user } = useContext(AuthContext);
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user.accessToken)

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`https://course-add-server.vercel.app/my-enrolls?email=${user.email}`)
                .then((res) => {
                    setEnrollments(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <p className="text-center py-10 text-lg font-medium">Loading your enrollments...</p>;
    if (!enrollments.length) return <p className="text-center py-10 text-lg font-medium">You have not enrolled in any courses yet.</p>;

    return (
        <div className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Enrolled Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrollments.map((enroll, index) => (
                    <div key={index} className="card bg-base-100 shadow-lg rounded-xl overflow-hidden w-full">
                        <figure className="h-48 overflow-hidden">
                            <img
                                src={enroll.courseImage}
                                alt={enroll.courseTitle}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </figure>
                        <div className="card-body flex flex-col justify-between h-64">
                            <div>
                                <h2 className="card-title text-lg font-bold text-gray-800">{enroll.courseTitle}</h2>
                                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{enroll.courseDescription}</p>
                                <p className="text-gray-700 font-medium mt-2">Instructor: {enroll.instructor}</p>
                                <p className="text-gray-500 text-sm">Duration: {enroll.duration}</p>
                            </div>
                            <div className="card-actions mt-4 flex items-center justify-between">
                                <span className="text-indigo-600 font-bold text-lg">${enroll.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEnroll;
