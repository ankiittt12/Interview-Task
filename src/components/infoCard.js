import React from 'react'
import'./infoCard.css'

function Infocard() {
  return (
    <div>
        <div className='leftCard'>
            <ol className='cardlist'>
                <li className='items'>Achievements</li>
                <li  className='items'>Our Mission</li>
                <li  className='items' >Our Vision</li>
                <li  className='items'>Our Capabilities</li>
                <li  className='items'>Quality and Commitment</li>
            </ol>
        </div>
        <div className='rightCard'>
            <h1>Quality Awards & Customer <br/>Recognition</h1>
            <pre  style={{marginTop:"50px",fontSize:"16px", marginBottom:"80px"}}>Quality award received from M/S Onida for achieving 100% quality and<br/>
             delivery performance. We have also achieved a 100% vendor quality rating <br/>
             from M/S QH Talbros and serve as direct-on-line suppliers to M/S Minda <br/>
             Corporation Ltd. and M/S Auto Ignition Ltd.</pre>
             <ol className='quality-list'>
                <li className='items2'>Quality award received from M/S Onida for 100% quality and delivery performance</li>
                <li className='items2'>100% vendor quality rating certified by M/S QH Talbros</li>
                <li className='items2'>Direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.</li>
                <li className='items2'>Strategic manufacturing supplier to M/S Auto Ignition Ltd.</li>
                <li className='items2'>Rigorous zero-defect benchmark across all injection molding lines</li>
             </ol>
        </div>
        
    </div>
  )
}

export default Infocard;