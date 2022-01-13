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
import NoteState from './context/notes/NoteState';
import User from './components/User';
import About_overview from './components/About_overview';
import About_cosmetic from './components/About_cosmetic';
import About_irregularPeriods from './components/About_irregularPeriods';
import About_infertility from './components/About_infertility';
import About_PregLoss from './components/About_PregLoss';
import About_gesDiabeates from './components/About_gesDiabtetes';
import About_chronicDiabeates from './components/About_chronicDiabeates';
import About_nutrition from './components/About_nutrition';
import About_Sm from './components/About_Sm'; 
import Diet_veg from './components/Diet_veg';
import Diet_nonveg from './components/Diet_nonveg';




function App() {
  return (
    <div>
    <NoteState>
     <Router>
        <Navbar/>
       <Routes>
        <Route index element={<Homepage/>} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/blog/content" element={<Blogcontent />} />
        <Route path="/user" element={<User/>} />
        
        

        <Route path="/about_overview" element={<About_overview/>}/>        
        <Route path="/about_cosmetic" element={<About_cosmetic/>}/>  
        <Route path="/about_irregularPeriod" element={<About_irregularPeriods/>}/>  
        <Route path="/about_infertility" element={<About_infertility/>}/>
        <Route path="/about_pregLoss" element={<About_PregLoss/>}/>      
        <Route path="/about_gesDiabeates" element={<About_gesDiabeates/>}/>      
        <Route path="/about_chronicDiabeates" element={<About_chronicDiabeates/>}/>      
        <Route path="/about_nutrition" element={<About_nutrition/>}/>      
        <Route path="/about_sm" element={<About_Sm/>}/>      
        <Route path="/diet_veg" element={<Diet_veg/>}/>      
        <Route path="/diet_nonveg" element={<Diet_nonveg/>}/>      
       </Routes>
       <Footer/>
     </Router>
     </NoteState>
    </div>
  );
}

export default App;
