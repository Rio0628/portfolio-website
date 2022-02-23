import React, { useEffect, useRef } from 'react';
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
    let appearCnt = 0;

    useEffect( () => {
        popupAnims.to(titleRef.current, { opacity: 1, x: 0, y: 0, duration: 1, ease: 'expo'});
        popupAnims.to(textRef.current, { opacity: 1, x: 0, y: 0, ease: 'expo' });
        popupAnims.to(formRef.current, { opacity: 1, x: 0, y: 0, ease: 'expo' });
    }, [popupAnims]);

    if (conditional) {
        popupAnims.play();
    }

    return (
        <div className='contactView' id='contact' ref={setViewRef}>
            
            <p className='mainTxtBG' ref={titleRef}>Contact</p>
            <p className='largeTtlBG'>Contact</p>

            <p className='contactViewText' ref={textRef}>
                I am interested in any opportunities that allow me to showcase my skills. If you have any questions or requests do not hesitate to use the form below. 
            </p>

            <form className='inputFieldsCntr' onSubmit={props.sendEmail} ref={formRef}>
                <input className='inputName' id='name' placeholder='Name' type='text' name='from_name' onChange={props.onChange}/>

                <input className='inputEmail' id='email' placeholder='Email Address' type='email' name='from_email' onChange={props.onChange}/>
                
                <textarea className='inputMessage' id='message' name='message' placeholder='Message' type='text' onChange={props.onChange}/>
    
                <input type='submit' className='submitBtn'></input>
            </form>
        </div>
    );
}

export default ContactView;