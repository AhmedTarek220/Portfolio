import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import sendDone from '../Animation/Animation - 1738715472282.json'; 
import message from '../Animation/Animation - 1738717442158.json'; 

function Contact() {
  const [state, handleSubmit] = useForm("mjkgrneo");

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span><i className="fas fa-envelope"></i></span>
        Contact us
      </h1>
      <p className='subtitle'>Contact us for more information and get notified when I publish something new.</p>
      <div className="flex" style={{justifyContent:'space-between' , alignItems:'center'}}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder='Email Address' name='email' id='email' required />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your message:</label>
            <textarea id="message" rows='5' required name='message'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button className='submit' disabled={state.submitting}>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>

          {state.succeeded && (
            <h2 className='flex' style={{ marginTop: '1.5rem', alignItems: 'center'}}>
              <Lottie animationData={sendDone} loop={false} style={{ height: 70, color:'green' }} />
              Your message has been sent successfully
            </h2>
          )}
        </form>
        <div className="animation">
        <Lottie animationData={message} style={{width:'400px',marginRight:'3rem'}}/>
        </div>
      </div>
    </section>
  );
}

export default Contact;