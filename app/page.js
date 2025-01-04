'use client'
import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme-dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
      <Header isDarkMode={isDarkMode}></Header>
      <About isDarkMode={isDarkMode}></About>
      <MySkills isDarkMode={isDarkMode}></MySkills>
      <Projects isDarkMode={isDarkMode}></Projects>
      <Contact isDarkMode={isDarkMode}></Contact>
      <Footer isDarkMode={isDarkMode}></Footer>
    </>
  );
}
