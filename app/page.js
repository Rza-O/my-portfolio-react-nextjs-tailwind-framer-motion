'use client'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <MySkills></MySkills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
