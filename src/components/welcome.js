import React from 'react'
import'./welcome.css'

function Welcome() {
  return (
    <div>
        <strong style={{fontSize:"50px"}}>Welcome to Apex Ignite Solutions Pvt. Ltd.</strong>
        <pre className='para'>We have an<span> in-house tool-making facility</span> and a dedicated design section for precision mold development, with <span>2D & 3D design capabilities. </span><br/>
            Our facility includes <span>18 horizontal and 2 vertical automatic injection molding machines</span>, ranging from<span> 50 to 350 tons</span>. We also offer <span>ultrasonic <br/>
             welding of plastic components</span> and work with a wide range of <span>thermoplastic materials</span> to manufacture quality precision components.</pre>
    </div>
  )
}

export default Welcome;