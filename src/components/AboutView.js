import React from 'react';

const AboutView = (props) => {

    // Will trigger the animations in the about view once it is within the viewport 
    // const aboutViewActive = () => props.aboutViewVisible ? ' active' : '';

    return (
        <div className='aboutView' >
            <p className='mainTxtBG'>About</p>

            <div className='aboutTXT'>
                {/* This is where the text will go | Include different p elements for the text*/}
                <p>
                    I'm a Front-End / Web Developer based in Miami, US. 
                    I have a passion for Software Development,
                    creating animations, and solving all types
                    of problems. 
                </p>

                <p>
                    I enjoy working on complex projects that allow
                    me to show and further my knowledge while creating
                    innovative and beautiful designs.
                </p>

                <p>
                    Apart from having a passion for Software Development I have a passion for exercising and spending time outdoors.
                </p>
            </div>
        </div>
    );
}

export default AboutView;