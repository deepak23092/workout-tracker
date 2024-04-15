import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../assets/chart.png'
import fullBody from '../assets/full body.png'
import upperBody from '../assets/upper body.png'
import fullBody2 from '../assets/full body 2.png'

const WorkoutTracker = () => {
    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center pt-8">
            <div className='w-full max-w-md'>
                <div className="relative">
                    <Link to="/workoutschedule" className="bg-gray-200 px-2 py-1 rounded-md absolute text-black">
                        <i className="fa-solid fa-chevron-left"></i>
                    </Link>
                    <h1 className="text-center font-semibold text-xl">Workout Tracker</h1>
                </div>

                <div className='mt-12 flex justify-center relative'>
                    <p className='absolute text-xs -translate-y-4 -translate-x-3'>Good job</p>
                    <p className='absolute text-xs -translate-y-4 translate-x-24'>less then 320cal</p>
                    <Link to='/workoutschedule'><img src={chart} alt="chart" className='w-96' /></Link>
                </div>

                <div className='bg-gradient-to-r from-indigo-200 to-white flex items-center rounded-lg mt-6'>
                    <i className="fa-solid fa-triangle-exclamation mr-2 ml-2"></i>
                    <p className='text-xs pt-3 w-60'>You've burned fewer calories than yesterday. Time to get moving!</p>
                </div>

                <div className='mt-12'>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold text-base'>Upcoming Workout</h4>
                        <span className='text-xs text-gray-600 cursor-pointer'>See more</span>
                    </div>

                    <div className='rounded-xl shadow flex p-2 items-center relative'>
                        <div className='rounded-full bg-slate-100'>
                            <img src={fullBody} alt="full body workout" className='h-12' />
                        </div>

                        <div className='flex flex-col ml-4 justify-center'>
                            <p className='text-xs mt-2'>Full Body Workout</p>
                            <p className='text-[10px] text-gray-400 -mt-3'>Today 3pm</p>
                        </div>

                        <div className='toggle absolute top-1/2 -translate-y-1/2 right-4'>
                            <input type='checkbox' id='toggle-switch-1' className='hidden' />
                            <label htmlFor='toggle-switch-1' className='toggle-label'>
                                <span className='toggle-button'></span>
                            </label>
                        </div>
                    </div>

                    <div className='rounded-xl shadow flex p-2 items-center relative mt-3'>
                        <div className='rounded-full bg-slate-100'>
                            <img src={upperBody} alt="upper body workout" className='h-12 rounded-full w-12' />
                        </div>

                        <div className='flex flex-col ml-4 justify-center'>
                            <p className='text-xs mt-2'>Upper Body Workout</p>
                            <p className='text-[10px] text-gray-400 -mt-3'>4 Feb, 3:30 pm</p>
                        </div>

                        <div className='toggle absolute top-1/2 -translate-y-1/2 right-4'>
                            <input type='checkbox' id='toggle-switch-2' className='hidden' />
                            <label htmlFor='toggle-switch-2' className='toggle-label'>
                                <span className='toggle-button'></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold text-base'>What Do You Want to Train</h4>
                    </div>

                    <div className='rounded-xl shadow flex p-2 items-center justify-between bg-indigo-200 cursor-pointer'>
                        <div className='flex flex-col text-[10px] ml-2 gap-1'>
                            <span className='text-xs'>Full Body Workout</span>
                            <span>Arms</span>
                            <span>Chest</span>
                            <span>Back</span>
                        </div>

                        <div className='rounded-full bg-slate-100'>
                            <img src={fullBody2} alt="full body workout" className='rounded-full h-24' />
                        </div>
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
