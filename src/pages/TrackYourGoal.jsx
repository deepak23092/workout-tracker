import React from 'react'
import { Link } from 'react-router-dom'
import run from "../assets/running.png"
import sign from "../assets/sign.png"

const TrackYourGoal = () => {
    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center">
            <div className='w-full max-w-md flex flex-col justify-around'>
                <div className="flex justify-end">
                    <Link to="/signup" className='text-customBlue'>Skip</Link>
                </div>

                <div className="flex justify-center">
                    <img src={run} alt="running" className='w-96' />
                </div>

                <div>
                    <h4 className='font-semibold'>Track Your Goal</h4>
                    <p className='text-gray-600'>
                        Don't worry if you have trouble determining your goals, We can help you
                        determine your goals and track your goals
                    </p>
                </div>

                <div className='flex justify-end'>
                    <Link to='/getburn' className='cursor-pointer'>
                        <img src={sign} alt="sign" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TrackYourGoal
