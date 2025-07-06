
import './App.css';
import Header from './header';
import Navbar from './Navbar';

function App() {
  return (
   <>
   <div className="header-wrapper">
   <Header />
   <Navbar />
   </div>
   {/* Sample sections for navigation */}
   <section id="home" style={{ height: '100vh', padding: '2rem', backgroundColor: '#f8f9fa' }}>
     <h1>Home Section</h1>
     <p>Welcome to my portfolio!</p>
   </section>
   
   <section id="about" style={{ height: '100vh', padding: '2rem', backgroundColor: '#e9ecef' }}>
     <h1>About Section</h1>
     <p>Learn more about me here.</p>
   </section>
   
   <section id="skills" style={{ height: '100vh', padding: '2rem', backgroundColor: '#dee2e6' }}>
     <h1>Skills Section</h1>
     <p>My technical skills and expertise.</p>
   </section>
   
   <section id="projects" style={{ height: '100vh', padding: '2rem', backgroundColor: '#ced4da' }}>
     <h1>Projects Section</h1>
     <p>Check out my latest projects.</p>
   </section>
   
   <section id="contact" style={{ height: '100vh', padding: '2rem', backgroundColor: '#adb5bd' }}>
     <h1>Contact Section</h1>
     <p>Get in touch with me.</p>
   </section>
   </>
   
  );
}

export default App;
