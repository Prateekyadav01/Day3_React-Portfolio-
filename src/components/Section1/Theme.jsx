import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeData } from '../../utils/themeSlice';

const Theme = () => {
    const [theme, setTheme] = useState("");
    const dispatch = useDispatch();

    const handleTheme = (e) => {
        setTheme(e.target.value);
        dispatch(setThemeData(e.target.value));
        console.log(e.target.value);
    };
    const themeSlice = useSelector((store) => store.theme);
    console.log(themeSlice);

    return (
        <div className={`flex justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 ${themeSlice === "Dark" ? "bg-black" : "bg-white"}`}>
            <div>
                <h3 className={`font-light text-${themeSlice === "Dark" ? "white" : "black"} text-xl`}>Theme</h3>
                <span className={`font-light text-${themeSlice === "Dark" ? "white" : "black"} text-sm`}>{theme}</span>
            </div>

            <div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="inline-block w-5 h-5 stroke-current md:mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    {/* Your SVG path here */}
                </svg>
                <select value={theme} onChange={handleTheme} className="font-light text-sm">
                    <option value="" disabled>Change Theme</option>
                    <option value="Default">Default</option>
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                </select>
            </div>
        </div>
    );
}

export default Theme;
