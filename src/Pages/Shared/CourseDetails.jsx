import React from "react";
import { Link, useLoaderData } from "react-router";

const CourseDetails = () => {
  const { id, _id, image, price, duration, instructor, description, title } =
    useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
       
      <div className="card w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
         
        {/* Course Image */}
        <figure>
          <img src={image} alt={title} className="w-full h-64 object-cover" />
        </figure>

        {/* Card Body */}
        <div className="card-body p-6">
          {/* Course Title */}
          <h2 className="card-title text-3xl font-bold text-indigo-600">{title}</h2>

          {/* Instructor and Duration */}
          <div className="flex justify-between mt-2 text-gray-600">
            <p><span className="font-semibold">Instructor:</span> {instructor}</p>
            <p><span className="font-semibold">Duration:</span> {duration}</p>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-green-600 mt-2">Price: ${price}</p>

          {/* Description */}
          <p className="mt-4 text-gray-700">{description}</p>

          {/* Action Button */}
          <div className="card-actions justify-end mt-6">
           <Link to={`/enrolNow/${_id}`}> <button className="btn btn-primary">Enroll Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
