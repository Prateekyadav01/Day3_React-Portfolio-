import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col justify-around w-[80%] rounded-lg items-center mb-3 mt-7 p-2 bg-white gap-6'>
            <div class="flex flex-col gap-4 w[100%]"><div class="mx-3"><h5 class="card-title"><span class="text-base-content opacity-70 flex text-center items-center ml-24">Education</span></h5></div><div class="text-base-content text-opacity-60"><ol class="relative border-l border-base-300 border-opacity-30 my-2 mx-4"><li class="mb-5 ml-4"><div class="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5" className="left: -4.5px;"></div><div class="my-0.5 text-xs">2020 - 2024</div><h3 class="font-semibold">B.Tech</h3><div class="mb-4 font-normal">Rajkiya Engineering College,Sonbhadra</div></li><li class="mb-5 ml-4"><div class="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5" className="left: -4.5px;"></div><div class="my-0.5 text-xs">2018 - 2020</div><h3 class="font-semibold">Class XII</h3><div class="mb-4 font-normal">St Andrew's School,Agra</div></li></ol></div></div>
        </div>
    )
}

export default Education
