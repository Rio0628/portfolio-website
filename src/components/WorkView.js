import React from 'react';
import { BsChevronCompactDown, BsChevronContract } from 'react-icons/bs'
import { BookFinder, TicTacToe, TimerLogo, TodoListLogo } from '../images'; 

const WorkView = (props) => {
    return (
        <div className='workView' id='work' ref={props.setWorkRef}>
            <p className={ props.workViewVisible ? 'workViewHeading active' : 'workViewHeading'}>Work - Projects</p>

            <div className={ props.workViewVisible ? 'projectsCntr active' : 'projectsCntr'}>
                <div className={ props.expandDropdown ? 'projectsPreviewCntr active' : 'projectsPreviewCntr'}>
                    <div className='indProject'>
                        <div className='projectImage todoList' src={BookFinder} alt='Project'></div>

                        <div className='imageHover'>
                            <p className='appName'>App Name</p>

                            <a className='visitAppBtn' href='#'>Visit App</a>

                            <div className='techUsedCntr'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>

                    <div className='indProject'>
                        <div className='projectImage bookFinder' alt='Project'></div>

                        <div className='imageHover'>
                            <p className='appName'>App Name</p>

                            <a className='visitAppBtn' href='#'>Visit App</a>

                            <div className='techUsedCntr'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='indProject'>
                        <div className='projectImage ticTacToe' alt='Project'></div>

                        <div className='imageHover'>
                            <p className='appName'>App Name</p>

                            <a className='visitAppBtn' href='#'>Visit App</a>

                            <div className='techUsedCntr'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>

                    <div className='indProject'>
                        <div className='projectImage timer' alt='Project'></div>

                        <div className='imageHover'>
                            <p className='appName'>App Name</p>

                            <a className='visitAppBtn' href='#'>Visit App</a>

                            <div className='techUsedCntr'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                  
                </div>

                {!props.expandDropdown ? 
                    <div className='expandCntrBtn' onClick={ () => props.setExpandDropdown(true) }><BsChevronCompactDown className='icon'/></div>
                : ''}

                {props.expandDropdown ? 
                    <div className='contractCntrBtn' onClick={ () => props.setExpandDropdown(false) }><BsChevronContract className='icon'/></div>
                : ''}
                
                {/*  */}
            </div>
        </div>
    );
}

export default WorkView;