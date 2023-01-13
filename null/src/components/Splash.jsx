import React, {} from 'react'
import "./css/Splash.css"
import halo from "../assets/haloSplash.mp4"
import nullLogo from "../assets/NullwhiteLogo.png"
import sigil from "../assets/Sigilwhite.png"

const Splash = () => {
  return (
    <>
      <main>
          <video src={halo} autoPlay loop muted playsinline="true" disablePictureInPicture="true" className="video-container"/>

          <section className="">
            <div className='centerBtn'>
              <div className=''>
                <div className="circle flex justify-center items-center " onMouseOver='circle'>
                  <a href="https://null-merch-store.myshopify.com">
                    <button>
                      <img src={sigil} 
                        alt="sigil" 
                        className="sigil"
                      />
                      <div className="environment"></div>
                      <h2 className='enterText headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                        <span>SHOP NOW</span>
                      </h2>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
      </main>   
    </>
  )
}

export default Splash