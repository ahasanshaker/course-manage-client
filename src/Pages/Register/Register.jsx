import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import RegisterLottie from '../../assets/lotties/register.json';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        photoUrl: '',
        phone: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.terms) {
            alert('Please agree to Terms & Conditions');
            return;
        }

        createUser(formData.email, formData.password)
            .then(result => {
                alert(`User ${formData.fullName} registered successfully!`);
                navigate("/"); // redirect after register
            })
            .catch(error => alert(error.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                alert(`Welcome ${result.user.displayName || "User"}!`);
                navigate("/"); // redirect after Google login
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-2xl rounded-3xl overflow-hidden max-w-6xl w-full">

                {/* Registration Form */}
                <div className="w-full lg:w-1/2 p-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-purple-700">Register Now!</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="fullName" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="input input-bordered w-full" 
                            placeholder="Full Name" 
                            required
                        />
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full" 
                            placeholder="Email" 
                            required
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            className="input input-bordered w-full" 
                            placeholder="Password" 
                            required
                        />
                        <input 
                            type="text" 
                            name="photoUrl" 
                            value={formData.photoUrl}
                            onChange={handleChange}
                            className="input input-bordered w-full" 
                            placeholder="Photo URL" 
                        />
                        <input 
                            type="text" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full" 
                            placeholder="Phone Number" 
                        />

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

                        <button type="submit" className="btn btn-gradient w-full mt-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            Register
                        </button>
                    </form>

                    <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2 hover:bg-purple-100"
                    >
                        <FcGoogle className="text-2xl" /> 
                        Continue with Google
                    </button>

                    <p className="text-center mt-6 text-gray-600">
                        Already have an account?{" "}
                        <Link to="/signIn" className="text-purple-600 font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center items-center bg-white">
                    <Lottie 
                        animationData={RegisterLottie} 
                        loop={true} 
                        autoplay={true}
                        className="w-full h-full max-w-md"
                        style={{ pointerEvents: 'none' }} // user can't accidentally interact
                    />
                </div>

            </div>
        </div>
    );
};

export default Register;
