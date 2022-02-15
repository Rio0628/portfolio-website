import React from 'react';
import { BookFinder, TicTacToe, TodoListLogo, TimerLogo } from '../images/'

const WorkView = (props) => {

    const projects = [
      { name: 'Book Finder', image: 'book', description: "React application using google's API to fetch information on books and allow the user to make CRUD operations with said books. The user is also able to add comments on each book and classify it to a certain category", techs: ['React', 'Express', 'REST API', 
      'API', 'MongoDB', 'Heroku'], seeLive: 'https://book-finder-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/book-finder' },

      { name: 'Tic Tac Toe', image: 'ticTacToe', description: "Simple React application that allows user to play against another user or against a CPU.Return to a past move within a game and choose which side to play as ", techs: ['React', 'Styled Components', 'Heroku'], seeLive: 'https://tic-tac-toe-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/tic-tac-toe' },

      { name: 'Todo List', image: 'todoList', description: "Full-Stack CRUD application that uses React, Express, and MongoDB. Utilizing a fully functional REST API and that connects to the front end side of application allowing an user to create, edit, and delete objects from the database", techs: ['React', 'Express', 'REST API', 'MONGO DB', 'Heroku'], seeLive: 'https://todo-list-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/todo-list2.0' },

      { name: 'Clock - Timer', image: 'clock', description: "Full-Stack CRUD application that uses React, Express, and MongoDB. Showcases time across different timezones, allows users to create sessions with different timer intervals, and save or delete sessions in database", techs: ['React', 'Express', 'REST API', 'MONGO DB', 'Heroku'], seeLive: 'https://clock-timer-mario-domenech.herokuapp.com/', seeCode: 'https://github.com/Rio0628/clock-timer' },
    ];
    return (
        <div className='workView'>
          <p className='mainTxtBG'>Projects</p>
          <div className='projectsCntr'>

            { projects.map( project => 
              <div className='indProject'>
                <p className='projectTitle'>{project.name}</p>
  
                <div className='projectPixCntr'>
                  <div className='projectPixShade'></div>
                  <div className={'projectPix ' + project.image} />
                </div>
  
                <div className='projectInfoCntr'>
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