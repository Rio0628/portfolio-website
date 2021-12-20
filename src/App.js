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
   

    console.log(homeViewVisible)

    const homeViewActive = () => homeViewVisible ? ' active' : '';

    console.log(homeViewActive())
    return (
      <div className="container">
        <div className={'nav-bar' + homeViewActive()}>
          <p className={'mainLogo' + homeViewActive()}>Mario Domenech</p>

          <div className='nav-barBtns'>
            <p className='aboutBtn'>About</p>
            <p className='contactBtn'>Contact</p>
          </div>
        </div>

        <div className='homeView' ref={setHomeRef}>
          <div className='homeText'>
            <p className='nameText'>Mario Domenech</p>
            <p className='posText'>Front-end developer</p>
          </div>
        </div>

        <AboutView />

        <ContactView />
        
      </div>
    );
}

export default App;
