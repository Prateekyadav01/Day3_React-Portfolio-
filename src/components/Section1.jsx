import React from 'react';
import Theme from './Section1/Theme';
import Profile from './Section1/Profile';
import Based from './Section1/Based';
import Tech from './Section1/Tech';
import Education from './Section1/Education';

const Section1 = () => {
  return (
   <div className='w-[40%] items-center flex flex-col gap-2 border border-solid border-red-500'>
      <Theme/>
      <Profile/>
      <Based/>
      <Tech/>
      <Education/>
   </div>
  );
}

export default Section1;
