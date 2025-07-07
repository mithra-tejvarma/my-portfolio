
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './header';
import Home from './home';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
   <>
   <div className="header-wrapper">
   <Header />
   <Navbar />
   </div>
   <Home />
   {/* Sample sections for navigation */}
    <About />
    <Skills />

   <Projects />
   <Contact />
  
   </>
   
  );
}

export default App;
