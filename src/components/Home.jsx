import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TredingSlider from './TredingSlider'

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <PopularSlider />
        <TredingSlider />
      </div>
    </>
  )
}

export default Home

//Part 3 -> here i import and return the navbar , PopularSlider , TrendingSlider and create the perticular page of each