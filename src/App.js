import './App.css';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import CV from './Components/CV/CV';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/ScrollTop/Scroll';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cv' element={<CV/>}/>
      </Routes>
      <Scroll/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
