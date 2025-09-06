import React, { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const EnrollNow = () => {
  const { id: courseId } = useParams();
  const { user } = useContext(AuthContext);

  const handleEnroll = (e) => {
    e.preventDefault();
    const form = e.target;

    const enrollData = {
      courseId,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value,
    };

    console.log("Enrollment Data:", enrollData);

    // এখানে তুমি fetch/axios দিয়ে backend এ পাঠাতে পারো
    // fetch("http://localhost:5000/enroll", { ... })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="card w-full max-w-lg shadow-xl bg-white rounded-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-4">
            Enroll for Programming Course
          </h2>

          <form onSubmit={handleEnroll} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Why do you want to join?</span>
              </label>
              <textarea
                name="message"
                placeholder="Write a short message..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full">
                Submit Enrollment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;
