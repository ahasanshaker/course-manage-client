import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router'; // ✅ useNavigate যোগ করা হলো
import LoginLottie from '../../../assets/lotties/login.json';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

const SignIn = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate(); // ✅ hook for redirect

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(formData.email, formData.password)
            .then(result => {
                console.log("Logged in user:", result.user);
                alert(`Welcome back ${result.user.email}!`);
                navigate("/"); // ✅ login success হলে home এ redirect
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
                navigate("/"); // ✅ Google login success হলে home এ redirect
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-base-100 shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full">
                
                {/* Login Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">Sign In</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
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

                        {/* Login Button */}
                        <button type="submit" className="btn btn-neutral w-full mt-4">
                            Sign In
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

                    {/* ✅ Register Link */}
                    <p className="text-center mt-6">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center items-center bg-base-200">
                    <Lottie 
                        animationData={LoginLottie} 
                        loop={true} 
                        className="w-full h-full max-w-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default SignIn;
