import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this project about?",
      answer:
        "This project is a course management system where users can enroll in courses, add courses, and see hot courses.",
    },
    {
      question: "How can I add a course?",
      answer:
        "Only logged-in users can add a new course using the Add Course section. Fill in the form and submit to save it in the database.",
    },
    {
      question: "Can I see my enrolled courses?",
      answer:
        "Yes! Once you enroll in a course, go to the My Enrollment section to see your courses.",
    },
    {
      question: "Is it mobile-friendly?",
      answer:
        "Absolutely! The entire project is designed to work seamlessly on mobile, tablet, and desktop devices.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-5 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="ml-2">
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-indigo-500" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-indigo-500" />
                )}
              </span>
            </button>

            {/* Answer with smooth height animation */}
            <div
              className={`px-5 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
