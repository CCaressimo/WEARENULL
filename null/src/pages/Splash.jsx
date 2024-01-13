import React, {} from 'react'
import "../css/Splash.css"
import "../css/Main.css"
import burial from "../imgs/burial_band.png"
import sigil from "../imgs/Sigilwhite.png"

export const Splash = () => {
  return (
    <>
      <main className="background-image">
          <section className="">
            <div className='centerBtn'>
              <div className=''>
                <h2 className='headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                  <span>THIS SITE HAS BEEN REDIRECTED</span>
                </h2>
                <div className="circle flex justify-center items-center " onMouseOver='circle'>
                  <a href="https://www.trashplxnet.com/null" target="_blank" rel="noreferrer">
                    <button>
                      <img src={sigil} 
                        alt="sigil" 
                        className="sigil"
                      />
                      <div className="environment"></div>
                      <h2 className='headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                        <span>CLICK TO ENTER</span>
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
