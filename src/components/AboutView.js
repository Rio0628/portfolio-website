import React, { useEffect, useRef } from 'react';
// import * as TagCanvas from 'jquery-tagcanvas';

const AboutView = (props) => {

    // Will trigger the animations in the about view once it is within the viewport 
    // const aboutViewActive = () => props.aboutViewVisible ? ' active' : '';

    const skills = [
        { href: "#git_", title: "Git" },
        { href: "#json_", title: "JSON" },
        { href: "#solidity_", title: "Solidity" },
        { href: "#html_", title: "HTML" },
        { href: "#react_", title: "React" },
        { href: "#python_", title: "Python" },
        { href: "#sql_", title: "SQL" },
        { href: "#shopify_", title: "Shopify" },
        { href: "#aws_", title: "AWS" },
        { href: "#wordpress_", title: "WordPress" },
        { href: "#npm_", title: "npm" },
        { href: "#css_", title: "CSS" },
        { href: "#jquery_", title: "jQuery" },
        { href: "#js_", title: "JavaScript" },
        { href: "#c++_", title: "C++" },
        { href: "#java_", title: "Java" },
        { href: "#php_", title: "PHP" },
        { href: "#selenium_", title: "Selenium" },
        { href: "#remix_", title: "Remix" },
        { href: "#ganache_", title: "Ganache" },
        { href: "#hubspot_", title: "HubSpot" },
        { href: "#node.js_", title: "Node.js" },
        { href: "#hiveos_", title: "HiveOS" },
        { href: "#crypto_", title: "Crypto" },
        { href: "#mining_", title: "Mining" },
        { href: "#photoshop_", title: "Photoshop" },
        { href: "#illustrator_", title: "Illustrator" },
        { href: "#premier-pro_", title: "Premier Pro" },
        { href: "#truffle_", title: "Truffle" },
        { href: "#pyqt_", title: "PyQT" },
        { href: "#hardhat_", title: "Hardhat" }
    ];

    useEffect( () => {
      
        
        const TagCanvas = window.TagCanvas;
        const tagCanvasOptions = {
           textColour: '#fff',
           outlineThickness: 0.5,
           outlineColour: '#FE0853',
           maxSpeed: 0.1,
           freezeActive: true,
           shuffleTags: true,
           shape: 'sphere',
           zoom: 1,
           wheelZoom: true,
           noSelect: true,
           textFont: 'Titillium Web',
        //    textWeight: 600,
           textHeight: 12,
           reverse: true,
           freezeDecel: true,
           fadeIn: 3000,
        //    initial: [0.3, -.1],
           depth: 1.1,

        };
        try {
           TagCanvas.Start('canvas', 'allTags', tagCanvasOptions);
            console.log(TagCanvas)
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
                <canvas className='skillCanvas' id='canvas' style={{ width: '100%', height: '100%'}}></canvas>
            </div>

            <div className='tags' id='allTags' style={{ display: 'none'}}>
                <ul>
                    {skills.map(skill => (
                        <li key={skill.title}><a href={skill.href}>{skill.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AboutView;