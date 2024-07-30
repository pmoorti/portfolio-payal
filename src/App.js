import NavBar from "./components/NavBar.js";
import Intro from './components/intro/intro.js';
import About from './components/about/about.js';
import Skills from './components/skills/skills.js';
import Projects from './components/projects/projects.js';
import Contact from './components/contact/contact.js';
import Footer from'./components/footer/footer.js';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
