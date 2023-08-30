import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lenis from "@studio-freight/lenis";



export default function Sponsors() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  useEffect(() => {
    document.title = "Sponsors | BDS Polytech Tours";
 
   

    requestAnimationFrame(raf);
  }, []);

   return (
    <main>
      <Navbar></Navbar>
      <section className="sponsors">
        <div className="title__line">
          <span>Nos sponsors</span>
          <div className="line"></div>
        </div>
        <div className="no-sponsor">
          <span>Aucun sponsor</span>
          <p>Nous n'avons pas encore de sponsors. <br /> Vous souhaitez un partenariat ? Contactez nous par mail : <b>polytech.bds@gmail.com</b></p>
        </div>
      </section>
      <Footer></Footer>
    </main>
   );
}
