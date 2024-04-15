import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutTracker = () => {
    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center pt-8">
            <div className='w-full max-w-md'>
                <div className="relative">
                    <Link to="/workouttracker" className="bg-gray-200 px-2 py-1 rounded-md absolute text-black">
                        <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                    <h1 className="text-center font-semibold text-xl">Workout Schedule</h1>
                </div>

                <div className="flex justify-center items-center">
                    <i className="fa-solid fa-chevron-left cursor-pointer"></i>
                    <p className='text-semibold text-xs mx-3 mt-3'>Feb 2024</p>
                    <i className="fa-solid fa-chevron-right cursor-pointer"></i>
                </div>

                <div className='flex justify-around font-Quicksand font-semibold'>
                    <div className='flex flex-col p-2 px-3 cursor-pointer'>
                        <span className='text-xs'>Sun</span>
                        <span className='text-3xl'>5</span>
                    </div>
                    <div className='rounded-xl p-2 px-3 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-100 to-indigo-300 text-white cursor-pointer'>
                        <span className='text-xs'>Mon</span>
                        <span className='text-3xl'>6</span>
                    </div>
                    <div className='flex flex-col p-2 px-3 cursor-pointer'>
                        <span className='text-xs'>Tue</span>
                        <span className='text-3xl'>7</span>
                    </div>
                    <div className='flex flex-col p-2 px-3 cursor-pointer'>
                        <span className='text-xs'>Wed</span>
                        <span className='text-3xl'>8</span>
                    </div>
                    <div className='flex flex-col p-2 px-3 cursor-pointer'>
                        <span className='text-xs'>Thu</span>
                        <span className='text-3xl'>9</span>
                    </div>
                </div>

                <div className='flex flex-col relative'>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>06:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>07:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>08:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>09:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>10:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>11:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>12:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>01:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>02:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>03:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>04:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>
                    <span className='font-semibold text-xs text-gray-800 mt-2 mb-3'>05:00AM</span>
                    <div className="w-full border-t border-gray-300"></div>

                    <div className='bg-gradient-to-r from-purple-300 to-purple-400 rounded-full absolute right-2 h-7 translate-y-16'>
                        <p className='font-semibold text-white text-xs mt-1 mx-2'>Ab Workout, 7:30am</p>
                    </div>

                    <div className='bg-gradient-to-r from-purple-300 to-purple-400 rounded-full absolute h-7 top-1/3 -translate-y-7 translate-x-20'>
                        <p className='font-semibold text-white text-xs mt-1 mx-2'>Upperbody Workout, 9am</p>
                    </div>

                    <div className='bg-gray-100 rounded-full absolute h-7 bottom-1/4 -translate-y-2 translate-x-20'>
                        <p className='font-semibold text-black text-xs mt-1 mx-2'>Lowerbody Workout, 3pm</p>
                    </div>

                    <div className='bg-gradient-to-r from-purple-300 to-purple-400 rounded-full absolute h-16 w-16 flex justify-center items-center bottom-12 right-2 cursor-pointer'>
                        <i className="fa-solid fa-plus text-2xl text-white"></i>
                    </div>
                </div>

                <div className='mt-6 relative flex justify-between items-center text-2xl p-3 py-4 text-gray-600'>
                    <i className="fa-solid fa-house cursor-pointer"></i>
                    <i className="fa-solid fa-chart-line text-blue-400 mr-16 cursor-pointer"></i>
                    <div className='absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white to-indigo-200 h-16 w-16 flex justify-center items-center rounded-full cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i className="fa-solid fa-camera cursor-pointer"></i>
                    <i className="fa-solid fa-user cursor-pointer"></i>
                </div>

            </div>
        </div>
    );
};

export default WorkoutTracker;
