import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className='overflow-hidden'>
    <Navbar />
    <Home />
    <About />
    <Testimonials /> 
    <Footer />
    </div>
  );
}

export default App;
