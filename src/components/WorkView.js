import React from 'react';
import { BsChevronCompactDown, BsChevronContract } from 'react-icons/bs'

const WorkView = (props) => {
    return (
        <div className='workView' id='work' ref={props.setWorkRef}>
            <p className={ props.workViewVisible ? 'workViewHeading active' : 'workViewHeading'}>Work - Projects</p>

            <div className={ props.workViewVisible ? 'projectsCntr active' : 'projectsCntr'}>
                <div className={ props.expandDropdown ? 'projectsPreviewCntr active' : 'projectsPreviewCntr'}>
                    <div className='indProject'>
                        <img className='projectImage' src='../favicon.ico' alt='Project'></img>

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
                        <img className='projectImage' src='../favicon.ico' alt='Project'></img>

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
                        <img className='projectImage' src='../favicon.ico' alt='Project'></img>

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
                        <img className='projectImage' src='../favicon.ico' alt='Project'></img>

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