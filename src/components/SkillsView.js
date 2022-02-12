import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoAngular } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';

const SkillsView = () => {
    return (
        <div className='skillsView'>
            <p className='mainTxtBG'>Skills</p>
        
            <p className='skillsViewText'>
                I create intuitive and responsive web applications using a variety of techonologies. I specialize in Front End Development using different frameworks, implementing APIs, and creating animations to bring applications to life. I also have Full Stack Development experience creating backend servers and working with REST APIs.
            </p>

            <div className='allSkillsCntr'>
                <div className='front-endSkillsCntr'>
                   
                </div>

                <div className='back-endSkilsCntr'>

                </div>

                <div className='toolsSkillsCntr'>

                </div>

                <div className='librariesSkillsCntr'>

                </div>

                <div className='learningSkillsCntr'>

                </div>
            </div>
        </div>
    );
}

export default SkillsView;