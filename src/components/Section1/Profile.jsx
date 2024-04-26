import React from 'react';
import image from '../../assets/IMG_6449.png';

const Profile = () => {
  return (
    <div className='flex flex-col bg-white w-[80%] rounded-lg items-center mb-3 mt-5 p-2'>
      <div className="mb-8 rounded-full w-32 h-32 ring ring-black ring-offset-base-500 ring-offset-2 flex items-center justify-center overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Prateek Yadav"
        />
      </div>
      <h1 className='font-bold text-2xl text-base-content opacity-70'>Prateek Yadav</h1>
      <div className="mt-3 text-base-content text-opacity-60 font-mono">
        ⚡ Software Engineer | Open Source Enthusiast | PHP | Node.js | React ⚡
      </div>
      <a
        href="/path-to-your-resume"
        className="mt-3 text-base-content text-blue-500 underline hover:no-underline"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Profile;
