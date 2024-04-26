import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { useSelector } from 'react-redux'

const Home = () => {
  const themeInput = useSelector((store) => store.theme);
  console.log(themeInput);

  const containerClassName =
    themeInput === "Dark" ? 'bg-black flex justify-evenly' : 'bg-gray-100 flex justify-evenly';

  return (
    <div className={containerClassName}>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default Home


