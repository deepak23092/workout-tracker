import React from 'react'
import { Link } from 'react-router-dom'
import cycling from "../assets/cycling.png"
import sign from "../assets/sign.png"

const TrackYourGoal = () => {
    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center">
            <div className='w-full max-w-md flex flex-col justify-around'>
                <div className="flex justify-end">
                    <Link to="/signup" className='text-customBlue'>Skip</Link>
                </div>

                <div className="flex justify-center">
                    <img src={cycling} alt="cycling" className='w-[38rem]' />
                </div>

                <div>
                    <h4 className='font-semibold'>Get Burn</h4>
                    <p className='text-gray-600'>
                        Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will will be in pain forever
                    </p>
                </div>

                <div className='flex justify-end'>
                    <Link to='/signup' className='cursor-pointer'>
                        <img src={sign} alt="sign" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TrackYourGoal
