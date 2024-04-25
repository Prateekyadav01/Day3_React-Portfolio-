import React from 'react';

const Education = () => {
    return (
        <div className='flex flex-col justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 bg-white gap-6 shadow-md'>
            <div className="flex flex-col gap-4 w-full">
                <div className="mx-3">
                    <h5 className="text-lg  text-center text-base-content opacity-70">Education</h5>
                </div>
                <div className="text-base-content text-opacity-60">
                    <ol className="relative border-l border-gray-400 border-opacity-30 my-2 mx-4 list-none">
                        <li className="mb-5 ml-4">
                            <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
                            <div className="my-0.5 text-xs text-gray-600">2020 - 2024</div>
                            <h3 className="font-semibold text-gray-800">B.Tech</h3>
                            <div className="mb-4 text-gray-700">Rajkiya Engineering College, Sonbhadra</div>
                        </li>
                        <li className="mb-5 ml-4">
                            <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
                            <div className="my-0.5 text-xs text-gray-600">2018 - 2020</div>
                            <h3 className="font-semibold text-gray-800">Class XII</h3>
                            <div className="mb-4 text-gray-700">St. Andrew's School, Agra</div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Education;
