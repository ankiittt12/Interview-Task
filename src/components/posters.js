import React from 'react'
import './poster.css'
import img1 from'../assets/dorr.png'
import img2 from'../assets/bikespedometer.webp'
import img3 from'../assets/mcb.webp'
import img4 from'../assets/steering.png'
import img5 from'../assets/motor.webp'


function Posters() {
  return (
    <div className='poster'>
        <img className='last' src={img1} alt='loading'/>
        <img className='side' src={img4} alt='loading'/>
        <img className='center' src={img2} alt='loading'/>
        <img className='side' src={img5} alt='loading'/>
        <img className='last' src={img3} alt='loading'/>
    </div>
  )
}

export default Posters;