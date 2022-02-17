import React, { useEffect, useRef } from 'react';

const ContactView = (props) => {

    let canvasRef = useRef(null);
        
    useEffect( () => {

        let canW = parseInt(canvasRef.current.getAttribute('width')), 
            canH = parseInt(canvasRef.current.getAttribute('height')),
            context = canvasRef.current.getContext('2d');
        
        let ballNUM = 30;

        let ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, alpha: 1, phase: 0},
            ballColor = { r: 207, g: 255, b: 4 },
            R = 2, 
            balls = [],
            alpha_f = 0.03,
            alpha_phase = 0, 

            // Line
            link_line_width = 0.8,
            dis_limit = 260,
            add_mouse_point = true,
            mouse_in = false,
            mouse_ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };

        const getRandomSpeed = (pos) => {
            let min = -1,
                max = 1;

            switch(pos) {
                case 'top': 
                    return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
                    break;
                case 'right':
                    return [randomNumFrom(min, -.1), randomNumFrom(min, max)];
                    break;
                case 'bottom':
                    return [randomNumFrom(min, max), randomNumFrom(min, -.1)];
                    break;
                case 'left':
                    return [randomNumFrom(.1, max), randomNumFrom(min, max)];
                    break;
                default:
                    return;
                    break;
            }
        }

        const randomArrayItem = (arr) => {
            return arr[Math.floor(Math.random() * arr.lenght)];
        }

        const randomNumFrom = (min, max) => {
            return Math.random()*(max - min) + min;
        }

        console.log(randomNumFrom(0, 10));

        const getRandomBall = () => {
            let pos = randomArrayItem(['top', 'right', 'bottom', 'left']);

            switch(pos) {
                case 'top':
                    return { x: randomSidePos(canW), y: -R, vx: getRandomSpeed('top')[0], vy: getRandomSpeed('top')[1], r: R, alpha: 1, phase: randomNumFrom(0, 10) }
                    break;

                case 'right':
                    return { x: canW + R, y: randomSidePos(canH), vx: getRandomSpeed('right')[0], vy: getRandomSpeed('right')[1], r: R, alpha: 1, phase: randomNumFrom(0, 10) }
                    break;

                case 'bottom':
                    return { x: randomSidePos(canW), y: canH + R, vx: getRandomSpeed('bottom')[0], vy: getRandomSpeed('bottom')[1], r: R, alpha: 1, phase: randomNumFrom(0, 10) }
                    break;

                case 'left':
                    return { x: -R, y: randomSidePos(canH), vx: getRandomSpeed('left')[0], vy: getRandomSpeed('left')[1], r: R, alpha: 1, phase: randomNumFrom(0, 10) }
                    break;
            }
        }

        const randomSidePos = (length) => Math.ceil(Math.random() * length);
        
        // Generate Ball
        const renderBalls = () => {
            Array.prototype.forEach.call(balls, function(b) {
                if (!b.hasOwnProperty('type')) {
                    context.fillStyle = 'rgba(' + ballColor.r + ',' + ballColor.g + ',' + ballColor.b + ',' + b.alpha + ')';
                    context.beginPath();
                    context.arc(b.x, b.y, R, 0, Math.PI*2, true);
                    context.closePath();
                    context.fill();
                }
            });
        }

        // Update Balls
        const updateBalls = () => {
            let new_balls = [];
            Array.prototype.forEach.call(balls, function(b) {
                b.x += b.vx;
                b.y += b.vy;

                if (b.x > -(50) && b.x < (canW + 50) && b.y > -(50) && b.y < (canH + 50)) { new_balls.push(b); }

                // Alpha Change
                b.phase += alpha_f;
                b.alpha = Math.abs(Math.cos(b.phase));
            })

            balls = new_balls.slice(0);
        }

        // Loop Alpha
        const loopAlphaInf = () => { }

        // Render Lines
        const renderLines = () => {
            let fraction, alpha;
            for (let i = 0; i < balls.lenght; i++) {
                for (let j = i + 1; j < balls.lenght; j++) {
                    fraction = getDisOf(balls[i], balls[j]) / dis_limit;

                    if (fraction < 1) {
                        alpha = (1 - fraction).toString();

                        context.strokeStyle = 'rgba(150, 150, 150 ' + alpha +')';
                        context.lineWidth = link_line_width;
                        context.beginPath();
                        context.moveTo(balls[i].x, balls[i].y);
                        context.lineTo(balls[j].x, balls[j].y);
                        context.stroke();
                        context.closePath();
                    }
                }
            }
        }

        // Caculate distance between two points
        const getDisOf = (b1, b2) => {
            let deltaX = Math.abs(b1.x - b2.x),
                deltaY = Math.abs(b1.y - b2.x);
            
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }

        //  Add balls if little balls are present
        const addBallsIfY = () => balls.length < ballNUM ? balls.push(getRandomBall()) : null ;

        // Render
        const render = () => {
            context.clearRect(0, 0, canW, canH);
            renderBalls();
            renderLines();
            updateBalls();
            addBallsIfY();
            window.requestAnimationFrame(render);
        }

        // Init Balls 
        const initBalls = (num) => {
            for (let i = 1; i <= num; i++) {
                balls.push({ x:randomSidePos(canW), y: randomSidePos(canH), vx: getRandomSpeed('top')[0], vy: getRandomSpeed('top')[1], r: R, alpha: 1, phase: randomNumFrom(0, 10) });
            }
        }

        const initCanvas = () => {
            canvasRef.current.getAttribute('width', window.innerWidth);
            canvasRef.current.getAttribute('height', window.innerHeight);

            canW = parseInt(canvasRef.current.getAttribute('width'));
            canH = parseInt(canvasRef.current.getAttribute('height'));
        }

        window.addEventListener('resize', function(e) {
            console.log('Window Resize!')
            initCanvas(); 
        })

        const goMovie = () => {
            initCanvas();
            initBalls(ballNUM);
            window.requestAnimationFrame(render);
        }
        goMovie();

        // Mouse Effect
        canvasRef.current.addEventListener('mouseenter', function() {
            console.log('mouseEnter')
            mouse_in = true;
            balls.push(mouse_ball);
        });

        canvasRef.current.addEventListener('mouseleave', function() {
            console.log('mouseLeave');
            mouse_in = false;
            let new_balls = [];
            Array.prototype.forEach.call(balls, function(b) {
                if (!b.hasOwnProperty('type')) {
                    new_balls.push(b);
                }
            });
            balls = new_balls.slice(0);
        })

        canvasRef.current.addEventListener('mousemove', function(e) {
            let evt = e || window.event;
            mouse_ball.x = evt.pageX;
            mouse_ball.y = evt.pageY;
        })
        
    }, []);

    return (
        <div className='contactView' id='contact' ref={props.setContactRef}>
            <canvas className='bgCanvas' width='800' height='800' ref={canvasRef}>Your Browser Does Not Support Canva, Please Update Browser or Download Chrome</canvas>
            
            <p className='mainTxtBG'>Contact</p>

            <form className='inputFieldsCntr' onSubmit={props.sendEmail}>
                <input className='inputName' id='name' placeholder='Name' type='text' name='from_name' onChange={props.onChange}/>

                <input className='inputEmail' id='email' placeholder='Email Address' type='email' name='from_email' onChange={props.onChange}/>
                
                <textarea className='inputMessage' id='message' name='message' placeholder='Message' type='text' onChange={props.onChange}/>
    
                <input type='submit' className='submitBtn'></input>
            </form>
        </div>
    );
}

export default ContactView;