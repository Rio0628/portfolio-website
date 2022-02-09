import React, { useRef, useEffect } from 'react';
import Typical from 'react-typical';
import { gsap } from 'gsap';
import './HomeView.css';

const HomeView = () => {
    
    const welcomeTxtRef = useRef(null);
    const detailsTxtRef = useRef(null);
    const homeBtnRef = useRef(null);

    
    useEffect( () => {
        
        let homeViewAnims = gsap.timeline({ paused: false });
        homeViewAnims.to(welcomeTxtRef.current, { opacity: 1, duration: .5 }).play();
        homeViewAnims.to(detailsTxtRef.current, { opacity: 1, duration: .3 }).play();
        homeViewAnims.to(homeBtnRef.current, { opacity: 1, duration: .3 }).play();
    });

    return (
        <div className='homeView'>
            {/* CANVAS OBJECT WILL GO HERE */}
        
            <p className='mainTxtBG'>Welcome</p>

            <div className='welcomeTxt-DetailsCntr'>
                <div className='welcomeTxt' ref={welcomeTxtRef}>
                    <p>Hello,</p>
                    <p>I'm Mario</p>
                </div>
                <div className='homeViewDetails' ref={detailsTxtRef}>
                    <span className='detailsText'>
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "Front-End Developer",
                                2000,
                                "Web Developer",
                                2000,
                                "React Developer",
                                2000,
                                "Enthusiastic Dev",
                                2000,
                                "Full Stack Developer",
                                2000,
                            ]}
                        />
                    </span>
                </div>
            </div>

            <div className='homeViewBtns' ref={homeBtnRef}>
                <p className='viewWorkBtn'>View Work</p>
                <p className='contactMeBtn'>Contact Me</p>
            </div>
        </div>
    );
}

export default HomeView;