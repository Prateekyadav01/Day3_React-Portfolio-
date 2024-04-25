import React from 'react';

const Experience = () => {
    return (
        <div className='flex flex-col justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 bg-white gap-6 shadow-md'>
            <div className="flex flex-col gap-4 w-full"> 
                <div className="mx-3">
                    <h5 className="text-lg  text-center text-base-content opacity-70">Experience</h5>
                </div>
                <div className="text-base-content text-opacity-60">
                    <ol className="relative border-l border-gray-400 border-opacity-30 my-2 mx-4 list-none">
                        <li className="mb-5 ml-4">
                            <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
                            <div className="my-0.5 text-xs text-gray-600">April 2023 - June 2023</div>
                            <h3 className="font-semibold text-gray-800">Web Developer Intern</h3>
                            <div className="mb-4 text-gray-700">Tulip Organisation</div>
                        </li>
                        <li className="mb-5 ml-4">
                            <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
                            <div className="my-0.5 text-xs text-gray-600">November 2023 - January 2024</div>
                            <h3 className="font-semibold text-gray-800">React.js Intern</h3>
                            <div className="mb-4 text-gray-700">Techmatys</div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Experience;
