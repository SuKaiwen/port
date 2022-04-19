// CSS imports
import './App.css';
import './CSS/Global.css';
import './CSS/Landing.css';
import './CSS/About.css';
import './CSS/Projects.css';
import './CSS/Contact.css';
import './CSS/Nav.css';
import './CSS/Firebry.css';

import Landing from './Pages/Landing';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import ContactIcon from './Components/ContactIcon';

function App() {
  return (
    <div className="App">
      <ContactIcon />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
