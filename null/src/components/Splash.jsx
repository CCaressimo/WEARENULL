import React, {useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaSpotify, FaTiktok, FaYoutube} from 'react-icons/fa'
import { SiApplemusic } from "react-icons/si";
import  "./css/Splash.css"
import halo from "../assets/haloSplash.mp4"
import nullLogo from "../assets/NullwhiteLogo.png"
import nullSigilRed from "../assets/nullSigilRed.png"
import sigil from "../assets/Sigilwhite.png"
import Modal from 'react-modal'

const {REACT_APP_U, REACT_APP_ID} = process.env

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black'
  },
};

const Splash = props => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const postUrl = `https://Wearenull.us12.list-manage.com/subscribe/post?u=${REACT_APP_U}&id=${REACT_APP_ID}`;
  return (
    <>
      <main>
          <video src={halo} autoPlay loop muted playsinline="true" disablePictureInPicture="true" className="video-container"/>

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
                <div className="circle flex justify-center items-center " onMouseOver='circle'>
                  <button onClick={openModal}>
                    <img src={sigil} 
                      alt="sigil" 
                      className="sigil"
                    />
                    <div className="environment"></div>
                    <h2 className='enterText headerText hero glitch layers flex justify-center items-center' data-text="HELP ME">
                      <span>JOIN US</span>
                    </h2>
                  </button>
                </div>
              </div>
            </div>
          </section>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        >
        <div className='modalOuter'>
          <div className='modalInner'>
            <img src={nullSigilRed} alt="Null logo" className="sigilModal"/>
          </div>
          
          <div>
            <h1 className='headerText'>JOIN THE CULT</h1>
          </div>
        </div>
        <div className='modalOuter'>
          <MailchimpSubscribe 
            url={postUrl}
            render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        closeModal={closeModal}
                    />
                )}
          />
        </div>
      </Modal>      
    </>
  )
}

export default Splash