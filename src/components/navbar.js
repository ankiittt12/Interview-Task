import React from 'react'
import './navbar.css'
import logo from'../assets/apex-logo.png'

function Navbar() {
  return (
    <div>
        <div className='tabbar'>
            <div><pre>
                <ol className='tablist'>
                    <li> <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/marker--v1.png" alt="marker--v1"/> ISO/TS16949:2016 Certified    |</li>
                    <li>  Quatity</li>
                    <li>  Cost</li>
                    <li>  Delivery</li>
                    <li>  Service</li>

                </ol></pre>
            </div>
            <div className='tablist'>

            </div>
            <pre>
                <ol className='tablist'>
                    <li> <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/mail.png" alt="mail"/> customersupport@gmail.com  |  </li>
                    <li><img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/phone.png" alt="phone"/> +9120 420 7890  </li>
                    <li><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/linkedin--v1.png" alt="linkedin--v1"/>  </li>
                    <li><img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/google-logo.png" alt="google-logo"/>  </li>
                    <li><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/youtube-play.png" alt="youtube-play"/>    </li>
                </ol>
            </pre>

        </div>
        <navbar>
            <div className='navbar'>
            <img className='logo' src={logo} alt='apex logo'/>
            <pre>
                <ol className='navlist'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Our Customer</li>
                    <li>Industry</li>
                    <li>Career</li>
                    <li>Conatct</li>
                </ol>
            </pre>
            <div className='navlist2'>
                
            <input  style={{height:"25px"}} type='search' placeholder='search'/>
            <img width="30" height="30" src="https://img.icons8.com/ios/500/1A1A1A/menu--v1.png" alt="menu--v1"/>
            <button style={{backgroundColor:"blue", color:"white", height:"50px",width:"150px",fontSize:"18px"}}>Get a Quote</button>
            </div>
        </div>

        </navbar>
    </div>
  )
}

export default Navbar;