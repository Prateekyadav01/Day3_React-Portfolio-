import React from 'react';
import { useSelector } from 'react-redux';

const Education = () => {
  const themeSlice = useSelector((store) => store.theme);

  // Define classes based on themeSlice value
  const containerClass = `flex flex-col justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 bg-${themeSlice === 'Dark' ? 'black' : 'white'} gap-6 shadow-md`;
  const titleClass = `text-lg text-center ${themeSlice === 'Dark' ? 'text-base-content' : 'text-base-content opacity-70'}`;
  const listItemTextClass = themeSlice === 'Dark' ? 'text-gray-400' : 'text-gray-700';
  const listItemDateClass = themeSlice === 'Dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={containerClass}>
      <div className="flex flex-col gap-4 w-full">
        <div className="mx-3">
          <h5 className={titleClass}>Education</h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-gray-400 border-opacity-30 my-2 mx-4 list-none">
            <li className="mb-5 ml-4">
              <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
              <div className="my-0.5 text-xs {listItemDateClass}">2020 - 2024</div>
              <h3 className={`font-semibold ${themeSlice === 'Dark' ? 'text-white' : 'text-gray-800'}`}>B.Tech</h3>
              <div className={`mb-4 ${listItemTextClass}`}>Rajkiya Engineering College, Sonbhadra</div>
            </li>
            <li className="mb-5 ml-4">
              <div className="absolute w-2 h-2 bg-gray-400 rounded-full border border-gray-400 mt-1.5 left-[-10px]"></div>
              <div className="my-0.5 text-xs {listItemDateClass}">2018 - 2020</div>
              <h3 className={`font-semibold ${themeSlice === 'Dark' ? 'text-white' : 'text-gray-800'}`}>Class XII</h3>
              <div className={`mb-4 ${listItemTextClass}`}>St. Andrew's School, Agra</div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
