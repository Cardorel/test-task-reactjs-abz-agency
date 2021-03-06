import React from 'react';
import './App.scss'
import Menu from './front-end/HEADERMENU/menu';
import AboutMe from './front-end/ABOUTME/aboutMe'
import Relationships from './front-end/RELATIONSHIPS/relationships'
import Users from './front-end/USERS/users'
import Signup from './front-end/SIGNUP/signup'
import Footer from './front-end/FOOTER/footer';

function App() {
  return (
    <scroll-container className="App">
      <main>
        <Menu />
      </main>
      <nav>
        <AboutMe />
        <Relationships />
        <Users />
        <Signup />
      </nav>
      <footer>
        <Footer />
      </footer>
    </scroll-container>
  );
}

export default App;
