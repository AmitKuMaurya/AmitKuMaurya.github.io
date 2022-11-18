
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Stats from './Components/gitStats/Stats';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import TechStack from './Components/techStack/techStack';

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <About/>
      <TechStack/>
      <Stats/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
