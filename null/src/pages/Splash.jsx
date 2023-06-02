import React, {} from 'react'
import "../css/Splash.css"
import "../css/Main.css"
import fence from "../assets/fence.mp4"
import sigil from "../imgs/Sigilwhite.png"

export const Splash = () => {
  return (
    <>
      <main>
          <video 
            src={fence} autoPlay loop muted 
            playsInline={true} 
            disablePictureInPicture={true} 
            className="video-container"/>

          <section className="">
            <div className='centerBtn'>
              <div className=''>
                <div className="circle flex justify-center items-center " onMouseOver='circle'>
                  <a href="https://www.youtube.com/watch?v=nuYBOukR1XI" target="_blank" rel="noreferrer">
                    <button>
                      <img src={sigil} 
                        alt="sigil" 
                        className="sigil"
                      />
                      <div className="environment"></div>
                      <h2 className='headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                        <span>STREAM FENCEWALKER NOW</span>
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
