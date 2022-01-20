import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ContactView = (props) => {

    // Will trigger the animations in the contact view once it is within the viewport 
    const contactViewActive = () => props.contactViewVisible ? ' active' : '';

    return (
        <div className='contactView' id='contact' ref={props.setContactRef}>
            <p className={'contactViewHeading ' + contactViewActive()}>Contact</p>

            <form className='inputFieldsCntr' onSubmit={props.sendEmail}>
                <input className={'inputName ' + contactViewActive()} id='name' placeholder='Enter Name...' type='text' name='from_name' onChange={props.onChange}/>

                <input className={'inputEmail ' + contactViewActive()} id='email' placeholder='Enter Email Address...' type='email' name='from_email' onChange={props.onChange}/>
                
                <textarea className={'inputMessage ' + contactViewActive()} id='message' name='message' placeholder='Enter Message...' type='text' onChange={props.onChange}/>
    
                <input type='submit' className={'submitBtn ' + contactViewActive()}></input>
            </form>

            <div className='btnCntr'><a className={'githubBtn ' + contactViewActive()} target='_blank' rel='noopener noreferrer' href='https://github.com/Rio0628'><AiFillGithub /></a></div>
        </div>
    );
}

export default ContactView;