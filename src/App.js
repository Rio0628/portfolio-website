import React, { useEffect, useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import API from './api';
import { HomeView, AboutView, SkillsView, WorkView, ContactView } from './components';
import { CgMenuGridR } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {  
  let revealRefs = useRef([]);
  let navRef = useRef(null);
  let navBtnRef = useRef(null);
  let navLogoRef = useRef(null);
  let navItemsRef = useRef(null);
  let navAnims = gsap.timeline({ paused: true });


  useEffect( () => {

    navAnims.to(navRef.current, { opacity: 1, duration: 1, top: 0 });
    navAnims.to(navBtnRef.current, { opacity: 1, duration: .3 });
    navAnims.to(navLogoRef.current, { opacity: 1, duration: .3, right: 0});
    navAnims.to(navItemsRef.current, { opacity: 1, marginTop: 0, duration: .3, left: 0 });
    // test.play().timeScale(1)

  }, [navAnims, navBtnRef, navItemsRef, navLogoRef, navRef]);

  const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
      console.log(revealRefs.current)
  }

  const useOnScreen = (options) => {
    // Function to create a new intersection obsverer on a certain element
    // Will trigger true if the element is within view 
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options)

      if (ref) { observer.observe(ref); }

      return () => {
        if (ref) { observer.unobserve(ref); }
      };
    }, [ref, options] );
  
    return [setRef, visible];
  }

  const options = {
    // Main options for intersectionObserver functioning
    root: null,
    threshold: 0,
    rootMargin: '-350px',
  }

  // Will set a new intersection observer for each of the view in the website. 
  const [setSkillsRef, skillsViewVisible] = useOnScreen(options);
  const [setAboutRef, aboutViewVisible] = useOnScreen(options);
  const [setWorkRef, workViewVisible] = useOnScreen(options);
  const [setContactRef, contactViewVisible] = useOnScreen(options);

  console.log(skillsViewVisible, aboutViewVisible, workViewVisible, contactViewVisible)

  return (
    <div className="container">
      <CgMenuGridR className='menuBtn' onClick={() => navAnims.play()} />

      <div className='nav' ref={navRef}>
        <div className='bgTitle'>
          <p>N</p>
          <p>A</p>
          <p>V</p>
        </div>

        <div className='closeNavBtn' ref={navBtnRef} onClick={() => navAnims.reverse()}><RiCloseLine className='icon'/></div>

        <p className='mainLogo' ref={navLogoRef}>Mario Domenech</p>

        <ul className='navItems' ref={navItemsRef}>
          <li className='homeItem'>Home</li>
          <li className='aboutItem'>About</li>
          <li className='skillsItem'>Skills</li>
          <li className='workItem'>Work</li>
          <li className='contactItem'>Contact</li>
        </ul>
      </div>
      
      <div className='mainContainer'>
        <HomeView />

        <AboutView setAboutRef={setAboutRef} aboutViewVisible={aboutViewVisible}/>

        <SkillsView setSkillsRef={setSkillsRef}/>

        <WorkView setWorkRef={setWorkRef} />

        <ContactView setContactRef={setContactRef} />
      </div>

    </div>
  );
}

export default App;

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