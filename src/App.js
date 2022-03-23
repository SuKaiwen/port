// CSS imports
import './App.css';
import './CSS/Global.css';
import './CSS/Landing.css';
import './CSS/About.css';
import './CSS/Projects.css';

import Landing from './Pages/Landing';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
