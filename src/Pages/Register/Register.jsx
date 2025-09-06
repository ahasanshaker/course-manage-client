import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import RegisterLottie from '../../assets/lotties/register.json';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router'; // ✅ useNavigate যোগ করলাম

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate(); // ✅ navigate hook

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
                console.log("Email user:", result.user);
                alert(`User ${formData.fullName} registered successfully!`);
                navigate("/"); // ✅ Register successful হলে home এ redirect
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    };

    // ✅ Google Login Handler
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log("Google user:", result.user);
                alert(`Welcome ${result.user.displayName || "User"}!`);
                navigate("/"); // ✅ Google login successful হলে home এ redirect
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-base-100 shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full">
                
                {/* Registration Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">Register Now!</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Full Name */}
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

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Photo URL */}
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

                        {/* Phone */}
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

                        {/* Terms */}
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

                        {/* Register Button */}
                        <button type="submit" className="btn btn-neutral w-full mt-4">
                            Register
                        </button>
                    </form>

                    {/* ✅ Google Login Button */}
                    <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-2xl" /> 
                        Login with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center mt-6">
                        You have an account?{" "}
                        <Link to="/signIn" className="text-blue-600 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
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
