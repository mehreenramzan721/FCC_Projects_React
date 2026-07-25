import { useState } from 'react'
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from './components/star-rating';



import './App.css'

function App() {

  return (
    <>
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    <StarRating noOfStars={10}/>
    </>
  )
}

export default App
