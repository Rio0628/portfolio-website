import React, { useState } from 'react';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

const App = () => {
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

        <ContactView setContactRef={setContactRef} contactViewVisible={contactViewVisible}/>
        
      </div>
    );
}

export default App;
