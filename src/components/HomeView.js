import React from 'react';
import Typical from 'react-typical';
import './HomeView.css';

const HomeView = () => {
    return (
        <div className='homeView'>
            {/* CANVAS OBJECT WILL GO HERE */}
        
            <p className='mainTxtBG'>Welcome</p>

            <div className='welcomeTxt-DetailsCntr'>
                <p className='welcomeTxt'>Hello I am Mario Domenech</p>
                <div className='homeViewDetails'>
                    <span className='detailsText'>
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "Front-End Developer",
                                2000,
                                "React Developer",
                                2000,
                                "Angular Developer",
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
        </div>
    );
}

export default HomeView;