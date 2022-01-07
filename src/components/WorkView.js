import React from 'react';
import { BsChevronCompactDown, BsChevronContract } from 'react-icons/bs'

const WorkView = () => {
    return (
        <div className='workView' id='work'>
            <p className={'workViewHeading'}>Work - Projects</p>

            <div className='projectsCntr'>
                <div className='projectsPreviewCntr'>
                    <div className='indProject'>
                        <img className='projectImage' src='../favicon.ico' alt='Project'></img>

                        <div className='imageHover'>
                            <p className='appName'>App Name</p>

                            <a className='visitAppBtn'>Visit App</a>

                            <div className='techUsedCntr'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JS</p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='expandCntrBtn'><BsChevronCompactDown className='icon'/></div>

                <div className='contractCntrBtn'><BsChevronContract className='icon'/></div>
            </div>
        </div>
    );
}

export default WorkView;