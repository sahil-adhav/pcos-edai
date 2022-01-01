import './App.css';
import Blog from './components/Blog';
import Blogcontent from './components/Blogcontent';
import Homepage from './components/Homepage';
import Login from './components/Login';
import About from './components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Diet from './components/Diet';




function App() {
  return (
    <div>
    
     <Router>
        <Navbar/>
       <Routes>
        <Route index element={<Homepage/>} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/blog/content" element={<Blogcontent />} />
        
        

       </Routes>
       <Footer/>
     </Router>
     
    </div>
  );
}

export default App;
