import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ContactView = (props) => {

    const contactViewActive = () => props.contactViewVisible ? ' active' : '';

    return (
        <div className='contactView' id='contact' ref={props.setContactRef}>
            <p className={'contactViewHeading ' + contactViewActive()}>Contact</p>

            <div className='inputFieldsCntr'>
                <input className={'inputName ' + contactViewActive()} placeholder='Enter Name...' type='text'/>

            <input className={'inputEmail ' + contactViewActive()} placeholder='Enter Email Address...' type='text'/>
                
                <textarea className={'inputMessage ' + contactViewActive()} placeholder='Enter Message...' type='text'/>

                <div className={'submitBtn ' + contactViewActive()}>Submit</div>
            </div>

            <div className='btnCntr'><a className={'githubBtn ' + contactViewActive()} href='https://github.com/Rio0628'><AiFillGithub /></a></div>
        </div>
    );
}

export default ContactView;