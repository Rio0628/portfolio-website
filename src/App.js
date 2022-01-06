import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import WorkView from './components/WorkView';

const App = () => {
    

    const sendEmail = (e) => {
      // Send the email message that the user creates to maker's main email.  
      e.preventDefault();

      emailjs.sendForm('service_s96ceec', 'template_sbt77qu', e.target, 'user_ZnbEy3YQ1cqh19gURzYbS').then((result) => {
        alert('Email Sent.');
        window.location.reload();
      }, (err) => { alert(err.text) });
    }

    const useOnScreen = (options) => {
      // Function to create a new intersection obsverer on a certain element
      // Will trigger true if the element is within view 
      const [ref, setRef] = useState(null);
      const [visible, setVisible] = useState(false);

      React.useEffect(() => {
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
      rootMargin: '-150px',
    }
  
    // Will set a new intersection observer for each of the view in the website. 
    const [setHomeRef, homeViewVisible] = useOnScreen(options);
    const [setAboutRef, aboutViewVisible] = useOnScreen(options);
    const [setContactRef, contactViewVisible] = useOnScreen(options);
  

    // Will trigger the animations in the home view once it is within the viewport 
    const homeViewActive = () => homeViewVisible ? ' active' : '';

    return (
      <div className="container">
        <div className={'nav-bar' + homeViewActive()}>
          <a className={'mainLogo' + homeViewActive()} href='#home'>Mario Domenech</a>

          <div className='nav-barBtns'>
            <a className='aboutBtn' href='#about'>About</a>
            <a className='workBtn' href='#work'>Work</a>
            <a className='contactBtn' href='#contact'>Contact</a>
          </div>
        </div>

        <div className='homeView' id='home' ref={setHomeRef}>
          <div className={'homeText ' + homeViewActive()}>
            <p className='nameText'>Mario Domenech</p>
            <p className='posText'>Front-end developer</p>
          </div>
        </div>

        <AboutView setAboutRef={setAboutRef} aboutViewVisible={aboutViewVisible}/>

        <WorkView />

        <ContactView setContactRef={setContactRef} sendEmail={sendEmail} contactViewVisible={contactViewVisible}/>
        
      </div>
    );
}

export default App;
