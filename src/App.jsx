import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Home from "../src/Components/Home/Home.jsx";
import About from "../src/Components/About/About.jsx";
import Team from "../src/Components/Team/Team.jsx";
import Department from "../src/components/Department/Department.jsx";
import Events from "../src/components/Events/Events.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path={'/'} element={ <><Navbar/><Home/></> } />
            <Route path={'/About'} element={ <><Navbar/><About/></> } />
            <Route path={'/Team'} element={ <><Navbar/><Team/></> } />
            <Route path={'/Department'} element={ <><Navbar/><Department/></> } />
            <Route path={'/Events'} element={ <><Navbar/><Events/></> } />
            <Route path={'/Contact'} element={ <><Navbar/><Contact/></> } />
            <Route path={'/Footer'} element={ <><Navbar/><Footer/></> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
