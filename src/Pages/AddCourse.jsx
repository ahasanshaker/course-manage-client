import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://course-add-server.vercel.app/courses", formData);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Course added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        // Reset form
        setFormData({
          title: "",
          description: "",
          instructor: "",
          duration: "",
          price: "",
          image: "",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to add course. Try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Add New Course
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Course Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter course title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Instructor */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Instructor</span>
            </label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="Instructor name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Duration</span>
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 6 weeks, 12 hours"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Price ($)</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Course Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
