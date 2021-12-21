import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

const App = () => {
    const [ nameInput, setNameInput ] = useState('');
    const [ emailInput, setEmailInput ] = useState('');
    const [ messageInput, setMessageInput ] = useState('');

    const onChange = (e) => {
      console.log(e.target);

      if (e.target.id === 'name') { setNameInput(e.target.value) };

      if (e.target.id === 'email') { setEmailInput(e.target.value) };

      if (e.target.id === 'message') { setMessageInput(e.target.value) }
    }

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_s96ceec', 'template_sbt77qu', e.target, 'user_ZnbEy3YQ1cqh19gURzYbS').then((result) => {
        alert('Email Sent.');
        window.location.reload();
      }, (err) => { alert(err.text) });
    }

    const useOnScreen = (options) => {
      const [ref, setRef] = useState(null);
      const [visible, setVisible] = useState(false);

      React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          // console.log(entry)
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
      root: null,
      threshold: 0,
      rootMargin: '-150px',
    }
    const [setHomeRef, homeViewVisible] = useOnScreen(options);
    const [setAboutRef, aboutViewVisible] = useOnScreen(options);
    const [setContactRef, contactViewVisible] = useOnScreen(options);
   

    // console.log(homeViewVisible)


    const homeViewActive = () => homeViewVisible ? ' active' : '';

    // console.log(aboutViewActive())
    // console.log(contactViewActive())
    // console.log(<AboutView />)

    return (
      <div className="container">
        <div className={'nav-bar' + homeViewActive()}>
          <a className={'mainLogo' + homeViewActive()} href='#home'>Mario Domenech</a>

          <div className='nav-barBtns'>
            <a className='aboutBtn' href='#about'>About</a>
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

        <ContactView setContactRef={setContactRef} sendEmail={sendEmail} contactViewVisible={contactViewVisible} onChange={onChange}/>
        
      </div>
    );
}

export default App;
