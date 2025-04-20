import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import sendDone from '../Animation/Animation - 1738715472282.json';
import message from '../Animation/Animation - 1738717442158.json';
import { useState } from 'react';

function Contact() {
  const [state, handleSubmit] = useForm("mjkgrneo");
  const [formSubmitted, setFormSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    if (state.succeeded) {

      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ email: '', message: '' }); 
        setFormSubmitted(false);
      }, 2000); 
    }
  };

  return (
    <section className='contact-us' id='Contact'>
      <h1 className='title'>
        <span><i className="fas fa-envelope"></i></span>
        Contact us
      </h1>
      <p className='subtitle'>Contact us for more information and get notified when I publish something new.</p>
      <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder='Email Address'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={state.submitting || formSubmitted}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              rows='5'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={state.submitting || formSubmitted}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className='submit' disabled={state.submitting}>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>

          {state.succeeded && formSubmitted && (
            <h2 className='flex message' style={{ marginTop: '1.5rem', alignItems: 'center' }}>
              <Lottie animationData={sendDone} loop={false} style={{ height: 70, color: 'green' }} />
              Your message has been sent successfully
            </h2>
          )}
        </form>
        <div className="animation">
          <Lottie animationData={message} style={{ width: '400px', marginRight: '3rem' }}/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
