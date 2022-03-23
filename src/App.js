// CSS imports
import './App.css';
import './CSS/Global.css';
import './CSS/Landing.css';
import './CSS/About.css';
import './CSS/Projects.css';
import './CSS/Contact.css';

import Landing from './Pages/Landing';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
