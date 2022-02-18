import React, { useEffect, useRef } from 'react';

const ContactView = (props) => {

    let canvasRef = useRef(null);
        
    useEffect( () => {
       
        
        
    }, []);

    return (
        <div className='contactView' id='contact' >
            <canvas className='bgCanvas' ref={canvasRef}>Your Browser Does Not Support Canva, Please Update Browser or Download Chrome</canvas>
            
            <p className='mainTxtBG'>Contact</p>

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