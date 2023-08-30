import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lenis from "@studio-freight/lenis";

export default function Sports() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  useEffect(() => {
    document.title = "Sports | BDS Polytech Tours";
 
   

    requestAnimationFrame(raf);
  }, []);
 

  return (
    <main>
      <Navbar></Navbar>
      <section className="sports">
        <div className="title__line">
          <span>Découvrez nos sports</span>
          <div className="line"></div>
        </div>
        
      </section>
      <Footer></Footer>
    </main>
   );
}
