import React, { Component } from 'react';


export default class App extends Component {
  
  render () {
    return (
      <div className="container">
        <div className='nav-bar'>
          <p className='logo'>Mario Domenech</p>

          <div className='nav-barBtns'>
            <p className='aboutBtn'>About</p>
            <p className='contactBtn'>Contact</p>
          </div>
        </div>

        <div className='homeView'>
          <p className='homeText'>
            <p className='nameText'>Mario Domenech</p>
            <p className='posText'>Front-end developer</p>
          </p>
        </div>
      </div>
    );
  };
}

// export default App;
