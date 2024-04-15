import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/workouttracker');
    }

    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center pt-4">
            <form className="w-full max-w-md flex flex-col justify-between py-6" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h1 className="font-Roboto font-semibold text-xl mb-3">Welcome Back</h1>
                    </div>

                    <div className="mb-4">
                        <input type="email" className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-3 relative">
                        <input type={showPassword ? 'text' : 'password'} className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none pr-10" id="password" name="password" placeholder="Password" />
                        <i
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-600 ${showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
                                }`}
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>
                    <Link className='text-gray-500 text-xs'>Forgot your password?</Link>
                </div>

                <div className='mb-2'>
                    <button type="submit" className="w-full max-w-md py-2 px-4 rounded-xl text-white bg-gradient-to-r from-gradient2 to-gradient1 hover:from-gradient1 hover:to-gradient2 font-semibold">Sign In</button>

                    <div className="flex items-center mt-4">
                        <div className="w-full border-t border-gray-300"></div>
                        <div className="mx-2 text-xs text-gray-600 font-semibold">Or</div>
                        <div className="w-full border-t border-gray-300"></div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <img src={google} alt="Google" className="h-10 mx-2 outline outline-1 outline-gray-400 rounded-md p-2 cursor-pointer" />
                        <img src={facebook} alt="Facebook" className="h-10 mx-2 outline outline-1 outline-gray-400 rounded-md p-1 cursor-pointer" />
                    </div>

                    <div className='flex justify-center mt-4 text-xs'>
                        <p className='underline'>Don't have an account yet? <Link to="/signup">Create an account</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
