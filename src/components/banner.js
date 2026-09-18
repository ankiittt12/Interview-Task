import React from 'react'
import video from '../assets/video-compress-1.mp4'
import './banner.css'

function Banner() {
  return (
    <div>
        <video className='bannervideo' src={video} autoPlay muted loop playsInline />
    </div>
  )
}

export default Banner;