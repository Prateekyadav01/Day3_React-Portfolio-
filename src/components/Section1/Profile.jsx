import React from 'react';
import image from '../../assets/IMG_6449.png';
import { useSelector } from 'react-redux';

const Profile = () => {
  const themeSlice = useSelector((store) => store.theme);

  const containerClass = `flex flex-col bg-${themeSlice === 'Dark' ? 'black' : 'white'} w-[80%] rounded-lg items-center mb-3 mt-5 p-2`;
  const nameClass = `font-bold text-2xl text-${themeSlice === 'Dark' ? 'white' : 'base-content'} opacity-70`;
  const descriptionClass = `mt-3 text-${themeSlice === 'Dark' ? 'white' : 'base-content'} text-opacity-60 font-mono`;
  const resumeLinkClass = `mt-3 text-${themeSlice === 'Dark' ? 'blue-300' : 'blue-500'} underline hover:no-underline`;

  return (
    <div className={containerClass}>
      <div className="mb-8 rounded-full w-32 h-32 ring ring-black ring-offset-base-500 ring-offset-2 flex items-center justify-center overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Prateek Yadav"
        />
      </div>
      <h1 className={nameClass}>Prateek Yadav</h1>
      <div className={descriptionClass}>
      ⚡ Software Engineer | | Full Stack Developer|Express.js | Node.js | React ⚡
      </div>
      <a
        href="/path-to-your-resume"
        className={resumeLinkClass}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Profile;
