import React from 'react';
import { Routes, Route } from "react-router-dom";
import "../src/assets/css/style.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from './components/Home';
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Social_icon from './components/Social_icon';
import Manager from './pages/Manager';
import Project_List from './pages/Project_List';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Fragment>
        <Header />
        <Social_icon />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>} />
      <Route path='manager' element={<Manager />} ></Route>
      <Route path='project-list' element={<Project_List />} ></Route>
      <Route path='/create' element={<Create />} ></Route>
      <Route path='/update/:id' element={<Update />} ></Route>
    </Routes>
  );
}

export default App;
