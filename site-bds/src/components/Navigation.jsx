import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap, Expo } from "gsap";

const tl = gsap.timeline({ paused: true });


function Navigation() {

const [isOpen, setIsOpen]=useState(false)


  useEffect(() => {
    tl.to(".menu", {
      duration: 1,
      x: "0%",
      ease: Expo.easeInOut,
    })
      .fromTo(
        ".li",
        {
          y: "-100%",
          opacity: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
          y: "0%",
          stagger: 0.25,
        }
      )
      .fromTo(
        ".social-li",
        {
          y: "30%",
          opacity: 0,
        },
        {
          duration: 0.8,
          opacity: 1,
          stagger: 0.25,
          ease: Expo.easeOut,
        },
        "-=0.5"
      );
  }, []);

  function toggle() 
{
  document.querySelector(".btnmenu").classList.toggle('opened');
  document.querySelector(".btnmenu").setAttribute('aria-expanded', document.querySelector(".btnmenu").classList.contains('opened'))

  if(isOpen===false)
  { 
    document.body.style.overflow = "hidden";
    tl.play();
    setIsOpen(true)
  }
  else
  {
    document.body.style.overflow = null;
    tl.reverse();
    setIsOpen(false)
  }
}

  return (
    <>
      <div>  
        <button
          className="btnmenu"
          onClick={toggle}
          aria-label="Main Menu"
        >
          <svg width="64" height="64" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <div className="menu">
        {/* Pages */}
        <ul className="ul">
          <li className="li1 li">
            <Link to="/" className="navigation__link">
              Accueil
            </Link>
          </li>
          <li className="li2 li">
            <Link to="/events" className="navigation__link">
              Événements
            </Link>
          </li>
          <li className="li3 li">
            <Link to="/sports" className="navigation__link">
              Sports
            </Link>
          </li>
          <li className="li4 li">
            <Link to="/sponsors" className="navigation__link">
              Sponsors
            </Link>
          </li>
        </ul>
        {/* Réseaux sociaux */}
        <div className="social">
          <ul>
            <li className="social-li">
              <Link
                to="https://www.facebook.com/bdspolytechtours/?locale=fr_FR"
                className="navigation__link"
              >
                facebook
              </Link>
            </li>
            <li className="social-li">
              <Link
                to="https://www.instagram.com/bdspolytechtours/?hl=fr"
                className="navigation__link"
              >
                instagram
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
}


export default Navigation;
