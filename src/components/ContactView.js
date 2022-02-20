import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactView = (props) => {

    let canvasRef = useRef(null), viewRef = useRef(null);
        
    useEffect( () => {
       
    }, []);

    return (
        <div className='contactView' id='contact' ref={viewRef}>
            
            <p className='mainTxtBG'>Contact</p>
            <p className='largeTtlBG'>Contact</p>

            <p className='contactViewText'>
                I am interested in any opportunities that allow me to showcase my skills. If you have any questions or requests do not hesitate to use the form below. 
            </p>

            <form className='inputFieldsCntr' onSubmit={props.sendEmail}>
                <input className='inputName' id='name' placeholder='Name' type='text' name='from_name' onChange={props.onChange}/>

                <input className='inputEmail' id='email' placeholder='Email Address' type='email' name='from_email' onChange={props.onChange}/>
                
                <textarea className='inputMessage' id='message' name='message' placeholder='Message' type='text' onChange={props.onChange}/>
    
                <input type='submit' className='submitBtn'></input>
            </form>
        </div>
    );
}

export default ContactView;