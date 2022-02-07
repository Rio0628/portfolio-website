import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// import API from './api';
import { HomeView, AboutView, WorkView, ContactView } from './components';
import { CgMenuGridR } from 'react-icons/cg';
import { FaRegWindowClose } from 'react-icons/fa';

export default class App extends Component {  
  render () {
    return (
      <div className="container">
        <CgMenuGridR className='menuBtn' />

        {/* <div className='nav'>
          <FaRegWindowClose className='closeNavBtn'/>

          <p className='mainLogo'>Mario Domenech</p>

          <ul className='navItems'>
            <li className='homeItem'>Home</li>
            <li className='aboutItem'>About</li>
            <li className='skillsItem'>Skills</li>
            <li className='workItem'>Work</li>
            <li className='contactItem'>Contact</li>
          </ul>
        </div> */}
        
        <div className='mainContainer'>
          <HomeView />
        </div>

      </div>
    );
  }
}

// const [ expandDropdown, setExpandDropdown ] = useState(false);
    // const [ projects, setProjects ] = useState();
    
    // useEffect( () => {
    //   const getProjects = async () => {
    //     let projects;
    //     await API.getAllProjects().then( indProjects => projects = indProjects.data.data )
    
    //     setProjects(projects)
    //   }
    //   getProjects();
    // }, []);

    // const sendEmail = (e) => {
    //   // Send the email message that the user creates to maker's main email.  
    //   e.preventDefault();

    //   emailjs.sendForm('service_s96ceec', 'template_sbt77qu', e.target, 'user_ZnbEy3YQ1cqh19gURzYbS').then((result) => {
    //     alert('Email Sent.');
    //     window.location.reload();
    //   }, (err) => { alert(err.text) });
    // }

    // const useOnScreen = (options) => {
      // Function to create a new intersection obsverer on a certain element
      // Will trigger true if the element is within view 
    //   const [ref, setRef] = useState(null);
    //   const [visible, setVisible] = useState(false);

    //   React.useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //       setVisible(entry.isIntersecting);
    //     }, options)

    //     if (ref) { observer.observe(ref); }

    //     return () => {
    //       if (ref) { observer.unobserve(ref); }
    //     };
    //   }, [ref, options] );
    
    //   return [setRef, visible];
    // }

    // const options = {
    //   root: null,
    //   threshold: 0,
    //   rootMargin: '-150px',
    // }
  
    // Will set a new intersection observer for each of the view in the website. 
    // const [setHomeRef, homeViewVisible] = useOnScreen(options);
    // const [setAboutRef, aboutViewVisible] = useOnScreen(options);
    // const [setWorkRef, workViewVisible] = useOnScreen(options);
    // const [setContactRef, contactViewVisible] = useOnScreen(options);

    // Will trigger the animations in the home view once it is within the viewport 
    // const homeViewActive = () => homeViewVisible ? ' active' : '';