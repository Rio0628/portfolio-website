import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ContactView = () => {
    return (
        <div className='contactView'>
            <p className='contactViewHeading'>Contact</p>

            <div className='inputFieldsCntr'>
                <input className='inputName' placeholder='Enter Name...' type='text'/>

                <input className='inputEmail' placeholder='Enter Email Address...' type='text'/>
                
                <textarea className='inputMessage' placeholder='Enter Message...' type='text'/>

                <div className='submitBtn'>Submit</div>
            </div>

            <a className='githubRedBtn' href='https://github.com/Rio0628'><AiFillGithub /></a>
        </div>
    );
}

export default ContactView;