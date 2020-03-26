import React from 'react';
import './App.scss'
import Menu from './front-end/HEADERMENU/menu';
import AboutMe from './front-end/ABOUTME/aboutMe'
import Relationships from './front-end/RELATIONSHIPS/relationships'
import Users from './front-end/USERS/users'
import Signup from './front-end/SIGNUP/signup'

function App() {
  return (
    <div className="App">
      <Menu/>
      <AboutMe/>
      <Relationships/>
      <Users/>
      <Signup/>
    </div>
  );
}

export default App;
