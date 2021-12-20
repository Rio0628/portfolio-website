import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';

const AboutView = (props) => {

    const aboutViewActive = () => props.aboutViewVisible ? ' active' : '';

    return (
        <div className='aboutView' id='about' ref={props.setAboutRef}>
            <p className={'aboutViewHeading ' + aboutViewActive()}>About Me</p>

            <div className={'aboutViewMainInfo' + aboutViewActive()}>
                <p>I am Mario Domenech, an entry-level front-end developer.</p>
                
                <p>For the last year I have been building my skills and knowledge on programming focusing most of the time on front-end focused technologies with the last couple months focusing on making programs and application to test said skills. </p>

                <p>I have experience with various front-end technologies like HTML, CSS, and JavaScript. On top of that I am experienced with multiple JavaScript libraries and frameworks like React, Express, and Node JS. As well as familiarity using the MongoDB database for various projects.</p>

                <p>I enjoy learning and working on projects that allow me to test my skills and learn new technologies that further my understanding of web development and software engineering as a whole.</p> 

                <p>You can view my work on my <a className='githubLink' href="https://github.com/Rio0628">Github</a></p>
    
            </div>

            <div className='porgressBarsCntr'>
                <div className={'HTMLinfoCntr ' + aboutViewActive()}>
                    <div className='HTMLlogo-name'>
                        <p className='htmlName'>HTML</p>
                        <AiFillHtml5 className='logo HTML'/>
                    </div>

                    <div className='progressBar HTML'><div className='HTMLfill'>70%</div></div>
                </div>

                <div className={'CSSinfoCntr ' + aboutViewActive()}>
                    <div className='CSSlogo-name'>
                        <p className='cssName'>CSS</p>
                        <IoLogoCss3 className='logo CSS'/>
                    </div>

                    <div className='progressBar CSS'><div className='CSSfill'>60%</div></div>
                </div>

                <div className={'JSinfoCntr ' + aboutViewActive()}>
                    <div className='JSlogo-name'>
                        <p className='jsName'>Javascript</p>
                        <SiJavascript className='logo JS'/>
                    </div>

                    <div className='progressBar JS'><div className='JSfill'>65%</div></div>
                </div>

                <div className={'ReactinfoCntr ' + aboutViewActive()}>
                    <div className='Reactlogo-name'>
                        <p className='reactName'>React</p>
                        <SiReact className='logo React'/>
                    </div>

                    <div className='progressBar React'><div className='Reactfill'>50%</div></div>
                </div>

                <div className={'NodeinfoCntr ' + aboutViewActive()}>
                    <div className='Nodelogo-name'>
                        <p className='nodeName'>Node</p>
                        <SiNodedotjs className='logo Node'/>
                    </div>

                    <div className='progressBar Node'><div className='Nodefill'>20%</div></div>
                </div>
            </div>
        </div>
    );
}

export default AboutView;