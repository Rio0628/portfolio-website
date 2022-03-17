import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';

const ContactView = (props) => {

    const useOnScreen = props.useOnScreen;
    const options = props.options;

    let titleRef = useRef(null);
    let textRef = useRef(null);
    let formRef = useRef(null);

    const [setViewRef, viewRef] = useOnScreen(options);
    let popupAnims = gsap.timeline({paused: true});
    let conditional = viewRef;

    useEffect( () => {
        popupAnims.to(titleRef.current, { opacity: 1, x: 0, y: 0, duration: .5});
        popupAnims.to(textRef.current, { opacity: 1, x: 0, y: 0 });
        popupAnims.to(formRef.current, { opacity: 1, x: 0, y: 0 });
    }, [popupAnims]);

    if (conditional) {
        popupAnims.play();
    }

    const sendEmail = (e) => {
        // Send the email message that the user creates to maker's main email.  
        e.preventDefault();
  
        if (e.target.elements[0].value && e.target.elements[1].value && e.target.elements[2].value) {
            emailjs.sendForm('service_s96ceec', 'template_sbt77qu', e.target, 'user_ZnbEy3YQ1cqh19gURzYbS').then((result) => {
                alert('Email Sent.');
                window.location.reload();
              }, (err) => { alert(err.text) });
        }
        else alert("Please fill the form to send message!");
      
      }
  

    return (
        <section className='contactView' ref={setViewRef}>
            
            <p className='mainTxtBG' id='contact' ref={titleRef}>Contact</p>
            <p className='largeTtlBG'>Contact</p>

            <p className='contactViewText' ref={textRef}>
                I am interested in any opportunities that allow me to showcase my skills. If you have any questions or requests do not hesitate to use the form below. 
            </p>

            <form className='inputFieldsCntr' ref={formRef} onSubmit={sendEmail}>
                <input className='inputName' id='name' placeholder='Name' type='text' name='from_name' onChange={props.onChange}/>

                <input className='inputEmail' id='email' placeholder='Email Address' type='email' name='from_email' onChange={props.onChange}/>
                
                <textarea className='inputMessage' id='message' name='message' placeholder='Message' type='text' onChange={props.onChange}/>
    
                <input type='submit' className='submitBtn'></input>
            </form>
        </section>
    );
}

export default ContactView;