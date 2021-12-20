import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ContactView = (props) => {

    const contactViewActive = () => props.contactViewVisible ? ' active' : '';

    return (
        <div className='contactView' id='contact' ref={props.setContactRef}>
            <p className={'contactViewHeading ' + contactViewActive()}>Contact</p>

            <div className='inputFieldsCntr'>
                <input className={'inputName ' + contactViewActive()} id='name' placeholder='Enter Name...' type='text' onChange={props.onChange}/>

                <input className={'inputEmail ' + contactViewActive()} id='email' placeholder='Enter Email Address...' type='text' onChange={props.onChange}/>
                
                <textarea className={'inputMessage ' + contactViewActive()} id='message' placeholder='Enter Message...' type='text' onChange={props.onChange}/>
    
                <div className={'submitBtn ' + contactViewActive()}>Submit</div>
            </div>

            <div className='btnCntr'><a className={'githubBtn ' + contactViewActive()} href='https://github.com/Rio0628'><AiFillGithub /></a></div>
        </div>
    );
}

export default ContactView;