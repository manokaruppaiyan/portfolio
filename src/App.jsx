import './App.css'
import About from './component/About';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';


function App() {
  return (
      <div className="dark:bg-gray-900 dark:text-gray-300">
          <Navbar/>
          <Home/>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        <Footer />
      </div>
  );
}

export default App;
