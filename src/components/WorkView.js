import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WorkView = (props) => {

    let prjct1RefBG = useRef(null), prjct2RefBG = useRef(null), prjct3RefBG = useRef(null), prjct4RefBG = useRef(null);

    let prjct1RefTXT = useRef(null), prjct2RefTXT = useRef(null), prjct3RefTXT = useRef(null), prjct4RefTXT = useRef(null);
    
    let prjct1Anims = gsap.timeline({ paused: true }), prjct2Anims = gsap.timeline({ paused: true }), prjct3Anims = gsap.timeline({ paused: true }), prjct4Anims = gsap.timeline({ paused: true });

    const projects = [
      { name: 'Book Finder', image: 'book', description: "React application using google's API to fetch information on books and allow the user to make CRUD operations with said books. The user is also able to add comments on each book and classify it to a certain category", techs: ['React', 'Express', 'REST API', 'API', 'MongoDB', 'Heroku'], seeLive: 'https://book-finder-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/book-finder', refBG: prjct1RefBG, refTXT: prjct1RefTXT, anim: prjct1Anims },

      { name: 'Tic Tac Toe', image: 'ticTacToe', description: "Simple React application that allows user to play against another user or against a CPU.Return to a past move within a game and choose which side to play as ", techs: ['React', 'Styled Components', 'Heroku'], seeLive: 'https://tic-tac-toe-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/tic-tac-toe',  refBG: prjct2RefBG, refTXT: prjct2RefTXT, anim: prjct2Anims },

      { name: 'Todo List', image: 'todoList', description: "Full-Stack CRUD application that uses React, Express, and MongoDB. Utilizing a fully functional REST API and that connects to the front end side of application allowing an user to create, edit, and delete objects from the database", techs: ['React', 'Express', 'REST API', 'Mongo DB', 'Heroku'], seeLive: 'https://todo-list-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/todo-list2.0',  refBG: prjct3RefBG, refTXT: prjct3RefTXT, anim: prjct3Anims },

      { name: 'Clock - Timer', image: 'clock', description: "Full-Stack CRUD application that uses React, Express, and MongoDB. Showcases time across different timezones, allows users to create sessions with different timer intervals, and save or delete sessions in database", techs: ['React', 'Express', 'REST API', 'Mongo DB', 'Heroku'], seeLive: 'https://clock-timer-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/clock-timer',  refBG: prjct4RefBG, refTXT: prjct4RefTXT, anim: prjct4Anims },
    ];
    
    
    useEffect( () => {

      prjct1Anims.to( prjct1RefBG.current, { opacity: 1, duration: .1 });
      prjct1Anims.to( prjct1RefTXT.current, { x: 0, duration: .1 });

      prjct2Anims.to( prjct2RefBG.current, { opacity: 1, duration: .1 });
      prjct2Anims.to( prjct2RefTXT.current, { x: 0, duration: .1 });

      prjct3Anims.to( prjct3RefBG.current, { opacity: 1, duration: .1 });
      prjct3Anims.to( prjct3RefTXT.current, { x: 0, duration: .1 });

      prjct4Anims.to( prjct4RefBG.current, { opacity: 1, duration: .1 });
      prjct4Anims.to( prjct4RefTXT.current, { x: 0, duration: .1 });
      
    }, [prjct1Anims, prjct2Anims, prjct3Anims, prjct4Anims]);
  
    // console.log(testAnim)

    return (
        <div className='workView'>
          <p className='mainTxtBG'>Projects</p>
          <div className='projectsCntr'>

            { projects.map( project => 
              <div className='indProject' onMouseEnter={() => project.anim.play()} onMouseLeave={ () => project.anim.reverse() }>
                <p className='projectTitle'>{project.name}</p>
  
                <div className='projectPixCntr'>
                  <div className='projectPixShade' ref={project.refBG}></div>
                  <div className={'projectPix ' + project.image} />
                </div>
  
                <div className='projectInfoCntr' ref={project.refTXT}>
                  <p className='projectInfo'>{project.description}</p>
  
                  <div className='projectTechsCntr'>
                    { project.techs.map( tech => <p className='projectTech'>{tech}</p>) }
                  </div>
  
                  <div className='projectBtnsCntr'>
                    <a className='porjectsBtn' id='seeAppLiveBtn' target='_blank' rel='noopener noreferrer' href={project.seeLive}>Live Demo</a>
                    <a className='porjectsBtn' id='videCodeBtn' target='_blank' rel='noopener noreferrer' href={project.seeCode}>View Code</a>
                  </div>
              
                </div>
              </div>
            )}
            
          </div>
  
        </div>
    );
}

export default WorkView;