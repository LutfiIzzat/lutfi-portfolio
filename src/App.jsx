import './App.css'

import { Contact, Experience, Hero, Portfolio, Intro, NavBar } from './components'

function App() {
  return (
    <div>
      <NavBar />

      <div id="hero">
        <Hero />
      </div>

      <div id="introduction">
        <Intro />
      </div>

      <div id="projects">
        <Portfolio />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
