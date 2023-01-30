import React from "react";
import "../css/NotFound.css"
import "../css/Splash.css"
import deny from "../assets/deny.mp4"
import sigil from "../imgs/Sigilwhite.png"

export const NotFound = () => {
    return (
        <>
        <main>
            <video 
                src={deny} 
                autoPlay loop muted 
                playsinline="true" 
                disablePictureInPicture="true" 
                className="video-containerNF"/>

            <section className="">
                <div className='centerBtnError'>
                <div className=''>
                    <div className="circle flex justify-center items-center " onMouseOver='circle'>
                    <a href="/">
                        <button>
                        <img src={sigil} 
                            alt="sigil" 
                            className="sigil"
                        />
                        <div className="environment"></div>
                        <div className='NotFoundText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                            <h1>404</h1>
                            <h1>THIS PAGE DOES NOT EXIT</h1>
                            <h1>GO BACK TO THE VOID</h1>
                        </div>
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