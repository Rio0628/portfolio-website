import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// import API from './api';
import { HomeView, AboutView, WorkView, ContactView } from './components';
import { CgMenuGridR } from 'react-icons/cg';
import { FaRegWindowClose } from 'react-icons/fa';
import { gsap } from 'gsap';

export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      test: "HEllo"
    }
    this.navRef = null;
    this.navBtnRef = null;
    this.navLogoRef = null;
    this.navItemsRef = null;
    this.setNavRef = (el) => { this.navRef = el }
    this.setNavBtnRef = (el) => { this.navBtnRef = el }
    this.setNavLogoRef = (el) => { this.navLogoRef = el}
    this.setNavItemsRef = (el) => { this.navItemsRef = el }
    this.navAnims = gsap.timeline({ paused: true });
  }

  componentDidMount () {
    // console.log(this.navRef);
    // console.log(this.navBtnRef);
    // console.log(this.navLogoRef);
    // console.log(this.navItemsRef);
    this.navAnims.to(this.navRef, { opacity: 1, duration: 1, top: 0 });
    this.navAnims.to(this.navBtnRef, { opacity: 1, duration: .3 });
    this.navAnims.to(this.navLogoRef, { opacity: 1, duration: .3, right: 0});
    this.navAnims.to(this.navItemsRef, { opacity: 1, marginTop: 0, duration: .3, left: 0 });
    // test.play().timeScale(1)
  }

  testForFunction() {
    this.test.play();
  }

  testForAnimation() {
    this.test.reverse();
  }

  render () {

    return (
      <div className="container">
        <CgMenuGridR className='menuBtn' onClick={() => this.navAnims.play()} />

        <div className='nav' ref={this.setNavRef}>
          <div className='bgTitle'>NAV</div>

          <div className='closeNavBtn' ref={this.setNavBtnRef} onClick={() => this.navAnims.reverse()}><FaRegWindowClose className='icon'/></div>

          <p className='mainLogo' ref={this.setNavLogoRef}>Mario Domenech</p>

          <ul className='navItems' ref={this.setNavItemsRef}>
            <li className='homeItem'>Home</li>
            <li className='aboutItem'>About</li>
            <li className='skillsItem'>Skills</li>
            <li className='workItem'>Work</li>
            <li className='contactItem'>Contact</li>
          </ul>
        </div>
        
        <div className='mainContainer'>
          <HomeView />

          <AboutView />
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