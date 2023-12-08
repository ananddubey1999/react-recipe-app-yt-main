import React from 'react'
import Navbar from '../NavePage/Navbar'
import PopularSlider from '../NavePage/PopularSlider'
import TredingSlider from '../NavePage/TredingSlider'

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