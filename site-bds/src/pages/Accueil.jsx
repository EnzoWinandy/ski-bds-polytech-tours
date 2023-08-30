import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const StyledNode = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #d2d2d2;
  background: white;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
`;

const TeamSki = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Team SKI</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/enzo.png"></img>
          </div>
          <span className="staff__name">Enzo</span>

          <span className="staff__rank">Responsable</span>
        </StyledNode>
      }
      label2="test"
    >
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/alex.png" />
            </div>
            <span className="staff__name">Alexandre</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/greg.png" />
            </div>
            <span className="staff__name">Grégoire</span>
          </StyledNode>
        }
      />
    </TreeNode>
  </Tree>
);

const TeamEvent = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Team Event</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/tibo.png" />
          </div>
          <span className="staff__name">Thibault</span>
          <span className="staff__rank">Responsable</span>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/math.png" />
            </div>
            <span className="staff__name">Mathéo</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/nathg.png" />
            </div>
            <span className="staff__name">Nathan .G</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/thomj.png" />
            </div>
            <span className="staff__name">Thomas .J</span>
          </StyledNode>
        }
      />
    </TreeNode>
  </Tree>
);

const TeamCom = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Team COM</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/aline.png" />
          </div>
          <span className="staff__name">Aline</span>
          <span className="staff__rank">Responsable Communication</span>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/camille.png" />
            </div>
            <span className="staff__name">Camille</span>
            <span className="staff__rank">Responsable Graphisme</span>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <div className="staff__pic">
                <img src="/img/staff/theo.png" />
              </div>
              <span className="staff__name">Théo</span>
            </StyledNode>
          }
        />
      </TreeNode>
    </TreeNode>
  </Tree>
);

const TeamOffice = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Bureau</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="staff__pic"
            >
              <img src="/img/staff/axel.png" />

              <span className="staff__name">Axel</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="staff__pic"
            >
              <img src="/img/staff/anais.png" style={{ width: "80px" }} />
              <span className="staff__name">Anaïs</span>
            </div>
          </div>
          <span className="staff__rank">Président(e)</span>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/axelle.png" />
            </div>
            <span className="staff__name">Axelle</span>
            <span className="staff__rank">Trésorière</span>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <div className="staff__pic">
                <img src="/img/staff/chloe.png" />
              </div>
              <span className="staff__name">Chloé</span>
              <span className="staff__rank">Vice-trésorière</span>
            </StyledNode>
          }
        />
      </TreeNode>
      <TreeNode
        label={
          <StyledNode>
            <div className="staff__pic">
              <img src="/img/staff/nathf.png" />
            </div>
            <span className="staff__name">Nathan .F</span>
            <span className="staff__rank">Secrétaire</span>
          </StyledNode>
        }
      />
    </TreeNode>
  </Tree>
);

const TeamPart = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Team PART</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/amelie.png" className="staff__pic" />
          </div>
          <span className="staff__name">Amélie</span>
        </StyledNode>
      }
    />
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/clem.png" />
          </div>
          <span className="staff__name">Clément</span>
        </StyledNode>
      }
    />
  </Tree>
);

const TeamGoodies = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"white"}
    lineBorderRadius={"10px"}
    label={
      <div className="lbl-orga">
        <span>Team GOODIES</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/caro.png" />
          </div>
          <span className="staff__name">Caroline</span>
        </StyledNode>
      }
    />
    <TreeNode
      label={
        <StyledNode>
          <div className="staff__pic">
            <img src="/img/staff/thomv.png" />
          </div>
          <span className="staff__name">Thomas .V</span>
        </StyledNode>
      }
    />
  </Tree>
);

export default function Accueil() {
  const aboutIntroRef = useRef(null);
  const heroBannerRef = useRef(null);
  const staffRef = useRef(null);

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  useEffect(() => {
    document.title = "Accueil | BDS Polytech Tours";


    const aboutIntro = aboutIntroRef.current;
    const heroBanner = heroBannerRef.current;
    const staff = staffRef.current;

    gsap.set(aboutIntro, { y: "100%", opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" }, // Réduire la durée de l'animation à 0.5 seconde
      scrollTrigger: {
        trigger: heroBanner,
        start: "top top",
        end: "20%",
        scrub: true,
      },
    });

    tl.fromTo(
      aboutIntro,
      { y: "100%" },
      { y: "0%", opacity: 1 } // Fait apparaître la div "about-intro" plus rapidement avec une opacité de 1
    );

    ScrollTrigger.create({
      trigger: heroBanner,
      start: "top top",
      endTrigger: aboutIntro,
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    let sloganLines = gsap.utils.toArray(".slogan__line-text");
    sloganLines.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: lenis.actualScroll,
            start: "16%",
            end: "25%",
            scrub: true,
          },
        }
      );
    });
    sloganLines.forEach((element) => {
      gsap.fromTo(
        element,
        { y: "101%" },
        {
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: lenis.actualScroll,
            start: "5%",
            end: "10%",
            scrub: true,
          },
        }
      );
    });
    gsap.fromTo(
      ".logoBDSV",
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: "-100%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: lenis.actualScroll,
          start: "16%",
          end: "25%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".logoBDSV",
      { opacity: 0, x: "-101%" },
      {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 5,
        scrollTrigger: {
          trigger: lenis.actualScroll,
          start: "8%",
          end: "13%",
          scrub: true,
        },
      }
    );

    //Actualiser la valeur --val en l'incrémentant de staff__wrapper

    gsap.fromTo(
      ".staff__wrapper",
      { "--val": 1 },
      {
        "--val": 100,
        ease: "power2.inOut",
        lazy: false,
        scrollTrigger: {
          trigger: staff,
          start: "5% 5%",
          end: () =>
            "+=" +
            (100 -
              parseFloat(getComputedStyle(staff).getPropertyValue("--val"))) +
            "%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      ".col0",
      { y: "75%" },
      {
        y: "-100%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "-20%",
          end: "50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".col1",
      { y: "-115%" },
      {
        y: "115%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "-25%",
          end: "90%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".racket",
      { opacity: 0.4, y: 0 },
      {
        opacity: 0,
        y: "-100%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: lenis.actualScroll,
          start: "16%",
          end: "20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".title-about",
      { opacity: 0, y: "-100%" },
      {
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about",
          start: "-30%",
          end: "5%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".title-about-stroke",
      { opacity: 0, y: "-100%" },
      {
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about",
          start: "-30%",
          end: "5%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".content-style",
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".about",
          start: "-30%",
          end: "8%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Navbar />
      <section className="hero__banner panel" ref={heroBannerRef}>
        <div className="background">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
        <div className="overlay">
          <div>
            <h1 className="title" id="homeTitle">
              UNE ENVIE DE BOUGER?
            </h1>
            <div className="subtitle" id="homeSubTitle">
              <p>Alors découvre tous nos sports !</p>
            </div>
          </div>

          <img className="sportifs" src="/img/sportifs.png" />
        </div>
      </section>
      <div className="about-intro panel" ref={aboutIntroRef}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          className="racket"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>tennis-racket</title>
          <path d="M113.5,9.38C106.38,2.26,96.54-.75,86.38.16A46.45,46.45,0,0,0,58,13.88,46.46,46.46,0,0,0,44.28,42.26,36.89,36.89,0,0,0,45.53,55.8a59.32,59.32,0,0,1-5.29,14.47,73.68,73.68,0,0,1-5,8.29,2.38,2.38,0,0,0-.66.44L.65,111.28a2.22,2.22,0,0,0,0,3.14l7.81,7.8a2.2,2.2,0,0,0,3.14,0L43.88,88.31a2.38,2.38,0,0,0,.44-.66,74.36,74.36,0,0,1,8.29-5,59.55,59.55,0,0,1,14.47-5.28A36.89,36.89,0,0,0,80.62,78.6,46.46,46.46,0,0,0,109,64.87,46.45,46.45,0,0,0,122.72,36.5c.91-10.16-2.1-20-9.22-27.12Zm-62,41.51,0,0A29.49,29.49,0,0,1,51,46l2.09-2.08,3.22,3.22L52,51.41l-.52-.52Zm.77,3.34,3,3L54,58.46a25.86,25.86,0,0,1-1.72-4.23Zm4.26,4.25,3.3,3.3-2.06,2.06a24.4,24.4,0,0,1-2.85-3.75l1.61-1.61Zm4.58,4.58,3.3,3.3L62.79,68A23.92,23.92,0,0,1,59,65.12l2.06-2.06Zm4.58,4.58,3,3a25.51,25.51,0,0,1-4.23-1.72l1.26-1.26ZM72,71.42l-.55-.55,4.32-4.32L79,69.77l-2.08,2.09A29.49,29.49,0,0,1,72,71.42Zm-1.84-1.83L67,66.36,71.28,62l3.23,3.23-4.33,4.32Zm-4.5-4.51-3.3-3.3,4.32-4.32,3.3,3.3-4.32,4.32ZM61.1,60.5l-3.3-3.3,4.32-4.32,3.3,3.3L61.1,60.5Zm-4.58-4.58-3.23-3.23,4.32-4.32,3.23,3.23-4.32,4.32ZM51.24,42l.58.59-.71.71,0-.43q0-.43.09-.87ZM80.29,71.05l.59.59q-.43.06-.87.09l-.43,0,.71-.72Zm2.82.26-1.54-1.54,4.33-4.32,3.22,3.23-1.5,1.51a36.66,36.66,0,0,1-4.51,1.12Zm-2.82-2.82-3.22-3.22L81.39,61l3.22,3.22-4.32,4.32ZM75.79,64l-3.23-3.23,4.32-4.32,3.23,3.22L75.79,64Zm-4.51-4.51L68,56.18l4.32-4.32,3.3,3.3-4.32,4.32ZM66.7,54.9l-3.3-3.3,4.32-4.32,3.3,3.3L66.7,54.9Zm-4.58-4.58-3.23-3.23,4.32-4.32L66.44,46l-4.32,4.32Zm-4.51-4.51-3.22-3.22,4.32-4.33,3.22,3.23-4.32,4.32Zm-4.5-4.51-1.54-1.53a36.07,36.07,0,0,1,1.12-4.5l1.51-1.51L57.43,37,53.11,41.3ZM90.4,67.4l-3.22-3.23,4.32-4.32,3.22,3.23L90.4,67.4Zm-4.5-4.51-3.23-3.23L87,55.34l3.23,3.23L85.9,62.89Zm-4.51-4.51-3.23-3.22,4.32-4.32,3.23,3.22-4.32,4.32Zm-4.51-4.5-3.3-3.3,4.32-4.32,3.3,3.3-4.32,4.32ZM72.3,49.3,69,46l4.32-4.32,3.3,3.3L72.3,49.3Zm-4.58-4.58L64.5,41.49l4.32-4.32L72,40.4l-4.32,4.32Zm-4.51-4.51L60,37l4.32-4.32,3.23,3.23-4.33,4.32Zm-4.5-4.51-3.23-3.22,4.32-4.32L63,31.38,58.71,35.7ZM57.29,25.64l1.23,1.23-4.23,4.24a40.72,40.72,0,0,1,3-5.47ZM96,64.36l1.23,1.23a41.23,41.23,0,0,1-5.46,3L96,64.36Zm2.75.19-1.47-1.47,4.32-4.32,1.86,1.86a42.1,42.1,0,0,1-4.71,3.93ZM96,61.8l-3.23-3.23,4.32-4.32,3.23,3.22L96,61.8ZM91.5,57.29l-3.23-3.23,4.32-4.32L95.82,53,91.5,57.29ZM87,52.78l-3.23-3.22,4.33-4.33,3.22,3.23L87,52.78Zm-4.51-4.51L79.18,45l4.33-4.33,3.3,3.3-4.33,4.32ZM77.9,43.69,74.6,40.4l4.33-4.33,3.3,3.3L77.9,43.69Zm-4.58-4.58L70.1,35.89l4.32-4.32,3.23,3.22-4.33,4.32Zm-4.5-4.5-3.23-3.23,4.32-4.32,3.23,3.23-4.32,4.32ZM64.31,30.1l-3.23-3.23,4.32-4.32,3.23,3.23L64.31,30.1ZM59.8,25.59l-1.47-1.47a42.1,42.1,0,0,1,3.93-4.71l1.86,1.86L59.8,25.59ZM95,7.33l0,0,.52.52L91.22,12.2,88,9l2.08-2.08A29.7,29.7,0,0,1,95,7.33Zm1.83,1.83,3.22,3.23-4.32,4.32-3.22-3.23,4.32-4.32Zm4.5,4.51,3.3,3.3-4.32,4.32L97,18l4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.23,3.22-4.32,4.32-3.23-3.22,4.32-4.32Zm4.51,4.5.55.55A30.82,30.82,0,0,1,116,32.8l-2.08,2.08-3.23-3.23L115,27.33Zm-.26-2.82-3-3L113,20.3a25,25,0,0,1,1.72,4.21Zm-4.25-4.25L107.19,17l2.06-2.06a24.4,24.4,0,0,1,2.85,3.75l-1.61,1.6Zm-4.58-4.58-3.3-3.29,1.61-1.61A24.4,24.4,0,0,1,108,13.63l-2.06,2Zm-4.58-4.58-3-3a25.78,25.78,0,0,1,4.21,1.71l-1.25,1.25ZM83.9,7.44,85.44,9l-4.32,4.32-3.23-3.22,1.5-1.51A37.12,37.12,0,0,1,83.9,7.44Zm2.82,2.81,3.22,3.23L85.62,17.8,82.4,14.58l4.32-4.33Zm4.5,4.51L94.45,18l-4.32,4.32L86.9,19.08l4.32-4.32Zm4.51,4.51,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32L96,28.17l4.32-4.32Zm4.58,4.58,3.23,3.22L103.8,36l-3.23-3.23,4.32-4.32Zm4.51,4.51,3.23,3.22-4.33,4.32-3.22-3.22,4.32-4.32Zm4.51,4.5L115.44,39a35.41,35.41,0,0,1-1.13,4.51l-1.5,1.5-3.23-3.23,4.33-4.32Zm1.86-.69-.58-.59.71-.71,0,.44c0,.28,0,.57-.09.86Zm-29-29.06-.59-.58L87,7l.44,0-.71.71ZM76.61,11.35l3.23,3.23L75.51,18.9l-3.22-3.23,4.32-4.32Zm4.51,4.51,3.22,3.22L80,23.4l-3.23-3.22,4.33-4.32Zm4.5,4.5,3.23,3.23-4.32,4.32L81.3,24.68l4.32-4.32Zm4.51,4.51,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32ZM99.29,34l3.23,3.23-4.33,4.32L95,38.35,99.29,34Zm4.51,4.51L107,41.76l-4.32,4.32-3.22-3.22,4.32-4.32Zm4.5,4.5,3.23,3.23-4.32,4.32L104,47.37,108.3,43Zm-40-28.84,1.47,1.47L65.4,20l-1.86-1.86a41.31,41.31,0,0,1,4.72-3.93ZM71,17l3.22,3.23L69.91,24.5l-3.22-3.23L71,17Zm4.5,4.51,3.23,3.22L74.42,29l-3.23-3.23,4.32-4.32ZM80,26l3.23,3.22-4.32,4.32L75.7,30.29,80,26Zm4.51,4.5,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.3,3.3-4.32,4.32-3.3-3.3,4.32-4.32Zm4.58,4.58,3.22,3.23-4.32,4.32L89.37,44l4.32-4.32Zm4.5,4.51,3.23,3.23L97.1,51.69l-3.23-3.23,4.32-4.32Zm4.51,4.51,3.23,3.22-4.32,4.32L98.38,53l4.32-4.32Zm4.51,4.5,1.47,1.47a42.2,42.2,0,0,1-3.93,4.72l-1.86-1.87,4.32-4.32Zm2.51,0-1.23-1.23,4.22-4.22a38.79,38.79,0,0,1-3,5.45ZM71,14.39l-1.23-1.23a39.91,39.91,0,0,1,5.45-3L71,14.39ZM50,65.13a31.66,31.66,0,0,0,3.55,4.24,30.89,30.89,0,0,0,4.25,3.55,71.48,71.48,0,0,0-8.3,3.63,78.48,78.48,0,0,0-7.64,4.52,78.48,78.48,0,0,0,4.52-7.64A69.74,69.74,0,0,0,50,65.13Z" />
        </svg>
        <div className="slogan__lines">
          <div className="slogan__line ">
            <span className="slogan__line-text ">C'est </span>
          </div>
          <div className="slogan__line slogan__line--2">
            <span className="slogan__line-text">quoi le</span>
          </div>
          <div className="slogan__line">
            <span className="slogan__line-text">Bureau Des Sports?</span>
          </div>
        </div>
        <div>
          <img src="logoBdsViolet.png" className="logoBDSV" alt="Logo BDS" />
        </div>
      </div>
      {/* A propos */}
      <section className="about">
        <div className="content">
          <h1 className="title-about-stroke">infos</h1>
          <h1 className="title-about">infos</h1>
          <div className="content__container">
            <div className="content-style">
              <h2>Découvrez ce qu'il faut savoir</h2>
              <p>
                Tu aimes le sport, les évènements sportifs et les compétitions ?
                Alors le Bureau Des Sports est fait pour toi ! L’adhésion est de
                35€ si tu es présent toute l’année et de 20€ pour les alternants
                ou pour ceux qui partent un semestre ou en stage.
                <br />
                Au sein du BDS tu retrouveras de nombreuses activités sportives
                :{" "}
                <em>
                  {" "}
                  Tennis, Musculation, Football, Basketball, Handball, …{" "}
                </em>{" "}
                (Plus d'informations sur la page{" "}
                <Link
                  to="/sports"
                  style={{ fontWeight: 800, color: "var(--primary-color)" }}
                >
                  Sports
                </Link>
                )
                <br />
                Durant l’année, tu pourras profiter de plusieurs compétitions
                universitaires, du Tournoi Inter-filières de Polytech Tours,
                ainsi que du cross ! De plus, le BDS organise rien que pour toi
                des évènements incontournables tels qu’une semaine Ski !
                <br />
                Alors ça t'intéresse ? Bah ouais logique ! Si tu veux en savoir
                plus, ou que tu es déjà décidé à nous faire confiance, n’hésite
                pas regarder la brochure et à venir nous voir au local du BDS
                qui se trouve au DI 64 Avenue Jean Portalis !
              </p>
              <p> BDS'ment 💜 </p>
              <span className="signe">L'équipe</span>
              <div>
                <Link className="file-dl">Télécharger la brochure</Link>
              </div>
            </div>
            <div className="instagram-tiles">
              <div className="instagram-tiles__grid">
                <div className="instagram-tiles__grid-column col0">
                  <div className="instagram-card">
                    <div className="instagram-card__header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="instagram-card__image">
                      <img
                        className="img-main"
                        src="/img/pompom.jpg"
                        alt="pompom"
                      />
                      <img className="heart" src="/ig-heart.svg" alt="heart" />
                    </div>
                    <div className="instagram-card__footer">
                      <div className="like-button instagram-card__button">
                        <img
                          className="heart"
                          src="/ig-heart.svg"
                          alt="heart"
                        />
                      </div>
                      <img
                        className="instagram-card__button"
                        src="/ig-comment.svg"
                        alt="comment"
                      />
                      <img
                        className="instagram-card__button"
                        src="/ig-message.svg"
                        alt="message"
                      />
                      <img
                        className="instagram-card__button instagram-card__button--end"
                        src="/ig-bookmark.svg"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                  <div className="instagram-card">
                    <div className="instagram-card__header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="instagram-card__image">
                      <img className="img-main" src="/img/win.jpg" alt="" />
                      <img className="heart" src="/ig-heart.svg" alt="heart" />
                    </div>
                    <div className="instagram-card__footer">
                      <div className="like-button instagram-card__button">
                        <img
                          className="heart"
                          src="/ig-heart.svg"
                          alt="heart"
                        />
                      </div>
                      <img
                        className="instagram-card__button"
                        src="/ig-comment.svg"
                        alt="comment"
                      />
                      <img
                        className="instagram-card__button"
                        src="/ig-message.svg"
                        alt="message"
                      />
                      <img
                        className="instagram-card__button instagram-card__button--end"
                        src="/ig-bookmark.svg"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                </div>
                <div className="instagram-tiles__grid-column col1">
                  <div className="instagram-card">
                    <div className="instagram-card__header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="instagram-card__image">
                      <img className="img-main" src="/img/party.jpg" alt="" />
                      <img className="heart" src="/ig-heart.svg" alt="heart" />
                    </div>
                    <div className="instagram-card__footer">
                      <div className="like-button instagram-card__button">
                        <img
                          className="heart"
                          src="/ig-heart.svg"
                          alt="heart"
                        />
                      </div>
                      <img
                        className="instagram-card__button"
                        src="/ig-comment.svg"
                        alt="comment"
                      />
                      <img
                        className="instagram-card__button"
                        src="/ig-message.svg"
                        alt="message"
                      />
                      <img
                        className="instagram-card__button instagram-card__button--end"
                        src="/ig-bookmark.svg"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                  <div className="instagram-card">
                    <div className="instagram-card__header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="instagram-card__image">
                      <img className="img-main" src="/img/volley.jpg" alt="" />
                      <img className="heart" src="/ig-heart.svg" alt="heart" />
                    </div>
                    <div className="instagram-card__footer">
                      <div className="like-button instagram-card__button">
                        <img
                          className="heart"
                          src="/ig-heart.svg"
                          alt="heart"
                        />
                      </div>
                      <img
                        className="instagram-card__button"
                        src="/ig-comment.svg"
                        alt="comment"
                      />
                      <img
                        className="instagram-card__button"
                        src="/ig-message.svg"
                        alt="message"
                      />
                      <img
                        className="instagram-card__button instagram-card__button--end"
                        src="/ig-bookmark.svg"
                        alt="bookmark"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/bannersport.png" className="about__footer-img" alt="" />
      </section>
      <div className="marquee-rtl">
        <div className="marquee__group">
          {/*  */}
          <img src="img/sponsors/decathlon.png" className="brandlogo" alt="" />
          <img src="img/sponsors/orangebleu.png" className="brandlogo" alt="" />
          <img src="img/sponsors/bowlcenter.png" className="brandlogo" alt="" />
          <img src="img/sponsors/leclerc.png" className="brandlogo" alt="" />
          <img src="img/sponsors/ldlc.png" className="brandlogo" alt="" />
          {/*  */}
        </div>
        <div className="marquee__group" aria-hidden="true" >
          <div className="marquee__group">{/*  */}
          <img src="img/sponsors/decathlon.png" className="brandlogo" alt="" />
          <img src="img/sponsors/orangebleu.png" className="brandlogo" alt="" />
          <img src="img/sponsors/bowlcenter.png" className="brandlogo" alt="" />
          <img src="img/sponsors/leclerc.png" className="brandlogo" alt="" />
          <img src="img/sponsors/ldlc.png" className="brandlogo" alt="" />
          {/*  */}</div>
          
        </div>
      </div>
      {/* <div className="c-circles ">
        <div className="c-circles__wrapper">
          <div className="c-circles__inner">
            <div className="c-circles__wrapper-circle-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 617.1 618.37"
                className="c-circles__circle-out "
              >
                <g>
                  <path d="M82,194.48l-49.64-25.1a.36.36,0,0,1-.18-.54l2.93-5.79a.36.36,0,0,1,.54-.18L85.3,188a.34.34,0,0,1,.17.53l-2.92,5.8A.35.35,0,0,1,82,194.48Z"></path>{" "}
                  <path d="M94.23,171.26l-45-32.75a.35.35,0,0,1-.09-.56l4.72-6.48a.38.38,0,0,1,.49-.14l47.45,11,.24-.33a194.07,194.07,0,0,1-16.7-11l-20-14.58a.36.36,0,0,1-.09-.56L69,110.74a.35.35,0,0,1,.56-.09l45,32.76a.35.35,0,0,1,.09.55l-4.72,6.49a.39.39,0,0,1-.5.13L62.35,140l-.28.39a122.43,122.43,0,0,1,15,9.57L98.43,165.5a.36.36,0,0,1,.09.56l-3.73,5.12A.36.36,0,0,1,94.23,171.26Z"></path>{" "}
                  <path d="M112.45,67.59a.44.44,0,0,1,.34.12l3.58,3.9a.46.46,0,0,1,.09.34.43.43,0,0,1-.13.34L105.7,82l33.65,36.68a.36.36,0,0,1,0,.57l-4.84,4.44a.36.36,0,0,1-.57,0L100.27,87,89.64,96.78a.42.42,0,0,1-.68,0l-3.58-3.9a.42.42,0,0,1,0-.67l26.7-24.5A.45.45,0,0,1,112.45,67.59Z"></path>{" "}
                  <path d="M140.82,55l9.66,15.42,17-10.64a.35.35,0,0,1,.55.13l2.9,4.62a.34.34,0,0,1-.13.54l-17,10.65,10.34,16.5,18.34-11.49a.35.35,0,0,1,.55.13l2.9,4.61a.36.36,0,0,1-.13.56l-24.18,15.15a.35.35,0,0,1-.55-.13L131.53,53.94a.35.35,0,0,1,.13-.55l24.18-15.15a.35.35,0,0,1,.55.13l2.85,4.55c.17.27.14.48-.08.62Z"></path>{" "}
                  <path d="M232.88,66.15a.35.35,0,0,1-.2.25l-6.37,2.43a.42.42,0,0,1-.56-.12c-.62-.57-1.39-2.07-2.33-4.52L219.13,53c-1-2.55-2.23-4.07-3.76-4.57s-3.7-.22-6.5.85l-10.7,4.09,8.61,22.54a.35.35,0,0,1-.23.51l-6.07,2.32a.35.35,0,0,1-.52-.23l-19.85-52a.35.35,0,0,1,.23-.52l17.22-6.58q7-2.68,11.54-1.45c3,.83,5.25,3.18,6.74,7.08L218,30.65a12,12,0,0,1,.77,7.43,8.49,8.49,0,0,1-3.66,5l.14.37a9.08,9.08,0,0,1,6.18.56q2.61,1.3,4.15,5.36l3.81,10a21.84,21.84,0,0,0,3.39,6.42A.4.4,0,0,1,232.88,66.15ZM209.49,28.84c-.9-2.35-2.13-3.76-3.69-4.25s-3.74-.21-6.53.86L189,29.37l7,18.2,10.71-4.1q3.83-1.45,5-3.59t-.12-5.57Z"></path>{" "}
                  <path d="M248.34,61.94,239.55,7a.35.35,0,0,1,.33-.45l7.92-1.27a.36.36,0,0,1,.44.25l25.92,41.23.4-.06a197.08,197.08,0,0,1-4.11-19.56L266.54,2.7a.35.35,0,0,1,.33-.46l6.25-1a.35.35,0,0,1,.46.33l8.8,54.94A.35.35,0,0,1,282,57l-7.91,1.27a.39.39,0,0,1-.45-.25L247.77,17.3l-.47.08a123.23,123.23,0,0,1,3.92,17.39l4.17,26.05a.35.35,0,0,1-.34.45l-6.25,1A.36.36,0,0,1,248.34,61.94Z"></path>{" "}
                  <path d="M336.12,57.37l-6.73-.26c-.27,0-.39-.15-.39-.42l-3-12.95L306.91,43l-4,12.68a.36.36,0,0,1-.12.27.38.38,0,0,1-.29.11l-6.73-.26c-.32,0-.42-.15-.3-.41L312.4.38a.36.36,0,0,1,.42-.38l10.65.41c.22,0,.37.15.46.42L336.46,57C336.55,57.25,336.44,57.38,336.12,57.37ZM324.45,37.51l-4.61-19.75c-.23-1.08-.48-2.68-.74-4.81s-.45-3.93-.56-5.43l-1.44-.06c-.21,1.5-.54,3.29-1,5.38s-.79,3.67-1.1,4.73l-6.12,19.34Z"></path>{" "}
                  <path d="M388.82,10.64a.47.47,0,0,1,.09.34l-1.08,5.18a.47.47,0,0,1-.23.28.43.43,0,0,1-.34.1l-14.12-3L362.92,62.29a.35.35,0,0,1-.47.31L356,61.25a.36.36,0,0,1-.31-.47l10.22-48.72-14.12-3a.42.42,0,0,1-.37-.57l1.08-5.18a.43.43,0,0,1,.57-.37l35.46,7.43A.5.5,0,0,1,388.82,10.64Z"></path>{" "}
                  <path d="M390.22,70,409,17.65a.35.35,0,0,1,.51-.24l6.11,2.19a.36.36,0,0,1,.24.52L397.08,72.47a.35.35,0,0,1-.51.24l-6.11-2.19A.35.35,0,0,1,390.22,70Z"></path>{" "}
                  <path d="M419.59,77.83q-2.26-6.48,2.27-14.78l9.75-17.88q4.53-8.3,11.21-9.91T457,37.73q7.59,4.14,9.78,10.59T464.4,63.07l-9.75,17.87q-4.53,8.3-11.14,9.94t-14.2-2.5Q421.84,84.32,419.59,77.83Zm21.63,6.28q4.14-1.39,7.22-7l9.37-17.17q3.1-5.7,2-9.89T454,43.21Q449.17,40.6,445,42c-2.77.92-5.17,3.27-7.21,7l-9.38,17.17q-3.06,5.63-2,9.86t5.85,6.85Q437.09,85.51,441.22,84.11Z"></path>{" "}
                  <path d="M459.94,106.07l36.21-42.24a.35.35,0,0,1,.56,0L502.8,69a.37.37,0,0,1,.09.5L488.22,116l.3.25a191.34,191.34,0,0,1,12.26-15.77L516.9,81.62a.35.35,0,0,1,.56,0l4.81,4.12a.36.36,0,0,1,0,.57l-36.2,42.23a.36.36,0,0,1-.57,0l-6.08-5.21a.39.39,0,0,1-.1-.51l14.25-46.06-.36-.31a123.6,123.6,0,0,1-10.73,14.24l-17.16,20a.36.36,0,0,1-.57,0l-4.8-4.12A.35.35,0,0,1,459.94,106.07Z"></path>{" "}
                  <path d="M520.08,169.86l-4.19-5.27A.35.35,0,0,1,516,164l7.84-10.74-11.88-14.93-12.23,5.22a.39.39,0,0,1-.3.08.36.36,0,0,1-.26-.14l-4.19-5.27c-.21-.26-.17-.42.11-.5l52.76-23a.36.36,0,0,1,.57.06l6.63,8.34a.52.52,0,0,1,0,.63l-34.4,46.1C520.45,170.12,520.28,170.12,520.08,169.86Zm7.45-21.8,12-16.37q1-1.32,3.16-3.69t3.76-4l-.9-1.13q-1.9,1.21-4.71,2.78c-1.86,1-3.3,1.79-4.3,2.24l-18.65,8Z"></path>{" "}
                  <path d="M545.07,205.32l-4.7,2.41c-.29.15-.49.1-.62-.14l-13-25.39a.35.35,0,0,1,.17-.54l49.5-25.37a.35.35,0,0,1,.54.17l3,5.78a.35.35,0,0,1-.17.54l-44.3,22.7,9.88,19.26C545.44,205,545.36,205.17,545.07,205.32Z"></path>{" "}
                  <path d="M564.59,235.75l7-1.87c.15,0,.26,0,.32.25l1.81,6.81c.05.21,0,.33-.15.37l-7,1.88a.28.28,0,0,1-.39-.23l-1.81-6.82A.28.28,0,0,1,564.59,235.75Z"></path>{" "}
                  <path d="M562.22,286.56q3.16-4.63,10.54-4.94l6.56-.27a.35.35,0,0,1,.42.38l.28,6.48a.36.36,0,0,1-.39.42l-6.32.27c-2.89.12-4.92,1-6.11,2.71s-1.7,4.28-1.55,7.8.75,6.23,1.78,7.79,2.85,2.29,5.47,2.17l4.32-.18a6.66,6.66,0,0,0,4.23-1.5A10.22,10.22,0,0,0,584,304q1-2.33,2.32-6.8a73.51,73.51,0,0,1,3-9.31,13,13,0,0,1,3.83-5.18,11.1,11.1,0,0,1,6.61-2.13l4.32-.18q6.57-.28,9.56,4.08t3.36,12.86c.24,5.61-.7,9.93-2.82,13s-5.58,4.69-10.38,4.9l-6.17.26a.36.36,0,0,1-.42-.38l-.27-6.49a.36.36,0,0,1,.38-.42l5.93-.25c2.83-.12,4.82-1,6-2.58s1.66-4.19,1.51-7.77-.72-6.21-1.69-7.75-2.69-2.25-5.15-2.14l-3.68.15a5.66,5.66,0,0,0-3.75,1.44,9.8,9.8,0,0,0-2.27,3.31q-.84,2-2.41,6.6a8.73,8.73,0,0,1-.28.86,3.37,3.37,0,0,0-.21.69,77.64,77.64,0,0,1-3.19,8.87,12.86,12.86,0,0,1-3.73,4.82,10.79,10.79,0,0,1-6.37,2l-5.29.23q-6.79.29-9.92-4.12t-3.47-12.88Q559.05,291.19,562.22,286.56Z"></path>{" "}
                  <path d="M608.1,370.79q-3.93,4-11.23,2.92l-7.3-1q-7.22-1-9.79-5.94t-1.37-13.31l1.36-9.45-20.63-3a.36.36,0,0,1-.34-.46l.93-6.42a.36.36,0,0,1,.45-.35l55.06,7.93a.35.35,0,0,1,.34.45l-2.34,16.26Q612,366.82,608.1,370.79Zm-10.51-4.34q4.36.63,6.53-1.49c1.45-1.41,2.42-3.89,2.93-7.43l1.36-9.44L586,344.85l-1.36,9.44q-.76,5.32.68,8T591,365.5Z"></path>{" "}
                  <path d="M553.73,387.16q6-3.29,14.95-.17l19.22,6.72q8.93,3.12,11.6,9.45t-.13,14.35q-2.86,8.17-8.86,11.37t-14.94.09l-19.21-6.71q-8.94-3.13-11.63-9.38t.16-14.42Q547.69,390.45,553.73,387.16ZM551,409.53q2.06,3.86,8.1,6L577.6,422q6.14,2.15,10.1.39t5.77-6.9q1.8-5.15-.25-9t-8.1-6L566.65,394q-6-2.11-10-.37t-5.81,6.88Q549,405.67,551,409.53Z"></path>{" "}
                  <path d="M514.1,461.61a.33.33,0,0,1,0-.32l3.5-5.84a.44.44,0,0,1,.53-.25q1.25.09,4.61,2.12l10.31,6.19c2.34,1.4,4.26,1.82,5.78,1.27s3-2.12,4.59-4.68l5.9-9.83-20.69-12.42a.36.36,0,0,1-.14-.55l3.34-5.56a.35.35,0,0,1,.55-.14l47.7,28.63a.35.35,0,0,1,.14.54l-9.49,15.81c-2.59,4.31-5.31,7.07-8.19,8.27s-6.09.74-9.67-1.41l-5.15-3.09a12.12,12.12,0,0,1-5.2-5.37,8.42,8.42,0,0,1-.2-6.19l-.35-.21a9.17,9.17,0,0,1-5.2,3.37q-2.87.57-6.58-1.65l-9.14-5.49a21.88,21.88,0,0,0-6.64-3A.41.41,0,0,1,514.1,461.61Zm41.44,14.92q3.23,1.94,5.52,1.07t4.61-4.71l5.65-9.42-16.7-10-5.9,9.82q-2.1,3.51-1.73,5.93t3.53,4.32Z"></path>{" "}
                  <path d="M525,534.75a.52.52,0,0,1-.35-.09l-3.92-3.55a.46.46,0,0,1-.13-.34.43.43,0,0,1,.09-.34l9.68-10.71L493.4,486.34a.35.35,0,0,1,0-.56l4.41-4.88a.35.35,0,0,1,.56,0l36.92,33.38,9.68-10.7a.42.42,0,0,1,.68,0l3.92,3.55a.42.42,0,0,1,0,.67l-24.3,26.88A.46.46,0,0,1,525,534.75Z"></path>{" "}
                  <path d="M473.48,508.86q5.63,0,10,5.95l3.91,5.28a.36.36,0,0,1-.08.57l-5.22,3.86a.36.36,0,0,1-.56-.08l-3.77-5.09q-2.58-3.47-5.66-3.53c-2.06,0-4.5,1-7.34,3.09s-4.73,4.11-5.45,5.84-.29,3.64,1.27,5.75l2.58,3.47a6.58,6.58,0,0,0,3.61,2.66,9.94,9.94,0,0,0,4.52,0,68.31,68.31,0,0,0,6.93-1.89,74.53,74.53,0,0,1,9.43-2.7,13.07,13.07,0,0,1,6.43.27,11.08,11.08,0,0,1,5.47,4.28l2.58,3.48q3.92,5.26,2,10.2t-8.75,10q-6.76,5-12.34,5t-9.88-5.85l-3.67-5a.37.37,0,0,1,.08-.57l5.21-3.86a.35.35,0,0,1,.56.08l3.54,4.77q2.53,3.4,5.49,3.51t7.28-3.1q4.38-3.25,5.47-5.75c.72-1.67.35-3.5-1.11-5.47l-2.19-3a5.71,5.71,0,0,0-3.3-2.3,9.84,9.84,0,0,0-4,0q-2.1.4-6.82,1.71c-.32.11-.61.19-.86.25a3.11,3.11,0,0,0-.69.21,77.92,77.92,0,0,1-9.15,2.34,12.87,12.87,0,0,1-6.07-.39,10.84,10.84,0,0,1-5.26-4.13l-3.15-4.25Q450.42,529,452.33,524t8.72-10.11Q467.88,508.84,473.48,508.86Z"></path>{" "}
                  <path d="M421.13,554.66l2.83,6.73c.06.15,0,.26-.2.34l-6.51,2.74c-.19.08-.32,0-.39-.1L414,557.65a.29.29,0,0,1,.18-.42l6.5-2.74A.29.29,0,0,1,421.13,554.66Z"></path>{" "}
                  <path d="M373,556.77l7.61,55.1a.34.34,0,0,1-.34.45l-9.13,1.27c-.16,0-.3-.07-.44-.27l-13.57-29.11a85.63,85.63,0,0,1-4.63-13.6l-.63.08a74,74,0,0,1-.7,14.34L346,616.73c-.08.23-.2.35-.36.38l-9.13,1.26A.36.36,0,0,1,336,618l-7.61-55.11a.35.35,0,0,1,.34-.45l6.27-.86a.35.35,0,0,1,.46.34l3.3,23.9q.66,4.85,1.19,10.35c.34,3.68.58,6.74.7,9.21l.64-.09,6.23-45.12a.25.25,0,0,1,.08-.25.42.42,0,0,1,.27-.12l5.48-.76a.48.48,0,0,1,.29,0,.3.3,0,0,1,.15.22L372,601.09l.64-.09q-1.74-7.29-3.4-19.36l-3.3-23.89a.36.36,0,0,1,.34-.46l6.27-.86A.35.35,0,0,1,373,556.77Z"></path>{" "}
                  <path d="M275,559.42l6.71.53a.36.36,0,0,1,.37.43l2.5,13.07,19,1.5,4.53-12.5a.37.37,0,0,1,.15-.27.34.34,0,0,1,.28-.1l6.72.53c.32,0,.41.17.29.43l-19.19,54.28a.36.36,0,0,1-.43.37l-10.63-.85c-.21,0-.36-.16-.45-.44l-10.22-56.61C274.58,559.52,274.7,559.39,275,559.42Zm10.85,20.32,3.8,19.92c.18,1.09.36,2.69.54,4.82s.29,4,.33,5.46l1.44.11c.28-1.47.67-3.26,1.19-5.33s.95-3.63,1.3-4.68l6.9-19.07Z"></path>{" "}
                  <path d="M261.67,557.16l-14.91,53.59a.36.36,0,0,1-.49.28l-7.73-2.16a.38.38,0,0,1-.3-.41l-6.36-48.28-.39-.11a194.75,194.75,0,0,1-4.43,19.49l-6.63,23.86a.36.36,0,0,1-.5.28l-6.1-1.7a.35.35,0,0,1-.28-.49l14.91-53.59a.36.36,0,0,1,.5-.28l7.72,2.15a.37.37,0,0,1,.3.41L243.57,598l.47.14a123.36,123.36,0,0,1,3.69-17.45l7.06-25.41a.36.36,0,0,1,.5-.27l6.1,1.69A.36.36,0,0,1,261.67,557.16Z"></path>{" "}
                  <path d="M179.87,525l6,3a.36.36,0,0,1,.18.54l-2.57,13.05,17.07,8.52,8.88-9.91a.43.43,0,0,1,.23-.19.41.41,0,0,1,.31,0l6,3c.29.15.32.31.11.5L178,586.68a.36.36,0,0,1-.54.18L168,582.1a.52.52,0,0,1-.25-.57l11.71-56.33C179.43,524.91,179.59,524.84,179.87,525Zm2.46,22.91-3.93,19.9c-.23,1.07-.67,2.63-1.3,4.68s-1.21,3.77-1.73,5.18l1.29.64q1.22-1.9,3.09-4.5c1.26-1.74,2.24-3,3-3.86l13.53-15.1Z"></path>{" "}
                  <path d="M124.93,529.73l-3.42,4.45a8.1,8.1,0,0,0-1.76,6.89c.53,2.39,2.16,4.64,4.92,6.76q4.44,3.42,8.72,2.87t8.17-5.65l12.32-16q3.9-5.09,3.35-9.36t-5-7.69c-2.67-2.05-5.27-3-7.8-2.86a8.16,8.16,0,0,0-6.25,3.39l-6.11,7.94,7.88,6c.22.17.22.38,0,.63l-3.18,4.13c-.22.3-.44.36-.66.2l-13.34-10.26c-.21-.16-.2-.39,0-.69L141,496.82a.35.35,0,0,1,.56-.07l3.88,3a.35.35,0,0,1,.07.56l-2.74,4.87.45.34a15.16,15.16,0,0,1,7.07-.58,15.76,15.76,0,0,1,7.23,3.29q6.23,4.79,7.14,11.15t-5,14.06L147.3,549.56q-5.91,7.7-12.72,8.12t-13.72-4.89q-6.61-5.09-8.14-11.11t2.77-11.63l3.66-4.76a.35.35,0,0,1,.56-.07l5.15,3.95A.36.36,0,0,1,124.93,529.73Z"></path>{" "}
                  <path d="M86.32,511.86l13.66-12-13.23-15a.36.36,0,0,1,0-.57l4.09-3.6a.36.36,0,0,1,.57,0l13.23,15.05,14.63-12.86L105,466.61a.36.36,0,0,1,0-.57l4.1-3.6a.35.35,0,0,1,.56,0l18.84,21.43a.35.35,0,0,1,0,.56L86.74,521.2a.36.36,0,0,1-.57,0L67.33,499.73a.35.35,0,0,1,0-.56l4-3.55c.24-.21.45-.22.63,0Z"></path>{" "}
                  <path d="M99.63,450.1,51,477.19a.35.35,0,0,1-.54-.16L46,469a.48.48,0,0,1,.08-.51L68.3,445.26a85.71,85.71,0,0,1,11-9.25l-.32-.55A74.74,74.74,0,0,1,65.37,440L34,446.7a.47.47,0,0,1-.47-.19L29,438.46a.36.36,0,0,1,.15-.55l48.59-27.09a.36.36,0,0,1,.55.16l3.08,5.53a.35.35,0,0,1-.15.54L60.13,428.8q-4.26,2.38-9.22,4.87c-3.29,1.65-6.07,3-8.32,4l.31.57,44.31-10.58a.26.26,0,0,1,.27,0,.48.48,0,0,1,.2.2l2.7,4.83a.51.51,0,0,1,.06.29.26.26,0,0,1-.15.22L58,465.25l.31.56q6.16-4.26,16.8-10.19l21.07-11.75a.36.36,0,0,1,.55.15l3.08,5.53A.36.36,0,0,1,99.63,450.1Z"></path>{" "}
                  <path d="M21.75,401.23l17.4-5.31L33.3,376.75a.35.35,0,0,1,.27-.5l5.21-1.59a.35.35,0,0,1,.5.27l5.85,19.16,18.63-5.69-6.32-20.7a.35.35,0,0,1,.26-.5l5.22-1.59a.36.36,0,0,1,.5.27l8.33,27.29a.35.35,0,0,1-.27.5l-53.2,16.25a.36.36,0,0,1-.5-.27L9.45,382.36a.35.35,0,0,1,.27-.5l5.13-1.57c.31-.09.5,0,.58.24Z"></path>{" "}
                  <path d="M59.65,350.1,4.33,355.92a.36.36,0,0,1-.44-.36l-.83-8a.37.37,0,0,1,.27-.43L45.9,323.5l0-.4a195.19,195.19,0,0,1-19.75,3L1.48,328.73a.34.34,0,0,1-.44-.35l-.67-6.3a.36.36,0,0,1,.36-.44l55.32-5.81a.35.35,0,0,1,.44.35l.84,8a.37.37,0,0,1-.28.43l-42,23.69,0,.47a126,126,0,0,1,17.58-3L58.91,343a.35.35,0,0,1,.44.36l.66,6.29A.35.35,0,0,1,59.65,350.1Z"></path>{" "}
                  <path d="M3.24,261.31a.5.5,0,0,1,.33-.13l5.27.45a.48.48,0,0,1,.31.18.46.46,0,0,1,.13.34L8.07,276.52l49.6,4.19a.36.36,0,0,1,.36.44l-.55,6.55a.35.35,0,0,1-.43.36l-49.6-4.19L6.23,298.25a.42.42,0,0,1-.51.44l-5.28-.45a.43.43,0,0,1-.44-.52l3.05-36.1A.53.53,0,0,1,3.24,261.31Z"></path>{" "}
                  <path d="M53.12,230l-7-2.15c-.16-.05-.2-.17-.14-.38l2.08-6.73c.07-.21.17-.29.33-.24l7,2.15a.29.29,0,0,1,.21.4l-2.08,6.74A.28.28,0,0,1,53.12,230Z"></path>
                </g>
              </svg>
            </div>
            <div className="c-circles__wrapper-circle-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 617.1 618.37"
                className="c-circles__circle-in"
              >
                <g>
                  <path d="M82,194.48l-49.64-25.1a.36.36,0,0,1-.18-.54l2.93-5.79a.36.36,0,0,1,.54-.18L85.3,188a.34.34,0,0,1,.17.53l-2.92,5.8A.35.35,0,0,1,82,194.48Z"></path>{" "}
                  <path d="M94.23,171.26l-45-32.75a.35.35,0,0,1-.09-.56l4.72-6.48a.38.38,0,0,1,.49-.14l47.45,11,.24-.33a194.07,194.07,0,0,1-16.7-11l-20-14.58a.36.36,0,0,1-.09-.56L69,110.74a.35.35,0,0,1,.56-.09l45,32.76a.35.35,0,0,1,.09.55l-4.72,6.49a.39.39,0,0,1-.5.13L62.35,140l-.28.39a122.43,122.43,0,0,1,15,9.57L98.43,165.5a.36.36,0,0,1,.09.56l-3.73,5.12A.36.36,0,0,1,94.23,171.26Z"></path>{" "}
                  <path d="M112.45,67.59a.44.44,0,0,1,.34.12l3.58,3.9a.46.46,0,0,1,.09.34.43.43,0,0,1-.13.34L105.7,82l33.65,36.68a.36.36,0,0,1,0,.57l-4.84,4.44a.36.36,0,0,1-.57,0L100.27,87,89.64,96.78a.42.42,0,0,1-.68,0l-3.58-3.9a.42.42,0,0,1,0-.67l26.7-24.5A.45.45,0,0,1,112.45,67.59Z"></path>{" "}
                  <path d="M140.82,55l9.66,15.42,17-10.64a.35.35,0,0,1,.55.13l2.9,4.62a.34.34,0,0,1-.13.54l-17,10.65,10.34,16.5,18.34-11.49a.35.35,0,0,1,.55.13l2.9,4.61a.36.36,0,0,1-.13.56l-24.18,15.15a.35.35,0,0,1-.55-.13L131.53,53.94a.35.35,0,0,1,.13-.55l24.18-15.15a.35.35,0,0,1,.55.13l2.85,4.55c.17.27.14.48-.08.62Z"></path>{" "}
                  <path d="M232.88,66.15a.35.35,0,0,1-.2.25l-6.37,2.43a.42.42,0,0,1-.56-.12c-.62-.57-1.39-2.07-2.33-4.52L219.13,53c-1-2.55-2.23-4.07-3.76-4.57s-3.7-.22-6.5.85l-10.7,4.09,8.61,22.54a.35.35,0,0,1-.23.51l-6.07,2.32a.35.35,0,0,1-.52-.23l-19.85-52a.35.35,0,0,1,.23-.52l17.22-6.58q7-2.68,11.54-1.45c3,.83,5.25,3.18,6.74,7.08L218,30.65a12,12,0,0,1,.77,7.43,8.49,8.49,0,0,1-3.66,5l.14.37a9.08,9.08,0,0,1,6.18.56q2.61,1.3,4.15,5.36l3.81,10a21.84,21.84,0,0,0,3.39,6.42A.4.4,0,0,1,232.88,66.15ZM209.49,28.84c-.9-2.35-2.13-3.76-3.69-4.25s-3.74-.21-6.53.86L189,29.37l7,18.2,10.71-4.1q3.83-1.45,5-3.59t-.12-5.57Z"></path>{" "}
                  <path d="M248.34,61.94,239.55,7a.35.35,0,0,1,.33-.45l7.92-1.27a.36.36,0,0,1,.44.25l25.92,41.23.4-.06a197.08,197.08,0,0,1-4.11-19.56L266.54,2.7a.35.35,0,0,1,.33-.46l6.25-1a.35.35,0,0,1,.46.33l8.8,54.94A.35.35,0,0,1,282,57l-7.91,1.27a.39.39,0,0,1-.45-.25L247.77,17.3l-.47.08a123.23,123.23,0,0,1,3.92,17.39l4.17,26.05a.35.35,0,0,1-.34.45l-6.25,1A.36.36,0,0,1,248.34,61.94Z"></path>{" "}
                  <path d="M336.12,57.37l-6.73-.26c-.27,0-.39-.15-.39-.42l-3-12.95L306.91,43l-4,12.68a.36.36,0,0,1-.12.27.38.38,0,0,1-.29.11l-6.73-.26c-.32,0-.42-.15-.3-.41L312.4.38a.36.36,0,0,1,.42-.38l10.65.41c.22,0,.37.15.46.42L336.46,57C336.55,57.25,336.44,57.38,336.12,57.37ZM324.45,37.51l-4.61-19.75c-.23-1.08-.48-2.68-.74-4.81s-.45-3.93-.56-5.43l-1.44-.06c-.21,1.5-.54,3.29-1,5.38s-.79,3.67-1.1,4.73l-6.12,19.34Z"></path>{" "}
                  <path d="M388.82,10.64a.47.47,0,0,1,.09.34l-1.08,5.18a.47.47,0,0,1-.23.28.43.43,0,0,1-.34.1l-14.12-3L362.92,62.29a.35.35,0,0,1-.47.31L356,61.25a.36.36,0,0,1-.31-.47l10.22-48.72-14.12-3a.42.42,0,0,1-.37-.57l1.08-5.18a.43.43,0,0,1,.57-.37l35.46,7.43A.5.5,0,0,1,388.82,10.64Z"></path>{" "}
                  <path d="M390.22,70,409,17.65a.35.35,0,0,1,.51-.24l6.11,2.19a.36.36,0,0,1,.24.52L397.08,72.47a.35.35,0,0,1-.51.24l-6.11-2.19A.35.35,0,0,1,390.22,70Z"></path>{" "}
                  <path d="M419.59,77.83q-2.26-6.48,2.27-14.78l9.75-17.88q4.53-8.3,11.21-9.91T457,37.73q7.59,4.14,9.78,10.59T464.4,63.07l-9.75,17.87q-4.53,8.3-11.14,9.94t-14.2-2.5Q421.84,84.32,419.59,77.83Zm21.63,6.28q4.14-1.39,7.22-7l9.37-17.17q3.1-5.7,2-9.89T454,43.21Q449.17,40.6,445,42c-2.77.92-5.17,3.27-7.21,7l-9.38,17.17q-3.06,5.63-2,9.86t5.85,6.85Q437.09,85.51,441.22,84.11Z"></path>{" "}
                  <path d="M459.94,106.07l36.21-42.24a.35.35,0,0,1,.56,0L502.8,69a.37.37,0,0,1,.09.5L488.22,116l.3.25a191.34,191.34,0,0,1,12.26-15.77L516.9,81.62a.35.35,0,0,1,.56,0l4.81,4.12a.36.36,0,0,1,0,.57l-36.2,42.23a.36.36,0,0,1-.57,0l-6.08-5.21a.39.39,0,0,1-.1-.51l14.25-46.06-.36-.31a123.6,123.6,0,0,1-10.73,14.24l-17.16,20a.36.36,0,0,1-.57,0l-4.8-4.12A.35.35,0,0,1,459.94,106.07Z"></path>{" "}
                  <path d="M520.08,169.86l-4.19-5.27A.35.35,0,0,1,516,164l7.84-10.74-11.88-14.93-12.23,5.22a.39.39,0,0,1-.3.08.36.36,0,0,1-.26-.14l-4.19-5.27c-.21-.26-.17-.42.11-.5l52.76-23a.36.36,0,0,1,.57.06l6.63,8.34a.52.52,0,0,1,0,.63l-34.4,46.1C520.45,170.12,520.28,170.12,520.08,169.86Zm7.45-21.8,12-16.37q1-1.32,3.16-3.69t3.76-4l-.9-1.13q-1.9,1.21-4.71,2.78c-1.86,1-3.3,1.79-4.3,2.24l-18.65,8Z"></path>{" "}
                  <path d="M545.07,205.32l-4.7,2.41c-.29.15-.49.1-.62-.14l-13-25.39a.35.35,0,0,1,.17-.54l49.5-25.37a.35.35,0,0,1,.54.17l3,5.78a.35.35,0,0,1-.17.54l-44.3,22.7,9.88,19.26C545.44,205,545.36,205.17,545.07,205.32Z"></path>{" "}
                  <path d="M564.59,235.75l7-1.87c.15,0,.26,0,.32.25l1.81,6.81c.05.21,0,.33-.15.37l-7,1.88a.28.28,0,0,1-.39-.23l-1.81-6.82A.28.28,0,0,1,564.59,235.75Z"></path>{" "}
                  <path d="M562.22,286.56q3.16-4.63,10.54-4.94l6.56-.27a.35.35,0,0,1,.42.38l.28,6.48a.36.36,0,0,1-.39.42l-6.32.27c-2.89.12-4.92,1-6.11,2.71s-1.7,4.28-1.55,7.8.75,6.23,1.78,7.79,2.85,2.29,5.47,2.17l4.32-.18a6.66,6.66,0,0,0,4.23-1.5A10.22,10.22,0,0,0,584,304q1-2.33,2.32-6.8a73.51,73.51,0,0,1,3-9.31,13,13,0,0,1,3.83-5.18,11.1,11.1,0,0,1,6.61-2.13l4.32-.18q6.57-.28,9.56,4.08t3.36,12.86c.24,5.61-.7,9.93-2.82,13s-5.58,4.69-10.38,4.9l-6.17.26a.36.36,0,0,1-.42-.38l-.27-6.49a.36.36,0,0,1,.38-.42l5.93-.25c2.83-.12,4.82-1,6-2.58s1.66-4.19,1.51-7.77-.72-6.21-1.69-7.75-2.69-2.25-5.15-2.14l-3.68.15a5.66,5.66,0,0,0-3.75,1.44,9.8,9.8,0,0,0-2.27,3.31q-.84,2-2.41,6.6a8.73,8.73,0,0,1-.28.86,3.37,3.37,0,0,0-.21.69,77.64,77.64,0,0,1-3.19,8.87,12.86,12.86,0,0,1-3.73,4.82,10.79,10.79,0,0,1-6.37,2l-5.29.23q-6.79.29-9.92-4.12t-3.47-12.88Q559.05,291.19,562.22,286.56Z"></path>{" "}
                  <path d="M608.1,370.79q-3.93,4-11.23,2.92l-7.3-1q-7.22-1-9.79-5.94t-1.37-13.31l1.36-9.45-20.63-3a.36.36,0,0,1-.34-.46l.93-6.42a.36.36,0,0,1,.45-.35l55.06,7.93a.35.35,0,0,1,.34.45l-2.34,16.26Q612,366.82,608.1,370.79Zm-10.51-4.34q4.36.63,6.53-1.49c1.45-1.41,2.42-3.89,2.93-7.43l1.36-9.44L586,344.85l-1.36,9.44q-.76,5.32.68,8T591,365.5Z"></path>{" "}
                  <path d="M553.73,387.16q6-3.29,14.95-.17l19.22,6.72q8.93,3.12,11.6,9.45t-.13,14.35q-2.86,8.17-8.86,11.37t-14.94.09l-19.21-6.71q-8.94-3.13-11.63-9.38t.16-14.42Q547.69,390.45,553.73,387.16ZM551,409.53q2.06,3.86,8.1,6L577.6,422q6.14,2.15,10.1.39t5.77-6.9q1.8-5.15-.25-9t-8.1-6L566.65,394q-6-2.11-10-.37t-5.81,6.88Q549,405.67,551,409.53Z"></path>{" "}
                  <path d="M514.1,461.61a.33.33,0,0,1,0-.32l3.5-5.84a.44.44,0,0,1,.53-.25q1.25.09,4.61,2.12l10.31,6.19c2.34,1.4,4.26,1.82,5.78,1.27s3-2.12,4.59-4.68l5.9-9.83-20.69-12.42a.36.36,0,0,1-.14-.55l3.34-5.56a.35.35,0,0,1,.55-.14l47.7,28.63a.35.35,0,0,1,.14.54l-9.49,15.81c-2.59,4.31-5.31,7.07-8.19,8.27s-6.09.74-9.67-1.41l-5.15-3.09a12.12,12.12,0,0,1-5.2-5.37,8.42,8.42,0,0,1-.2-6.19l-.35-.21a9.17,9.17,0,0,1-5.2,3.37q-2.87.57-6.58-1.65l-9.14-5.49a21.88,21.88,0,0,0-6.64-3A.41.41,0,0,1,514.1,461.61Zm41.44,14.92q3.23,1.94,5.52,1.07t4.61-4.71l5.65-9.42-16.7-10-5.9,9.82q-2.1,3.51-1.73,5.93t3.53,4.32Z"></path>{" "}
                  <path d="M525,534.75a.52.52,0,0,1-.35-.09l-3.92-3.55a.46.46,0,0,1-.13-.34.43.43,0,0,1,.09-.34l9.68-10.71L493.4,486.34a.35.35,0,0,1,0-.56l4.41-4.88a.35.35,0,0,1,.56,0l36.92,33.38,9.68-10.7a.42.42,0,0,1,.68,0l3.92,3.55a.42.42,0,0,1,0,.67l-24.3,26.88A.46.46,0,0,1,525,534.75Z"></path>{" "}
                  <path d="M473.48,508.86q5.63,0,10,5.95l3.91,5.28a.36.36,0,0,1-.08.57l-5.22,3.86a.36.36,0,0,1-.56-.08l-3.77-5.09q-2.58-3.47-5.66-3.53c-2.06,0-4.5,1-7.34,3.09s-4.73,4.11-5.45,5.84-.29,3.64,1.27,5.75l2.58,3.47a6.58,6.58,0,0,0,3.61,2.66,9.94,9.94,0,0,0,4.52,0,68.31,68.31,0,0,0,6.93-1.89,74.53,74.53,0,0,1,9.43-2.7,13.07,13.07,0,0,1,6.43.27,11.08,11.08,0,0,1,5.47,4.28l2.58,3.48q3.92,5.26,2,10.2t-8.75,10q-6.76,5-12.34,5t-9.88-5.85l-3.67-5a.37.37,0,0,1,.08-.57l5.21-3.86a.35.35,0,0,1,.56.08l3.54,4.77q2.53,3.4,5.49,3.51t7.28-3.1q4.38-3.25,5.47-5.75c.72-1.67.35-3.5-1.11-5.47l-2.19-3a5.71,5.71,0,0,0-3.3-2.3,9.84,9.84,0,0,0-4,0q-2.1.4-6.82,1.71c-.32.11-.61.19-.86.25a3.11,3.11,0,0,0-.69.21,77.92,77.92,0,0,1-9.15,2.34,12.87,12.87,0,0,1-6.07-.39,10.84,10.84,0,0,1-5.26-4.13l-3.15-4.25Q450.42,529,452.33,524t8.72-10.11Q467.88,508.84,473.48,508.86Z"></path>{" "}
                  <path d="M421.13,554.66l2.83,6.73c.06.15,0,.26-.2.34l-6.51,2.74c-.19.08-.32,0-.39-.1L414,557.65a.29.29,0,0,1,.18-.42l6.5-2.74A.29.29,0,0,1,421.13,554.66Z"></path>{" "}
                  <path d="M373,556.77l7.61,55.1a.34.34,0,0,1-.34.45l-9.13,1.27c-.16,0-.3-.07-.44-.27l-13.57-29.11a85.63,85.63,0,0,1-4.63-13.6l-.63.08a74,74,0,0,1-.7,14.34L346,616.73c-.08.23-.2.35-.36.38l-9.13,1.26A.36.36,0,0,1,336,618l-7.61-55.11a.35.35,0,0,1,.34-.45l6.27-.86a.35.35,0,0,1,.46.34l3.3,23.9q.66,4.85,1.19,10.35c.34,3.68.58,6.74.7,9.21l.64-.09,6.23-45.12a.25.25,0,0,1,.08-.25.42.42,0,0,1,.27-.12l5.48-.76a.48.48,0,0,1,.29,0,.3.3,0,0,1,.15.22L372,601.09l.64-.09q-1.74-7.29-3.4-19.36l-3.3-23.89a.36.36,0,0,1,.34-.46l6.27-.86A.35.35,0,0,1,373,556.77Z"></path>{" "}
                  <path d="M275,559.42l6.71.53a.36.36,0,0,1,.37.43l2.5,13.07,19,1.5,4.53-12.5a.37.37,0,0,1,.15-.27.34.34,0,0,1,.28-.1l6.72.53c.32,0,.41.17.29.43l-19.19,54.28a.36.36,0,0,1-.43.37l-10.63-.85c-.21,0-.36-.16-.45-.44l-10.22-56.61C274.58,559.52,274.7,559.39,275,559.42Zm10.85,20.32,3.8,19.92c.18,1.09.36,2.69.54,4.82s.29,4,.33,5.46l1.44.11c.28-1.47.67-3.26,1.19-5.33s.95-3.63,1.3-4.68l6.9-19.07Z"></path>{" "}
                  <path d="M261.67,557.16l-14.91,53.59a.36.36,0,0,1-.49.28l-7.73-2.16a.38.38,0,0,1-.3-.41l-6.36-48.28-.39-.11a194.75,194.75,0,0,1-4.43,19.49l-6.63,23.86a.36.36,0,0,1-.5.28l-6.1-1.7a.35.35,0,0,1-.28-.49l14.91-53.59a.36.36,0,0,1,.5-.28l7.72,2.15a.37.37,0,0,1,.3.41L243.57,598l.47.14a123.36,123.36,0,0,1,3.69-17.45l7.06-25.41a.36.36,0,0,1,.5-.27l6.1,1.69A.36.36,0,0,1,261.67,557.16Z"></path>{" "}
                  <path d="M179.87,525l6,3a.36.36,0,0,1,.18.54l-2.57,13.05,17.07,8.52,8.88-9.91a.43.43,0,0,1,.23-.19.41.41,0,0,1,.31,0l6,3c.29.15.32.31.11.5L178,586.68a.36.36,0,0,1-.54.18L168,582.1a.52.52,0,0,1-.25-.57l11.71-56.33C179.43,524.91,179.59,524.84,179.87,525Zm2.46,22.91-3.93,19.9c-.23,1.07-.67,2.63-1.3,4.68s-1.21,3.77-1.73,5.18l1.29.64q1.22-1.9,3.09-4.5c1.26-1.74,2.24-3,3-3.86l13.53-15.1Z"></path>{" "}
                  <path d="M124.93,529.73l-3.42,4.45a8.1,8.1,0,0,0-1.76,6.89c.53,2.39,2.16,4.64,4.92,6.76q4.44,3.42,8.72,2.87t8.17-5.65l12.32-16q3.9-5.09,3.35-9.36t-5-7.69c-2.67-2.05-5.27-3-7.8-2.86a8.16,8.16,0,0,0-6.25,3.39l-6.11,7.94,7.88,6c.22.17.22.38,0,.63l-3.18,4.13c-.22.3-.44.36-.66.2l-13.34-10.26c-.21-.16-.2-.39,0-.69L141,496.82a.35.35,0,0,1,.56-.07l3.88,3a.35.35,0,0,1,.07.56l-2.74,4.87.45.34a15.16,15.16,0,0,1,7.07-.58,15.76,15.76,0,0,1,7.23,3.29q6.23,4.79,7.14,11.15t-5,14.06L147.3,549.56q-5.91,7.7-12.72,8.12t-13.72-4.89q-6.61-5.09-8.14-11.11t2.77-11.63l3.66-4.76a.35.35,0,0,1,.56-.07l5.15,3.95A.36.36,0,0,1,124.93,529.73Z"></path>{" "}
                  <path d="M86.32,511.86l13.66-12-13.23-15a.36.36,0,0,1,0-.57l4.09-3.6a.36.36,0,0,1,.57,0l13.23,15.05,14.63-12.86L105,466.61a.36.36,0,0,1,0-.57l4.1-3.6a.35.35,0,0,1,.56,0l18.84,21.43a.35.35,0,0,1,0,.56L86.74,521.2a.36.36,0,0,1-.57,0L67.33,499.73a.35.35,0,0,1,0-.56l4-3.55c.24-.21.45-.22.63,0Z"></path>{" "}
                  <path d="M99.63,450.1,51,477.19a.35.35,0,0,1-.54-.16L46,469a.48.48,0,0,1,.08-.51L68.3,445.26a85.71,85.71,0,0,1,11-9.25l-.32-.55A74.74,74.74,0,0,1,65.37,440L34,446.7a.47.47,0,0,1-.47-.19L29,438.46a.36.36,0,0,1,.15-.55l48.59-27.09a.36.36,0,0,1,.55.16l3.08,5.53a.35.35,0,0,1-.15.54L60.13,428.8q-4.26,2.38-9.22,4.87c-3.29,1.65-6.07,3-8.32,4l.31.57,44.31-10.58a.26.26,0,0,1,.27,0,.48.48,0,0,1,.2.2l2.7,4.83a.51.51,0,0,1,.06.29.26.26,0,0,1-.15.22L58,465.25l.31.56q6.16-4.26,16.8-10.19l21.07-11.75a.36.36,0,0,1,.55.15l3.08,5.53A.36.36,0,0,1,99.63,450.1Z"></path>{" "}
                  <path d="M21.75,401.23l17.4-5.31L33.3,376.75a.35.35,0,0,1,.27-.5l5.21-1.59a.35.35,0,0,1,.5.27l5.85,19.16,18.63-5.69-6.32-20.7a.35.35,0,0,1,.26-.5l5.22-1.59a.36.36,0,0,1,.5.27l8.33,27.29a.35.35,0,0,1-.27.5l-53.2,16.25a.36.36,0,0,1-.5-.27L9.45,382.36a.35.35,0,0,1,.27-.5l5.13-1.57c.31-.09.5,0,.58.24Z"></path>
                  <path d="M59.65,350.1,4.33,355.92a.36.36,0,0,1-.44-.36l-.83-8a.37.37,0,0,1,.27-.43L45.9,323.5l0-.4a195.19,195.19,0,0,1-19.75,3L1.48,328.73a.34.34,0,0,1-.44-.35l-.67-6.3a.36.36,0,0,1,.36-.44l55.32-5.81a.35.35,0,0,1,.44.35l.84,8a.37.37,0,0,1-.28.43l-42,23.69,0,.47a126,126,0,0,1,17.58-3L58.91,343a.35.35,0,0,1,.44.36l.66,6.29A.35.35,0,0,1,59.65,350.1Z"></path>
                  <path d="M3.24,261.31a.5.5,0,0,1,.33-.13l5.27.45a.48.48,0,0,1,.31.18.46.46,0,0,1,.13.34L8.07,276.52l49.6,4.19a.36.36,0,0,1,.36.44l-.55,6.55a.35.35,0,0,1-.43.36l-49.6-4.19L6.23,298.25a.42.42,0,0,1-.51.44l-5.28-.45a.43.43,0,0,1-.44-.52l3.05-36.1A.53.53,0,0,1,3.24,261.31Z"></path>{" "}
                  <path d="M53.12,230l-7-2.15c-.16-.05-.2-.17-.14-.38l2.08-6.73c.07-.21.17-.29.33-.24l7,2.15a.29.29,0,0,1,.21.4l-2.08,6.74A.28.28,0,0,1,53.12,230Z"></path>
                </g>
              </svg>
            </div>
            <div className="c-circles__wrapper-circle-bg">
              <div className="c-circles__circle-bg"></div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="staff" ref={staffRef}>
        <div className="staff__wrapper">
          <div className="staff__box-image">
            <div className="staff__box__wrapper-image-top">
              <img
                className="staff__box-image-top"
                src="/bg-top.svg"
                width="250"
                height="150"
                loading="lazy"
                alt="dots"
              />
            </div>
          </div>
          <div className="staff__box-content">
            <div className="staff__title__wrapper">
              <div className="staff__title">
                <span>Découvrez le staff</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="organigramme">
            <div className="tree">
              <TeamOffice></TeamOffice>
            </div>
            <div style={{ marginBottom: "0px" }} className="tree">
              <TeamSki></TeamSki>
            </div>
          </div>
        </div>
      </section>
      <div className="staff2">
        <div className="staff__box-image">
          <div className="staff__box__wrapper-image-bottom">
            <img
              className="staff__box-image-bottom"
              src="/bg-bottom.svg"
              width="250"
              height="150"
              loading="lazy"
              alt="dots"
            />
          </div>
        </div>
        <div className="organigramme">
          <div className="tree">
            <TeamEvent></TeamEvent>
          </div>
          <div className="tree">
            <TeamCom></TeamCom>
          </div>
          <div className="tree">
            <TeamPart></TeamPart>
          </div>
          <div style={{ marginBottom: "160px" }} className="tree">
            <TeamGoodies></TeamGoodies>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
