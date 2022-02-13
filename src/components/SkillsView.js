import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { IoLogoCss3, IoLogoJavascript, IoLogoAngular, IoLogoNodejs, IoLogoLaravel, IoLogoPython, IoLogoNpm } from 'react-icons/io';
import { FaReact, FaLaravel, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiPhp, SiCplusplus, SiJava, SiTypescript, SiMongodb, SiMysql, SiThreedotjs, SiGraphql } from 'react-icons/si'; 
import { GrMysql } from 'react-icons/gr';

const SkillsView = () => {
    return (
        <div className='skillsView'>
            <p className='mainTxtBG'>Skills</p>
        
            <p className='skillsViewText'>
                I create intuitive and responsive web applications using a variety of techonologies. I specialize in Front End Development using different frameworks, implementing APIs, and creating animations to bring applications to life. I also have Full Stack Development experience creating backend servers and working with REST APIs.
            </p>

            <div className='allSkillsCntr'>
                <div className='frontEndSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Front-End</p>
                    <div className='skillsObjsCntr'>
                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><AiFillHtml5 className='logo' /></a>
                            <p className='techName'>HTML</p>
                        </div>

                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><IoLogoCss3 className='logo' /></a>
                            <p className='techName'>CSS</p>
                        </div>

                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><IoLogoJavascript className='logo'/></a>
                            <p className='techName'>Javascript</p>
                        </div>

                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><FaReact className='logo'/></a>
                            <p className='techName'>React</p>
                        </div>

                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><IoLogoAngular className='logo' /></a>
                            <p className='techName'>Angular</p>
                        </div>

                        <div className='techObj' id='frontEndObj'>
                            <a className='techLogo' href='/'><SiTypescript className='logo' /></a>
                            <p className='techName'>Typescript</p>
                        </div>
                    </div>
                </div>

                <div className='backEndSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Back-End</p>
                    <div className='skillsObjsCntr'>
                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><IoLogoNodejs className='logo' /></a>
                            <p className='techName'>Node</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><SiExpress className='logo' /></a>
                            <p className='techName'>Express</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><SiPhp className='logo'/></a>
                            <p className='techName'>PHP</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><FaLaravel className='logo'/></a>
                            <p className='techName'>Laravel</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><SiJava className='logo' /></a>
                            <p className='techName'>Java</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><SiCplusplus className='logo' /></a>
                            <p className='techName'>C++</p>
                        </div>

                        <div className='techObj' id='backEndObj'>
                            <a className='techLogo' href='/'><IoLogoPython className='logo' /></a>
                            <p className='techName'>Python</p>
                        </div>
                    </div>
                </div>
                 
                <div className='databasesSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Databases</p>
                    <div className='skillsObjsCntr'>
                        <div className='techObj' id='dbsObj'>
                            <a className='techLogo' href='/'><GrMysql className='logo' /></a>
                            <p className='techName'>SQL</p>
                        </div>

                        <div className='techObj' id='dbsObj'>
                            <a className='techLogo' href='/'><SiMysql className='logo' /></a>
                            <p className='techName'>My Sql</p>
                        </div>

                        <div className='techObj' id='dbsObj'>
                            <a className='techLogo' href='/'><SiMongodb className='logo'/></a>
                            <p className='techName'>Mongo DB</p>
                        </div>
                    </div>
                </div>

                <div className='toolsSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Tools</p>
                    <div className='skillsObjsCntr'>
                        <div className='techObj' id='toolsObj'>
                            <a className='techLogo' href='/'><BsGithub className='logo' /></a>
                            <p className='techName'>Github</p>
                        </div>

                        <div className='techObj' id='toolsObj'>
                            <a className='techLogo' href='/'><IoLogoNpm className='logo' /></a>
                            <p className='techName'>NPM</p>
                        </div>

                        <div className='techObj' id='toolsObj'>
                            <a className='techLogo' href='/'><FaGitAlt className='logo'/></a>
                            <p className='techName'>Git</p>
                        </div>
                    </div>
                </div>

                <div className='learningSkillsCntr'>
                    <p className='indSkillsCntrBgText'>Learning</p>
                    <div className='skillsObjsCntr'>
                        <div className='techObj' id='learningObj'>
                            <a className='techLogo' href='/'><SiThreedotjs className='logo' /></a>
                            <p className='techName'>Three JS</p>
                        </div>

                        <div className='techObj' id='learningObj'>
                            <a className='techLogo' href='/'><SiGraphql className='logo' /></a>
                            <p className='techName'>GraphQL</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SkillsView;