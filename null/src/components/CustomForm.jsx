import React, {useState} from 'react'

const CustomForm = ({ status, message, onValidated}) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const U = process.env.U
    const ID = process.env.ID

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            MERGE1: firstName,
            MERGE2: lastName,
            EMAIL: email,
        });
    }
  return (
        <div className='modalOuter'>
                    <form 
                      className='modalInner'
                      onSubmit={(e) => handleSubmit(e)}>
                          {status === "sending" && (
                            <div className="mc__alert mc__alert--sending">
                              sending...
                            </div>
                          )}
                          {status === "error" && (
                            <div 
                              className="mc__alert mc__alert--error"
                              dangerouslySetInnerHTML={{ __html: message }}
                            />
                          )}
                          {status === "success" && (
                            <div
                              className="mc__alert mc__alert--success"
                              dangerouslySetInnerHTML={{ __html: message }}
                            />
                          )}
                        <input type="hidden"
                          name='u'
                          value={U} />
                        <input type="hidden"
                          name="id"
                          value={ID} />
                        <input 
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          name="firstName"
                          placeholder='First Name'
                          value={firstName}
                          isRequired/>
                        <input 
                          onChange={(e) => setLastName(e.target.value)}
                          type="text"
                          name="lastName"
                          placeholder='Last Name'
                          value={lastName}
                          isRequired/>
                        <input 
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          name="email"
                          placeholder='Email'
                          value={email}
                          isRequired/>
                        <button 
                          className='buttonText glitch layers'
                          label="subscribe"
                          type="submit"
                          formValues={[firstName, lastName, email]}
                          >
                            <h2 className='hero glitch layers' data-text="ENTER">
                              <span>
                                ENTER
                              </span>
                            </h2>
                          </button>
                      </form>
          </div>
  )
}

export default CustomForm