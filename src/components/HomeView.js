import React, { useRef, useEffect } from 'react';
import Typical from 'react-typical';
import { gsap } from 'gsap';

const HomeView = () => {
    
    const welcomeTxtRef = useRef(null);
    const detailsTxtRef = useRef(null);
    const titleRef = useRef(null);
    const homeBtnRef = useRef(null);
    const canvasRef = useRef(null);
    const homeViewRef = useRef(null);
    

    useEffect( () => {
        
        let homeViewAnims = gsap.timeline({ paused: false });
        homeViewAnims.to(welcomeTxtRef.current, { opacity: 1, duration: .8 }).play();
        homeViewAnims.to(detailsTxtRef.current, { opacity: 1, duration: .2 }).play();
        homeViewAnims.to(titleRef.current, { opacity: 1, duration: .2 }).play();
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
        
        const clear = () => { context.clearRect( 0, 0, width, height ) };

        const step = () => {
            time += velocity / 3.5;
            velocity += ( velocityTarget - velocity ) * .3;

            clear();
            render();

            requestAnimationFrame( step );
        }

        const render = () => {
            let x, y, cx = width / 2, cy = height / 2;

            context.globalCompositeOperation = 'lighter';
            context.strokeStyle = '#fff';
            context.shadowColor = '#fff';
            context.lineWidth = 4;
            context.beginPath();

            for (let i = POINTS; i > 0; i--) {
                let value = i * SPACING + (time % SPACING);
                let ax = Math.sin( value / POINTS_PER_LAP ) * Math.PI, 
                    ay = Math.cos( value / POINTS_PER_LAP ) * Math.PI;

                x = ax * value;
                y = ay * value * .35;

                let o = 1 - ( Math.min( value, PEAK ) / PEAK );

                y -= Math.pow(o, 2) * 200;
                y += 100 * value / MAX_OFFSET;
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
            // event.preventDefault();

            lastX = event.touches[0].clientX;
            lastY = event.touches[0].clientY;

            homeView.addEventListener( 'touchmove', onTouchMove );
            homeView.addEventListener( 'touchend', onTouchEnd );
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
            homeView.removeEventListener( 'touchmove', onTouchMove );
            homeView.removeEventListener( 'touchend', onTouchEnd );
        }

        const setup = () => {
            resize();
            step();

            window.addEventListener('resize', resize);
            window.addEventListener('mousedown', onMouseDown);
            document.addEventListener('touchstart', onTouchStart, { passive: true } );
        }

        setup();

        // ++++ STAR BACKGROUND CODE CANVAS ++++

        // canvas.width = window.innerWidth;
		// canvas.height = window.innerHeight;

		// var particleCount = 650;
		// var mouse = {
		// 	x: window.innerWidth / 2,
		// 	y: window.innerHeight / 2 
		// };

		// window.addEventListener("mousemove", function(event) {
		// 	mouse.x = event.clientX - canvas.width / 2;
		// 	mouse.y = event.clientY - canvas.height / 2;
		// });

		// window.addEventListener("resize", function() {
		// 	canvas.width = window.innerWidth;	
		// 	canvas.height = window.innerHeight;

		// 	lightParticles = [];
		// 	initializeParticles();
		// });


		// function LightParticle(x, y, radius, color) {
		// 	this.x = x;
		// 	this.y = y;
		// 	this.radius = radius;
		// 	this.color = color;

		// 	this.update = function() {

		// 		this.draw();
		// 	};

		// 	this.draw = function() {
		// 		context.save();
		// 		context.beginPath();
		// 		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		// 		context.shadowColor = this.color;
		// 		context.shadowBlur = 15;
		// 		context.shadowOffsetX = 0;
		// 		context.shadowOffsetY = 0;
		// 		context.fillStyle = this.color;
		// 		context.fill();
		// 		context.closePath();
		// 		context.restore();
		// 	};
		// }

		// var lightParticles = [];

		// var timer = 0;
		// var opacity = 1;
		// var speed = 0.0005;
		// var colors = [
		// 	"#BFBFBF",
		// 	"#CFDBD5",
		// 	"#E8EDDF",
		// 	"#FFF",
		// 	"#BFC0C0"
		// ];

        //   Colors there already "#0952BD","#A5BFF0","#118CD6","#1AAEE8","#F2E8C9"

		// var initializeParticles;

		// (initializeParticles = function() {
		// 	for (var i = 0; i < particleCount; i++) {

		// 		var randomColorIndex = Math.floor(Math.random() * 6);
		// 		var randomRadius = Math.random() * 2;

		// 		 Ensure particles are spawned past screen width and height so
		// 		there will be no missing stars when rotating canvas
		// 		var x = (Math.random() * (canvas.width + 200)) - (canvas.width + 200) / 2;
		// 		var y = (Math.random() * (canvas.width + 200)) - (canvas.width + 200) / 2;
		// 		lightParticles.push(new LightParticle(x, y, randomRadius, colors[randomColorIndex]));
		// 	}
		// })();

		// function animate() {
		// 	window.requestAnimationFrame(animate);

		// 	context.save();
		// 	if (isMouseDown === true) {

		// 		Ease into the new opacity
		// 		var desiredOpacity = 0.01;
		// 		opacity += (desiredOpacity - opacity) * 0.03;
		// 		context.fillStyle = "rgba(22, 26, 29,"+ opacity +")";
        //          Original Color => rgb 18, 18, 18

		// 		Ease into the new speed
		// 		var desiredSpeed = 0.012;
		// 		speed += (desiredSpeed - speed) * 0.01;
		// 		timer += speed;

		// 	} else {

		// 		Ease back to the original opacity
		// 		var originalOpacity = 1;
		// 		opacity += (originalOpacity - opacity) * 0.01;
		// 		context.fillStyle = "rgba(22, 26, 29, " + opacity + ")";

		// 		Ease back to the original speed
		// 		var originalSpeed = 0.001;
		// 		speed += (originalSpeed - speed) * 0.01;
		// 		timer += speed;


		// 	}

		// 	context.fillRect(0, 0, canvas.width, canvas.height);
		// 	context.translate(canvas.width / 2, canvas.height/2 );
		// 	context.rotate(timer);

		// 	for (var i = 0; i < lightParticles.length; i++) {
		// 		lightParticles[i].update();
		// 	}

		// 	context.restore();

			
		// }

		// var isMouseDown = false;

		// window.addEventListener("mousedown", function() {
		// 	isMouseDown = true;	
		// });
		

		// window.addEventListener("mouseup", function() {
		// 	isMouseDown = false;	
		// });

		// animate();
    }, []);


    return (
        <div className='homeView'>
            
            <canvas className='spiralCanvas' ref={canvasRef}></canvas>
        
            <p className='mainTxtBG' ref={titleRef}>Welcome</p>

            <div className='welcomeTxt-DetailsCntr'  >
                <div className='welcomeTxt' ref={welcomeTxtRef} >
                    <p>Hello,</p>
                    <p>I'm Mario</p>
                </div>
                <div className='homeViewDetails' ref={detailsTxtRef}>
                    <span className='detailsText'>
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "Front-End Developer",
                                3000,
                                "Web Developer",
                                3000,
                                "React Developer",
                                3000,
                                "Enthusiastic Dev",
                                3000,
                                "Full Stack Developer",
                                3000,
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