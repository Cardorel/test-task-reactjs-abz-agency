import React from 'react';
import './App.scss'
import Menu from './front-end/HEADERMENU/menu';
import AboutMe from './front-end/ABOUTME/aboutMe'
import Relationships from './front-end/RELATIONSHIPS/relationships'

function App() {
  return (
    <div className="App">
      <Menu/>
      <AboutMe/>
      <Relationships/>
    </div>
  );
}

export default App;
