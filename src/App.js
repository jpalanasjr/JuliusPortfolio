
import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      
       <Navbar />
       <Intro />
       <Experience />
       <Education />
       <Skills />
       <Contact /> 
       <Footer />
    </div>
  );
}

export default App;
