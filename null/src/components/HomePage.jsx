import React, {useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';
import "./css/HomePage.css"
import nullSigilRed from "../assets/nullSigilRed.png"
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

const HomePage = props => {
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
        <main className='homepage'>
            <section>
              <button onClick={openModal}>
                <div className='modalText'>HELP</div>
              </button>
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

export default HomePage