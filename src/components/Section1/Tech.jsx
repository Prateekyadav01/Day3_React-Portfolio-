import React from 'react';
// import './css/Tech.css';
import { useSelector } from 'react-redux';

const Tech = () => {
    const themeSlice = useSelector((store) => store.theme);

    // Define the theme-specific class based on the themeSlice
    const themeClass = themeSlice === 'Dark' ? 'text-base-content' : 'text-base-dark';

    return (
        <div className={`flex flex-col justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 ${themeSlice === 'Dark' ? 'bg-black text-white' : 'bg-white'} gap-6`}>
            <h1 className={`${themeClass} opacity-70`}>Tech Stack</h1>
            <div className="-m-1 flex flex-wrap justify-center">
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>HTML</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>CSS</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>JavaScript</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>React.js</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>Node.js</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>Express.js</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>MongoDB</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>Razorpay</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>Java</div>
                <div className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary ${themeSlice === 'Dark' ? 'bg-opacity-90 text-white' : 'bg-opacity-90 text-black'} rounded-full`}>C++</div>
            </div>
        </div>
    );
}

export default Tech;
