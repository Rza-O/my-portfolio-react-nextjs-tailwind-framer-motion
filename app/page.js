'use client'
import About from "./Components/About";
import Header from "./Components/Header";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <MySkills></MySkills>
    </>
  );
}
