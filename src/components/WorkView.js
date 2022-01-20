import React from 'react';
import { BsChevronCompactDown, BsChevronContract } from 'react-icons/bs'
import IndProject from './IndProject'; 

const WorkView = (props) => {
    let indProjectsCntr = [];

    if (props.projects) {
        for (let i = 0; i < props.projects.length; i++) {
            indProjectsCntr.push( <IndProject project={props.projects[i]} />);
        }
    }

    // console.log(props.projects.length)

    return (
        <div className='workView' id='work' ref={props.setWorkRef}>
            <p className={ props.workViewVisible ? 'workViewHeading active' : 'workViewHeading'}>Work - Projects</p>

            <div className={ props.workViewVisible ? 'projectsCntr active' : 'projectsCntr'}>

                <div className={ props.expandDropdown ? 'projectsPreviewCntr active' : 'projectsPreviewCntr'}>
                    { indProjectsCntr }
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