import React from 'react'
// import { NavLink } from "react-router-dom";
import 'tw-elements'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaSpotify, FaTiktok, FaYoutube} from 'react-icons/fa'
import  "./css/Splash.css"
import trailer from "../assets/trailerHaloB.mp4"
import sigil from "../assets/Sigilwhite.png"


const Splash = () => {
  return (
    <main>
        <video src={trailer} autoPlay loop muted className="video-container"/>

        <section className="">
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='header flex justify-center items-center'>
                <h1 className="headerText flex justify-center items-center">The End begins Nov. 11th</h1>
            </div>
            <div className='centerText'>
                
            </div>
            <div className='smFooter flex justify-center items-center'>
              <div className='flex gap-6 justify-center'>
                  <a href='' target="_blank" className='smIcon'><FaSpotify size={26}/></a>
                  <a href='' target="_blank" className='smIcon'><FaFacebookSquare size={26}/></a>
                  <a href='https://www.youtube.com/channel/UCGIpR9O8IMXF1Uj44QV1mhw' target="_blank" className='smIcon'><FaYoutube size={26}/></a>
                  <a href='https://instagram.com/wearenull_?igshid=YmMyMTA2M2Y=' target="_blank" className='smIcon'><FaInstagram size={26}/></a>
                  <a href='https://twitter.com/WEARE_NULL' target="_blank" className='smIcon'><FaTwitterSquare size={26}/></a>
              </div>
            </div>
            <div className=''>
              <div className="circle flex justify-center items-center">
                {/* <nav>
                  <NavLink
                    to='/linktree'
                  > */}
                  <img src={sigil} 
                    alt="sigil" 
                    className="sigil"
                  />
                  {/* </NavLink>
                </nav> */}
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Splash
