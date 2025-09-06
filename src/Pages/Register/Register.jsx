import Lottie from 'lottie-react';
import React, { useState } from 'react';
import RegisterLottie from '../../assets/lotties/register.json';

const Register = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        photoUrl: '',
        phone: '',
        terms: false,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!formData.terms) {
            alert('Please agree to Terms & Conditions');
            return;
        }
        // Call your function with form data
        console.log('Form Data Submitted:', formData);

        // Example: call a function
        registerUser(formData);
    };

    // Example function to use submitted data
    const registerUser = (data) => {
        // You can connect this to your backend API or Firebase here
        console.log('Registering user:', data);
        alert(`User ${data.fullName} registered successfully!`);
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-base-100 shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full">
                
                {/* Registration Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">Register Now!</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName" 
                                value={formData.fullName}
                                onChange={handleChange}
                                className="input input-bordered w-full" 
                                placeholder="Full Name" 
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered w-full" 
                                placeholder="Email" 
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                                className="input input-bordered w-full" 
                                placeholder="Password" 
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Photo URL</label>
                            <input 
                                type="text" 
                                name="photoUrl" 
                                value={formData.photoUrl}
                                onChange={handleChange}
                                className="input input-bordered w-full" 
                                placeholder="Photo URL" 
                            />
                        </div>

                        <div>
                            <label className="label">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                className="input input-bordered w-full" 
                                placeholder="Phone Number" 
                            />
                        </div>

                        <div className="flex items-center mt-2">
                            <input 
                                type="checkbox" 
                                name="terms" 
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mr-2" 
                            />
                            <span>I agree to Terms & Conditions</span>
                        </div>

                        <button type="submit" className="btn btn-neutral w-full mt-4">Register</button>
                    </form>
                </div>

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center items-center bg-base-200">
                    <Lottie 
                        animationData={RegisterLottie} 
                        loop={true} 
                        className="w-full h-full max-w-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default Register;
