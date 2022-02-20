import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { IoLogoCss3, IoLogoJavascript, IoLogoAngular, IoLogoNodejs, IoLogoLaravel, IoLogoPython, IoLogoNpm } from 'react-icons/io';
import { FaReact, FaLaravel, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiPhp, SiCplusplus, SiJava, SiTypescript, SiMongodb, SiMysql, SiThreedotjs, SiGraphql } from 'react-icons/si'; 
import { GrMysql } from 'react-icons/gr';
import './SkillsHoverEffects.css';

const SkillsView = () => {

    const technologies = [
        // FRONT END OBJECTS
        { name: 'HTML', icon: <AiFillHtml5 className='logo' />, techId: 'frontEndObj', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=fi'},
        { name: 'CSS', icon: <IoLogoCss3 className='logo' />, techId: 'frontEndObj', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        { name: 'Javascript', icon: <IoLogoJavascript className='logo' />, techId: 'frontEndObj', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        { name: 'React', icon: <FaReact className='logo' />, techId: 'frontEndObj', url: 'https://reactjs.org/'},
        { name: 'Angular', icon: <IoLogoAngular className='logo' />, techId: 'frontEndObj', url: 'https://angular.io/'},

        // BACK END OBJECTS
        { name: 'Node', icon: <IoLogoNodejs className='logo' />, techId: 'backEndObj', url: 'https://nodejs.org/en/'},
        { name: 'Express', icon: <SiExpress className='logo' />, techId: 'backEndObj', url: 'https://expressjs.com/'},
        { name: 'PHP', icon: <SiPhp className='logo' />, techId: 'backEndObj', url: 'https://www.php.net/'},
        { name: 'Laravel', icon: <FaLaravel className='logo' />, techId: 'backEndObj', url: 'https://laravel.com/'},
        { name: 'Java', icon: <SiJava className='logo' />, techId: 'backEndObj', url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html'},
        { name: 'C++', icon: <SiCplusplus className='logo' />, techId: 'backEndObj', url: 'https://www.cplusplus.com/'},
        { name: 'Python', icon: <IoLogoPython className='logo' />, techId: 'backEndObj', url: 'https://www.python.org/'},

        // DATABASE OBJECTS
        { name: 'SQL', icon: <GrMysql className='logo' />, techId: 'dbsObj', url: 'https://searchdatamanagement.techtarget.com/definition/SQL#:~:text=Structured%20Query%20Language%20(SQL)%20is,on%20the%20data%20in%20them.&text=SQL%20is%20used%20for%20the,deleting%20rows%20of%20data%3B%20and'},
        { name: 'My Sql', icon: <SiMysql className='logo' />, techId: 'dbsObj', url: 'https://www.mysql.com/'},
        { name: 'Monog DB', icon: <SiMongodb className='logo' />, techId: 'dbsObj', url: 'https://www.mongodb.com/'},
        
        // TOOLS OBJECTS
        { name: 'Github', icon: <BsGithub className='logo' />, techId: 'toolsObj', url: 'https://github.com/'},
        { name: 'NPM', icon: <IoLogoNpm className='logo' />, techId: 'toolsObj', url: 'https://www.npmjs.com/'},
        { name: 'Git', icon: <FaGitAlt className='logo' />, techId: 'toolsObj', url: 'https://git-scm.com/'},
        
        // LEARNING OBJECTS
        { name: 'Three JS', icon: <SiThreedotjs className='logo' />, techId: 'learningObj', url: 'https://threejs.org/'},
        { name: 'GraphQL', icon: <SiGraphql className='logo' />, techId: 'learningObj', url: 'https://graphql.org/'},
    ];

    console.log(technologies.filter(tech => tech.techId === 'frontEndObj').map(tech => tech))

    return (
        <div className='skillsView'>
            <p className='mainTxtBG'>Skills</p>
            <p className='largeTtlBG'>Skills</p>
        
            <p className='skillsViewText'>
                I create intuitive and responsive web applications using a variety of techonologies. I specialize in Front End Development using different frameworks, implementing APIs, and creating animations to bring applications to life. I also have Full Stack Development experience creating backend servers and working with REST APIs.
            </p>

            <div className='allSkillsCntr'>
                <div className='frontEndSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Front-End</p>
                    <div className='skillsObjsCntr'>
                        { technologies.filter(tech => tech.techId === 'frontEndObj').map(tech => 
                            <a className='techObj' id='frontEndObj' target='_blank' rel='noopener noreferrer' href={tech.url} key={tech.name}>
                                {tech.icon}
                                <p className='techName'>{tech.name}</p>
                            </a>
                        ) }
                    </div>
                </div>

                <div className='backEndSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Back-End</p>
                    <div className='skillsObjsCntr'>
                        { technologies.filter(tech => tech.techId === 'backEndObj').map(tech => 
                            <a className='techObj' id='backEndObj' target='_blank' rel='noopener noreferrer' href={tech.url} key={tech.name}>
                                {tech.icon}
                                <p className='techName'>{tech.name}</p>
                            </a>
                        ) }
                    </div>
                </div>
                 
                <div className='databasesSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Databases</p>
                    <div className='skillsObjsCntr'>
                        { technologies.filter(tech => tech.techId === 'dbsObj').map(tech => 
                            <a className='techObj' id='dbsObj' target='_blank' rel='noopener noreferrer' href={tech.url} key={tech.name}>
                                {tech.icon}
                                <p className='techName'>{tech.name}</p>
                            </a>
                        ) }
                    </div>
                </div>

                <div className='toolsSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Tools</p>
                    <div className='skillsObjsCntr'>
                        { technologies.filter(tech => tech.techId === 'toolsObj').map(tech => 
                            <a className='techObj' id='toolsObj' target='_blank' rel='noopener noreferrer' href={tech.url} key={tech.name}>
                                {tech.icon}
                                <p className='techName'>{tech.name}</p>
                            </a>
                        ) }
                    </div>
                </div>

                <div className='learningSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Learning</p>
                    <div className='skillsObjsCntr'>
                        { technologies.filter(tech => tech.techId === 'learningObj').map(tech => 
                            <a className='techObj' id='learningObj' target='_blank' rel='noopener noreferrer' href={tech.url} key={tech.name}>
                                {tech.icon}
                                <p className='techName'>{tech.name}</p>
                            </a>
                        ) }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SkillsView;