import { useState } from 'react'
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';


import './App.css'

function App() {

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  )
}

export default App
