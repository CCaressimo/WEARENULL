import React from 'react'
import  "./css/Splash.css"
import trailer from "../assets/trailerHalo.mp4"
import sigil from "../assets/Sigilwhite.png"

const Splash = () => {
  return (
    <div>
        <div className="section">
            <img src={sigil} 
            alt="sigil" 
            className="fixed object-cover w-full h-full"
            />
        </div>

        <div className="video-container">
            <video src={trailer} autoPlay loop muted />
        </div>
    </div>
  )
}

export default Splash