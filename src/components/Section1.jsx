import React from 'react';
import Theme from './Section1/Theme';
import Profile from './Section1/Profile';

const Section1 = () => {
  return (
   <div className='w-[40%] items-center flex flex-col gap-2 border border-solid border-red-500'>
      <Theme/>
      <Profile/>
   </div>
  );
}

export default Section1;
