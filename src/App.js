import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className='overflow-hidden'>
    <Navbar />
    <Home />
    <About />
    <SocialLinks />
    <Testimonials /> 
    <Footer />
    </div>
  );
}

export default App;
