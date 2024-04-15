import React from 'react';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/workouttracker');
    };

    return (
        <div className="h-screen w-[90vw] md:w-[70vw] flex justify-center pt-8">
            <form className="w-full max-w-md flex flex-col justify-between" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h1 className="text-center font-semibold text-xl mb-3">What are your goals?</h1>
                    </div>
                    <div className="mb-4 mt-8 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="weightloss" name="weightloss" placeholder="Weight Loss" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="weightlossCheckbox" />
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="musclegain" name="musclegain" placeholder="Muscle Gain" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="musclegainCheckbox" />
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="flexandmob" name="flexandmob" placeholder="Flexibility and Mobility" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="flexandmobCheckbox" />
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="genfitness" name="genfitness" placeholder="General Fitness" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="genfitnessCheckbox" />
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="event" name="event" placeholder="Event - specific training" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="eventCheckbox" />
                    </div>
                    <div className="mb-4 relative">
                        <input type="text" className="bg-gray-100 text-black w-full py-3 px-3 rounded-xl font-semibold text-xs focus:outline-none" id="mindandmental" name="mindandmental" placeholder="Mindfulness and Mental Health" />
                        <input type="checkbox" className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5" id="mindandmentalCheckbox" />
                    </div>
                </div>

                <div className="pb-28 md:pb-12">
                    <button type="submit" className="w-full max-w-md py-3 px-4 rounded-xl text-white bg-gradient-to-r from-gradient2 to-gradient1 hover:from-gradient1 hover:to-gradient2 font-semibold">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Goals;
