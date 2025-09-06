import React from "react";
import { AcademicCapIcon, PlusCircleIcon, UserGroupIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const AboutUseSection = () => {
  const features = [
    {
      title: "Course Enrollment",
      description: "Enroll in available courses easily and track your progress.",
      icon: <AcademicCapIcon className="h-10 w-10 text-indigo-500" />,
    },
    {
      title: "Add Courses",
      description: "Logged-in users can add new courses for others to enroll.",
      icon: <PlusCircleIcon className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Instructor Profiles",
      description: "See instructor info, their courses, and contact details.",
      icon: <UserGroupIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on mobile, tablet, and desktop.",
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-pink-500" />,
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-16 bg-gradient-to-b from-indigo-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-600">
        About & Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUseSection;
