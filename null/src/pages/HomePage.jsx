import React, {useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { CustomForm } from '../components/CustomForm';
import "../css/HomePage.css"
import "../css/MailingList.css"
import deny from "../assets/deny.mp4"
import nullSigilRed from "../imgs/nullSigilRed.png"
import Modal from 'react-modal'

const {REACT_APP_U, REACT_APP_ID} = process.env

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-15%',
    transform: 'translate(-50%, -50%)',
    background: 'linear-gradient(335deg, rgb(4, 30, 126) 0%, rgb(3, 0, 26) 100%)'
  },
};

export const HomePage = props => {
  const [modalIsOpen, setIsOpen] = useState(true);
  // const openModal = () => {
  //   setIsOpen(true)
  // }
  const closeModal = () => {
    setIsOpen(false)
  }
  const postUrl = `https://Wearenull.us12.list-manage.com/subscribe/post?u=${REACT_APP_U}&id=${REACT_APP_ID}`;
  return (
    <>
      <video 
        src={deny} autoPlay loop muted 
        playsInline={true} 
        disablePictureInPicture={true} 
        className="video-container"/>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        >
        <div className='modalOuter'>
          <div className='modalInner'>
            <img src={nullSigilRed} alt="Null logo" className="sigilModal"/>
          </div>
          
          <div>
            <h1 className='mailingListText'>JOIN THE CULT</h1>
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