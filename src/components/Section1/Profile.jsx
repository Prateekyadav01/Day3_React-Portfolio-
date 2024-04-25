import React from 'react'
import image from "../../assets/IMG_5866.JPG"
const Profile = () => {
    return (
        <div className='flex flex-col  bg-white w-[70%] rounded-lg items-center mb-3 mt-5 p-2'>
            <div class="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="Prateek Yadav"/></div>
            <h1 className='font-bold text-2xl'>Prateek Yadav</h1>
            <div className="mt-3 text-base-content text-opacity-60 font-mono flex items-center ">⚡ Senior Software Engineer | Open Source Enthusiast | PHP | Node.js | React ⚡</div>
        </div>
    )
}

export default Profile
