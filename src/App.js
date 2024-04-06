import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About';
import Services from './components/services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
      <Services /> 
      <Testimonials /> 
    <Footer />
    </div>
  );
}

export default App;
