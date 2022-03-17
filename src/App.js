import React, { useEffect, useRef, useState } from 'react';
import { HomeView, AboutView, SkillsView, WorkView, ContactView } from './components';
import { CgMenuGridR } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {  
  let navRef = useRef(null);
  let navBtnRef = useRef(null);
  let navLogoRef = useRef(null);
  let navItemsRef = useRef(null);
  let navAnims = gsap.timeline({ paused: true });


  useEffect( () => {

    navAnims.to(navRef.current, { opacity: 1, duration: .8, top: 0 });
    navAnims.to(navBtnRef.current, { opacity: 1, duration: .3 });
    navAnims.to(navLogoRef.current, { opacity: 1, duration: .3, right: 0});
    navAnims.to(navItemsRef.current, { opacity: 1, marginTop: 0, duration: .3, left: 0 });

  }, [navAnims, navBtnRef, navItemsRef, navLogoRef, navRef]);

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
    rootMargin: '-50%',
  }

  // Will set a new intersection observer for each of the view in the website. 

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
          <a className='homeItem' href='#home' onClick={() => navAnims.reverse()}>Home</a>
          <a className='aboutItem' href='#about' onClick={() => navAnims.reverse()}>About</a>
          <a className='skillsItem' href='#skills' onClick={() => navAnims.reverse()}>Skills</a>
          <a className='workItem' href='#work' onClick={() => navAnims.reverse()}>Work</a>
          <a className='contactItem' href='#contact' onClick={() => navAnims.reverse()}>Contact</a>
          <a className='resumeItem' href='https://drive.google.com/file/d/1GTt9QY0V1jlKI5MW_HzqZfIujP__DnZJ/view?usp=sharing' target='_blank' rel='noopener noreferrer' onClick={() => navAnims.reverse()}>Resume</a>
        </ul>
      </div>
      
      <div className='mainContainer' >
        <div className='top' id='home'></div>

        <HomeView />

        <AboutView useOnScreen={useOnScreen} options={options} />

        <SkillsView useOnScreen={useOnScreen} options={options} />

        <WorkView useOnScreen={useOnScreen} options={options} />

        <ContactView useOnScreen={useOnScreen} options={options} />
      </div>

    </div>
  );
}

export default App;