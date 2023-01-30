import React, {} from 'react'
import "../css/Splash.css"
import "../css/Main.css"
import deny from "../assets/deny.mp4"
import sigil from "../imgs/Sigilwhite.png"

export const Splash = () => {
  return (
    <>
      <main>
          <video 
            src={deny} autoPlay loop muted 
            playsInline={true} 
            disablePictureInPicture={true} 
            className="video-container"/>

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
                      <h2 className='headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                        <span>PRE-SAVE NODE NOW</span>
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
