import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { gsap } from "gsap";
/*
 * Les pages
 */
import Events from "./pages/Evenements.jsx";


function App() {

const animation = () => 
{
  gsap.from(".header",1.5,
    {
      delay: 1,
      top: 0,
      ease: "power4.in",
      stagger: 0.5,
      duration: 1.5
    }
  );
  if(document.querySelector("#homeTitle"))
  { 
    gsap.to(
      "#homeTitle",
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.5
      }
    );
    gsap.to("#homeSubTitle", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1.5
    });
  }

}
  const handleLoad = () => {

    const timeline = gsap.timeline();
    //turn off scroll

    timeline.to(".preloader", {
      duration: 1,
      y: "-100%",
      zIndex: -1,
      ease: "power4.out",
      onComplete: () => {animation()}
    });
  };
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    handleLoad();
  }, 2000);

  document.body.style.overflow = null;


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Events />} />
        </Routes>
    </Router>
  );
}

export default App;
