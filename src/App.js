import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About/index.js";
import C from "./components/Courses/c/C.js";
import Python from "./components/Blog/Python/Python.js";
import Java from "./components/Blog/Java/Java.js";
import C from "./components/Blog/C/C.js";
import Dsa from "./components/Blog/DSA/Dsa.js";
import Dbms from "./components/Blog/DBMS/Dbms.js";


import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Router >
        <Navbar />
        <Body>
          
          
          
         <Wrapper></Wrapper>

        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<C />}></Route>
        </Routes>
        </Body>
         <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
