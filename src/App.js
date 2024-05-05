import React from 'react';
import './App.css';
import cosmos from './assets/cosmos-app.png';
import chatbot from './assets/chatbot.png';
import giphy from './assets/giphy.png';
function App() {
  return (
    <div className="App">
      <nav>
      <ul id="navbar">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </nav>
    <div id="welcome-section" className="intro">

  <h1>Hey I'm Ema.</h1>
  <p>a junior developer</p>
    </div>
    <div id="projects" className="work">
      <h2 className="work-header">This are some of my projects </h2>
    <a href="https://cosmos-app-zeta.vercel.app/" rel="noreferrer" target="_blank" className="project project-title">
        <img className="project-pic" src={cosmos} alt="project"/>
        <div className="project-title">Cosmos App</div>
      </a>
     <a href="https://indreptar-chat-bot.vercel.app/" className="project project-title" rel="noreferrer" target="_blank">
         <img className="project-pic" src={chatbot} alt="project"/>
       <div className="project-title">Chatbot interactiv</div>
      </a>
       <a href="https://codepen.io/ema-pop/pen/zJeWmq" rel="noreferrer" target="_blank" className="project project-tile">
    <img className="project-pic" src={giphy} alt="project"/>
    <div className="project-title">Giphy app</div>
  </a>
    </div>
    <div id="contact" className="contact">
  <div className="header">
    <h1>
      Contacts
    </h1>
    <p>Have a nice day!</p>
  </div>
  <a  id="profile-link" href="https://github.com/emapop" className="contact-details" rel="noreferrer" target="_blank" >GitHub</a>
      <a href="mail to:ematabita14@gmail.com" className="contact-details">Mail</a>
      </div>
    </div>
  );
}

export default App;
