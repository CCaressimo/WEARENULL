import React from 'react'
import { NavLink } from "react-router-dom";
import 'tw-elements'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaSpotify, FaTiktok, FaYoutube} from 'react-icons/fa'
import { SiApplemusic } from "react-icons/si";
import  "./css/Splash.css"
import halo from "../assets/haloSplash.mov"
import nullLogo from "../assets/NullwhiteLogo.png"
import sigil from "../assets/Sigilwhite.png"


const Splash = () => {
  return (


    <main>
        <video src={halo} autoPlay loop muted className="video-container"/>

        <section className="">
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className='header flex justify-center items-center'>
                <img src={nullLogo} alt="Null logo" className="nullLogo flex justify-center items-center"/>
            </div>
            <div className='centerText'>
                
            </div>
            <div className='smFooter flex justify-center items-center'>
              <div className='flex gap-6 justify-center'>
                  <a href='https://open.spotify.com/artist/4sPUuytxwpAcIprvNPmcLz' target="_blank" className='smIcon'><FaSpotify size={26}/></a>
                  <a href='https://www.youtube.com/@WEARE_NULL' target="_blank" className='smIcon'><FaYoutube size={26}/></a>
                  <a href='https://music.apple.com/us/artist/null/1646846261' target="_blank" className='smIcon'><SiApplemusic size={26}/></a>
                  <a href='https://www.instagram.com/Wearenull_' target="_blank" className='smIcon'><FaInstagram size={26}/></a>
                  <a href='https://www.tiktok.com/@weare_null' target="_blank" className='smIcon'><FaTiktok size={26}/></a>
                  <a href='https://twitter.com/WEARE_NULL' target="_blank" className='smIcon'><FaTwitterSquare size={26}/></a>
                  <a href='https://www.facebook.com/WExARExNULL' target="_blank" className='smIcon'><FaFacebookSquare size={26}/></a>
              </div>
            </div>
            <div className=''>
              <div className="circle flex justify-center items-center hover:opacity-100" onmouseover='circle'>

                <nav>
                  <NavLink
                    
                  >
                  <img src={sigil} 
                    alt="sigil" 
                    className="sigil"
                  />
                  <h1 className='enterText headerText flex justify-center items-center'>JOIN US</h1>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Splash
