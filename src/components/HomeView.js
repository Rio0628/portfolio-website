import React, { useRef, useEffect } from 'react';
import Typical from 'react-typical';
import { gsap } from 'gsap';
import './HomeView.css';

const HomeView = () => {
    
    const welcomeTxtRef = useRef(null);
    const detailsTxtRef = useRef(null);
    const homeBtnRef = useRef(null);
    const canvasRef = useRef(null);
    const homeViewRef = useRef(null);
    

    useEffect( () => {
        
        let homeViewAnims = gsap.timeline({ paused: false });
        homeViewAnims.to(welcomeTxtRef.current, { opacity: 1, duration: .5 }).play();
        homeViewAnims.to(detailsTxtRef.current, { opacity: 1, duration: .3 }).play();
        homeViewAnims.to(homeBtnRef.current, { opacity: 1, duration: .3 }).play();

        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');
        let homeView = homeViewRef.current;
        let time = 0, velocity = .1, velocityTarget = .1, width, height, lastX, lastY;

        let MAX_OFFSET = 400, SPACING = 4, POINTS = MAX_OFFSET / SPACING, PEAK = MAX_OFFSET * .25, POINTS_PER_LAP = 6, SHADOW_STRENGTH = 6;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        const step = () => {
            time += velocity;
            velocity += ( velocityTarget - velocity ) * .3;

            clear();
            render();

            requestAnimationFrame( step );
        }

        const clear = () => { context.clearRect( 0, 0, width, height ) };

        const render = () => {
            let x, y, cx = width / 2, cy = height / 2;

            context.globalComposieOperation = 'lighter';
            context.strokeStyle = '#fff';
            context.shadowColor = '#fff';
            context.lineWidth = 2;
            context.beginPath();

            for (let i = POINTS; i > 0; i--) {
                let value = i * SPACING + (time % SPACING);
                let ax = Math.sin( value / POINTS_PER_LAP ) * Math.PI, 
                    ay = Math.cos( value / POINTS_PER_LAP ) * Math.PI;

                x = ax * value;
                y = ay * value * .35;

                let o = 1 - ( Math.min( value, PEAK ) / PEAK );

                y -= Math.pow(0, 2) * 200;
                y += 200 * value / MAX_OFFSET;
                y += x / cx * width * .1;

                context.globalAlpha = 1 - ( value / MAX_OFFSET );
                context.shadowBlur = SHADOW_STRENGTH * o;
                context.lineTo( cx + x, cy + y );
                context.stroke();
                context.beginPath();
                context.moveTo( cx + x, cy + y );
            }

            context.lineTo( cx, cy - 200);
            context.lineTo( cx, 0);
            context.stroke();
        }

        const onMouseDown = (event) => {
            lastX = event.clientX;
            lastY = event.clientY;

            document.addEventListener( 'mousemove', onMouseMove );
            document.addEventListener( 'mouseup', onMouseUp );
        }

        const onMouseMove = (event) => {
            let vx = ( event.clientX - lastX ) / 100;
            let vy = ( event.clientY - lastY ) / 100;

            if ( event.clientY < height / 2 ) vx *= -1;
            if ( event.clientX > width / 2 ) vy *= -1;

            velocityTarget = vx + vy;
            lastX = event.clientX;
            lastY = event.clientY;
        }

        const onMouseUp = (event) => {
            document.removeEventListener( 'mousemove', onMouseMove );
            document.removeEventListener( 'mouseup', onMouseUp );
        }

        const onTouchStart = (event) => {
            event.preventDefault();

            lastX = event.touches[0].clientX;
            lastY = event.touches[0].clientY;

            document.addEventListener( 'touchmove', onTouchMove );
            document.addEventListener( 'touchend', onTouchEnd );
        }

        const onTouchMove = (event) => {
            let vx = ( event.touches[0].clientX - lastX ) / 100;
            let vy = ( event.touches[0].clientY - lastY ) / 100;

            if ( event.touches[0].clientY < height / 2 ) vx *= -1; 
            if ( event.touches[0].clientX > width / 2 ) vy *= -1; 
            
            velocityTarget = vx + vy;

            lastX = event.touches[0].clientX;
            lastY = event.touches[0].clientY;
        }

        const onTouchEnd = (event) => {
            document.removeEventListener( 'touchmove', onTouchMove );
            document.removeEventListener( 'touchend', onTouchEnd );
        }

        const setup = () => {
            resize();
            step();

            homeView.addEventListener('resize', resize);
            homeView.addEventListener('mousedown', onMouseDown);
            document.addEventListener('touchstart', onTouchStart);
        }

        setup();
        
    }, []);
    // let canvas = canvasRef.current;
    // let context = canvas.getContext('2d');



    // console.log(canvas)

    return (
        <div className='homeView' ref={homeViewRef}>
            {/* CANVAS OBJECT WILL GO HERE */}
            <canvas className='spiralCanvas' ref={canvasRef}></canvas>
        
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