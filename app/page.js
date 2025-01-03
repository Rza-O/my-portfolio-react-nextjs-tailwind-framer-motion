'use client'
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </>
  );
}
