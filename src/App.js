import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
{/* <div class="collapse navbar-collapse" id="navbar-menu">
	<ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
		<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
		<li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
		<li class="dropdown">
			<Link href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</Link>
			<ul class="dropdown-menu">
				  <li><Link to="/">Home</Link></li>
				  <li><Link to="/about">About</Link></li>
				  <li><Link to="/services">Services</Link></li>
				  <li><Link to="/contact">Contact</Link></li>
			</ul>
		</li>
		<li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
		<li class="nav-item"><a class="nav-link" href="contact-us.html">Contact Us</a></li>
	</ul>
</div>

  */}
    
    
    </>
  );
}

export default App;
