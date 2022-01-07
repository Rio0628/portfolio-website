import React from 'react';
import { BsChevronCompactDown, BsChevronContract } from 'react-icons/bs'

const WorkView = () => {
    return (
        <div className='workView' id='work'>
            <p className={'workViewHeading'}>Work - Projects</p>

            <div className='projectsCntr'>
                <div className='projectsPreviewCntr'>
                
                </div>

                <div className='expandCntrBtn'><BsChevronCompactDown className='icon'/></div>

                <div className='contractCntrBtn'><BsChevronContract className='icon'/></div>
            </div>
        </div>
    );
}

export default WorkView;