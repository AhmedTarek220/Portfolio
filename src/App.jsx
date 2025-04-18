import { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import Hero from "./Components/2-Hero/Hero";
import Main from "./Components/3-Main/Main";
import Contact from "./Components/4-Contact/Contact";
import Footer from "./Components/5-Footer/Footer";


function App() {
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 300){
        setButton(true)
      }else{
        setButton(false)
      }
    })
  },[])
  const [Button,setButton]=useState(false)
  return (
    <div id='up' className="portfolio">
      <Header />
      <Hero />
      <div className="border"/>
      <Main />
      <div className="border"/>
      <Contact />
      <div className="border"/>
      <Footer />

      <a href="#up" style={{opacity : Button? 1 : 0, transition:'2s'}} className="arrow"><i className="fas fa-arrow-up"></i> </a>

    </div>

  );
}

export default App;
