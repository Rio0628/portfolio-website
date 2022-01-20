import React from 'react';

const IndProject = (props) => {
    let techsCntr = [];
    
    // For statement to bring all technologies of a project into view
    for (let i = 0; i < props.project.technologies.length; i++ ) {
        techsCntr.push( <p key={'tech' + i}>{props.project.technologies[i]}</p> );
    }

    return (
        <div className='indProject'>
            <div className={`projectImage ${props.project.image}`} alt='Project'></div>

            <div className='imageHover'>
                <p className='appName'>{props.project.name}</p>

                <a className='visitAppBtn' target='_blank' rel='noopener noreferrer' href={props.project.url}>Visit App</a>

                <div className='techUsedCntr'>
                    { techsCntr }
                </div>
            </div>
        </div>
    );
}

export default IndProject;