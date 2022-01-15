import "./App.css";
import Blog from "./components/Blog";
import Blogcontent from "./components/Blogcontent";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import About from "./components/About";
import { useState } from "react";
// import MetaTags from "react-meta-tags";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import config from "./bot/config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Diet from "./components/Diet";
import NoteState from "./context/notes/NoteState";
import User from "./components/User";
import About_overview from "./components/About_overview";
import About_cosmetic from "./components/About_cosmetic";
import About_irregularPeriods from "./components/About_irregularPeriods";
import About_infertility from "./components/About_infertility";
import About_PregLoss from "./components/About_PregLoss";
import About_gesDiabeates from "./components/About_gesDiabtetes";
import About_chronicDiabeates from "./components/About_chronicDiabeates";
import About_nutrition from "./components/About_nutrition";
import About_Sm from "./components/About_Sm";
import Diet_veg from "./components/Diet_veg";
import Diet_nonveg from "./components/Diet_nonveg";
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";

export default function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/blog/content" element={<Blogcontent />} />
            <Route path="/user" element={<User />} />

            <Route path="/about_overview" element={<About_overview />} />
            <Route path="/about_cosmetic" element={<About_cosmetic />} />
            <Route
              path="/about_irregularPeriod"
              element={<About_irregularPeriods />}
            />
            <Route path="/about_infertility" element={<About_infertility />} />
            <Route path="/about_pregLoss" element={<About_PregLoss />} />
            <Route
              path="/about_gesDiabeates"
              element={<About_gesDiabeates />}
            />
            <Route
              path="/about_chronicDiabeates"
              element={<About_chronicDiabeates />}
            />
            <Route path="/about_nutrition" element={<About_nutrition />} />
            <Route path="/about_sm" element={<About_Sm />} />
            <Route path="/diet_veg" element={<Diet_veg />} />
            <Route path="/diet_nonveg" element={<Diet_nonveg />} />
            <Route path="/about_us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </Router>
      </NoteState>
     <div classname = "chatbot">
      {/* <Fade bottom cascade>
        <h1>COVID-19-Chatbot</h1>
        <h2>Start chatting with the COVID-19-Chatbot!</h2>
        <h3>Type in tell a joke and see what happens...</h3>
      </Fade> */}
      {showBot && (
        <Fade big>
          <div className="app-chatbot-container"
          style={{
            position : 'fixed',
            right : '25px',
            bottom : '50px',
            boxShadow : 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
          }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
          style={{
            position : 'fixed',
            right : '25px',
            bottom : '50px',
            boxShadow : 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
          }}
        >
          <div>Bot</div>
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
      </Flip>
    </div>

    </div>
  );
}

