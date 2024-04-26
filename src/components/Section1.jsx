import React from 'react';
import Theme from './Section1/Theme';
import Profile from './Section1/Profile';
import Based from './Section1/Based';
import Tech from './Section1/Tech';
import Education from './Section1/Education';
import Experience from './Section1/Experience';

const Section1 = () => {
  return (
   <div className='w-[40%] items-center flex flex-col gap-2 '>
      <Theme/>
      <Profile/>
      <Based/>
      <Tech/>
      <Education/>
      <Experience/>
   </div>
  );
}

export default Section1;
