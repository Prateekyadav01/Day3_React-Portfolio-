import React from 'react'
// import image from "../../assets/IMG_5866.JPG"
const Profile = () => {
    return (
        <div className='flex flex-col  bg-white w-[80%] rounded-lg items-center mb-3 mt-5 p-2'>
            <div class="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="" alt="Prateek Yadav"/></div>
            <h1 className='font-bold text-2xl text-base-content opacity-70'>Prateek Yadav</h1>
            <div className="mt-3 text-base-content text-opacity-60 font-mono  ">⚡ Software Engineer | Open Source Enthusiast | PHP | Node.js | React ⚡</div>
            <h3>Download Resume</h3>
        </div>
    )
}

export default Profile
