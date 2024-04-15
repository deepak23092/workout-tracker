import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png'

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/goals');
    }

    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center pt-4">
            <form className="w-full max-w-md flex flex-col justify-between" onSubmit={handleSubmit} >
                <div>
                    <div>
                        <h1 className="font-Roboto font-semibold text-xl mb-3">Create an account</h1>
                    </div>
                    <div className="mb-4 mt-8">
                        <input type="text" className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="firstname" name="firstname" placeholder="First Name" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="lastname" name="lastname" placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="bg-gray-100 text-gray-600 w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center mt-6">
                        <input type="checkbox" className="form-checkbox text-gray-600 cursor-pointer" id="exampleCheck1" />
                        <label className="ml-2 text-gray-600 text-xs" htmlFor="exampleCheck1">By proceeding, I agree to all <Link>T&C</Link> and <Link>Privacy Policy</Link></label>
                    </div>
                </div>

                <div className='mb-2'>
                    <button type="submit" className="w-full max-w-md py-2 px-4 rounded-xl text-white bg-gradient-to-r from-gradient2 to-gradient1 hover:from-gradient1 hover:to-gradient2 font-semibold">Create an account</button>

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
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
