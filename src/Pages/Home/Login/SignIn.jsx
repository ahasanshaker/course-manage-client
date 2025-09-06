import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import LoginLottie from '../../../assets/lotties/login.json';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

const SignIn = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

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
                alert(`Welcome back ${result.user.email}!`);
                navigate(from); // redirect after login
            })
            .catch(error => alert(error.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                alert(`Welcome ${result.user.displayName || "User"}!`);
                navigate(from); // redirect after Google login
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-2xl rounded-3xl overflow-hidden max-w-6xl w-full">

                {/* Login Form */}
                <div className="w-full lg:w-1/2 p-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-purple-700">Sign In</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
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

                        <button type="submit" className="btn btn-gradient w-full mt-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            Sign In
                        </button>
                    </form>

                    {/* Google Login */}
                    <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2 hover:bg-purple-100"
                    >
                        <FcGoogle className="text-2xl" /> 
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center mt-6 text-gray-600">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-purple-600 font-semibold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center items-center bg-white">
                    <Lottie 
                        animationData={LoginLottie} 
                        loop={true} 
                        autoplay={true}
                        className="w-full h-full max-w-md"
                        style={{ pointerEvents: 'none' }} // user can't interact
                    />
                </div>

            </div>
        </div>
    );
};

export default SignIn;
