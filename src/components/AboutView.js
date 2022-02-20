import React, { useEffect, useRef } from 'react';
// import * as TagCanvas from 'jquery-tagcanvas';

const AboutView = (props) => {

    // Will trigger the animations in the about view once it is within the viewport 
    // const aboutViewActive = () => props.aboutViewVisible ? ' active' : '';

    const skills = [
        { href: "#git_", title: "Git" },  
        { href: "#express_", title: "Express" },  
        { href: "#axios_", title: "Axios" },
        { href: "#html_", title: "HTML" }, 
        { href: "#react_", title: "React" }, 
        { href: "#python_", title: "Python" },
        { href: "#sql_", title: "SQL" }, 
        { href: "#laravel_", title: "Laravel" }, 
        { href: "#mern_", title: "MERN" },
        { href: "#npm_", title: "npm" }, 
        { href: "#css_", title: "CSS" }, 
        { href: "#jquery_", title: "jQuery" },
        { href: "#js_", title: "JavaScript" },
        { href: "#c++_", title: "C++" }, 
        { href: "#java_", title: "Java" },
        { href: "#php_", title: "PHP" }, 
        { href: "#github", title: "Github" }, 
        { href: "#ts_", title: "TypeScript" },
        { href: "#angular_", title: "Angular" }, 
        { href: "#gsap_", title: "GSAP" }, 
        { href: "#node.js_", title: "Node.js" },
        { href: "#nodemon_", title: "Nodemon" },
    ];
    
    // console.log(window.innerWidth);
    useEffect( () => {
      
        
        const TagCanvas = window.TagCanvas;
        const tagCanvasOptions = {
           textColour: '#fff',
           outlineThickness: 5,
           outlineColour: '#fff',
           maxSpeed: 0.05,
           freezeActive: false,
           shuffleTags: true,
           shape: 'sphere',
           zoom: .9,
           wheelZoom: false,
           noSelect: true,
           textFont: 'Titillium Web',
           textHeight: 25,
           reverse: true,
           freezeDecel: true,
           fadeIn: 3000,
           initial: [0.05, -.1],
           depth: 1.1,

        };
        try {
           TagCanvas.Start('canvas', 'allTags', tagCanvasOptions);
        } catch (e) {
            console.log('Canvas Error: ');
            console.log(e)
        }


    }, []);

    return (
        <div className='aboutView' >

            <p className='mainTxtBG'>About</p>
            <p className='largeTtlBG'>About</p>
            
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
                <canvas className='skillCanvas' id='canvas' width='500' height='500'></canvas>
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