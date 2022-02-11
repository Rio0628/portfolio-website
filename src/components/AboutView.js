import React, { useEffect } from 'react';
// import * as TagCanvas from 'jquery-tagcanvas';

const AboutView = (props) => {

    // Will trigger the animations in the about view once it is within the viewport 
    // const aboutViewActive = () => props.aboutViewVisible ? ' active' : '';

    useEffect( () => {
        console.log('mario');
    
        const TagCanvas = window.TagCanvas;
        const tagCanvasOptions = {
           textColour: '#fff',
           outlineThickness: 0.5,
           outlineColour: '#fff',
           maxSpeed: 0.6,
           freezeActive: true,
           shuffleTags: true,
           shape: 'sphere',
           zoom: .8,
           wheelZoom: false,
           noSelect: true,
           textFont: null,
           freezeDecel: true,
           fadeIn: 3000,
           initial: [0.3, -.1],
           depth: 1.1,

        };
        try {
           TagCanvas.Start('canvas', 'tags', tagCanvasOptions);
        } catch (e) {
            console.log('Canvas Error: ');
            console.log(e)
        }

    }, []);

    return (
        <div className='aboutView' >

            <p className='mainTxtBG'>About</p>

            <p className='aboutMeTitle'>About Me</p>
            
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

            {/* <p className='skillsTitle'>Skills</p> */}

            <div className='skillCanvasCntr'>
                <canvas className='skillCanvas' id='canvas' height='100' width='100'></canvas>
            </div>

            <div className='tags' id='tags'>
                <ul>
                    <li>TEST</li>
                    <li>TEST 1</li>
                    <li>TEST 2</li>
                    <li>TEST 3</li>
                    <li>TEST 4</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutView;