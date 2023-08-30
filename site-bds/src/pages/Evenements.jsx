import React, { useEffect, useRef } from "react";
import Navbar from "../components/NavbarSki";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import '../index.css';
import ImageCarousel from './ImageCarousel';


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


const InfoStation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
  >
    <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Domaine skiable</span>
            <div className="station__pic">
              <img src="/Skieur.svg" />
            </div>
            <span className="station__name">200km</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Nombre de piste</span>
            <div className="station__pic">
              <img src="/Piste.svg" />
            </div>
            <span className="station__name">92</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Piste la plus longue</span>
            <div className="station__pic">
              <img src="/PisteLongue.svg" />
            </div>
            <span className="station__name">16km</span>
          </StyledNode>
        }
      />
      
      
  </Tree>
);

const InfoStationPiste = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
  >
    <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Pistes Vertes</span>
            <div className="station__pic">
              <img src="/PisteVerte.svg" />
            </div>
            <span className="station__name">14%</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Pistes Bleues</span>
            <div className="station__pic">
              <img src="/PisteBleu.svg" />
            </div>
            <span className="station__name">54%</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Pistes Rouges</span>
            <div >
              <img src="/PisteRouge.svg" />
            </div>
            <span className="station__name">19%</span>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <span className="station__name">Pistes Noires</span>
            <div >
              <img src="/PisteNoir.svg" />
            </div>
            <span className="station__name">12%</span>
          </StyledNode>
        }
      />
      
      
  </Tree>
);

const PlanStation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Plan des pistes</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          
          <div className="plan__station__pic" style={{
              display: "flex",
              flexDirection: "row",
              gap: "8%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}>
            <img src="/img/2023-Hiver-Plan-des-pistes.jpg" />
          </div>
        </StyledNode>
      }
    >
    </TreeNode>
  </Tree>
);

const VideoStation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Vidéo de présentation</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          <div class="container">
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/iDsEdk7zUww?si=yo0CdzWxzQ6pnUh1"></iframe>
          </div>
        </StyledNode>
      }
    >
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
              className="station__pic"
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
              className="station__pic"
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
            <div className="station__pic">
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
              <div className="station__pic">
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
            <div className="station__pic">
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

const PresentationStation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div className="content-style">
              <h2>Le Domaines des deux alpes</h2>
              <p>
                Le domaine skiable des Deux Alpes est l'un des plus grands et des plus renommés en France. Situé dans les Alpes françaises, il offre une expérience exceptionnelle pour les amateurs de sports d'hiver.
                <br />
                Le domaine skiable s'étend sur environ 200 kilomètres de pistes, avec des altitudes allant de 1 300 à 3 600 mètres. Cela garantit des conditions de neige variées et des panoramas spectaculaires.
                <br />
                Les Deux Alpes proposent des pistes adaptées à tous les niveaux de skieurs, des débutants aux experts. On y trouve des pistes vertes et bleues pour les novices, ainsi que des pistes rouges et noires pour les skieurs plus expérimentés. Mais surtout l'un des plus hauts secteur pour débutant situé à plus de 2100m d'altitude.
                <br />
                Le snowpark des Deux Alpes est l'un des plus grands d'Europe, avec une grande variété d'obstacles, de sauts et de modules pour les snowboarders et les freestylers. Il attire des riders du monde entier.
                <br />
                Le glacier de Mont-de-Lans, accessible par remontées mécaniques, permet de skier toute l'année, faisant des Deux Alpes une destination unique pour les amateurs de ski estival.
                <br />
                En dehors des activités de ski, la station propose une vie nocturne animée avec des bars, des restaurants et des événements tout au long de la saison.
                </p>
            </div>
        </StyledNode>
      }
    />
  </Tree>
);

const PresentationGlacier = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Le glacier</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <span className="staff__name" >Le Glacier de mont-de-lans</span>
          <div className="plan__station__pic" style={{
              display: "flex",
              flexDirection: "row",
              gap: "8%",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}>
              <img src="/img/Glacier.jpg" />
            </div>
          <div className="content-style">
              <h2>Les pistes les plus hautes de france</h2>
              <p>
                À une altitude impressionnante allant jusqu'à 3 600 mètres, ce glacier offre des conditions de neige optimales et une vue panoramique à couper le souffle sur les montagnes environnantes.
                <br />
                L'un des aspects les plus extraordinaires du glacier des Deux Alpes est sa possibilité de skier en été. Cette caractéristique unique en fait l'une des destinations de ski estival les plus prisées en Europe.
                <br />
                Le glacier propose une variété de pistes adaptées à tous les niveaux de skieurs, des débutants aux experts.
                </p>
            </div>
        </StyledNode>
      }
    />
  </Tree>
);

export default function Accueil() {
  const aboutIntroRef = useRef(null);
  const heroBannerRef = useRef(null);
  const staffRef = useRef(null);
  const staffRef2 = useRef(null);

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  useEffect(() => {
    document.title = "Ski | BDS Polytech Tours";


    const aboutIntro = aboutIntroRef.current;
    const heroBanner = heroBannerRef.current;
    const staff = staffRef.current;
    const staff2 = staffRef2.current;

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
      ".staff__wrapper__2",
      { "--val2": 1 },
      {
        "--val2": 100,
        ease: "power2.inOut",
        lazy: false,
        scrollTrigger: {
          trigger: staff2,
          start: "5% 5%",
          end: () =>
            "+=" +
            (100 -
              parseFloat(getComputedStyle(staff2).getPropertyValue("--val2"))) +
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
          end: "50%",
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
              2 ALPES 2024
            </h1>
            <div className="subtitle" id="homeSubTitle">
              <p>Découvre notre voyage au ski !</p>
            </div>
          </div>

          <img className="sportifs" src="/img/Les2Alpes.jpg" />
        </div>
      </section>
      <div className="about-intro panel" ref={aboutIntroRef}>
        <div className="slogan__lines">
          <div className="slogan__line ">
            <span className="slogan__line-text ">Une semaine</span>
          </div>
          <div className="slogan__line slogan__line--2">
            <span className="slogan__line-text">Au ski</span>
          </div>
          <div className="slogan__line">
            <span className="slogan__line-text">du 20 au 27 avril</span>
          </div>
        </div>
        <div>
          <img src="logo2Alpes.png" className="logoBDSV" alt="Logo BDS" />
        </div>
      </div>
      {/* A propos */}
      <section className="about">
        <div className="content">
          <div className="content__container">
            <div className="content-style">
              <h2>Le ski à Polytech Tours</h2>
              <p>
                Organisé depuis quasiment une dixaine de fois depuis 2001, 
                le ski à Polytech Tours est devenue une insitution.
                C'est donc comme chaque année depuis plus de 7 ans que nous organisons,
                à notre tour cette semaine de ski.
                <br />
               Pour résumer c'est un voyage organiser par le BDS pour les membres de l'école,
               pendant une semaine (du 20 au 27 Avril 2024) dans la station des Deux Alpes.
                <br />
                Ce voyage est organisé à 100% par nos équipes et accueillera les débutants aux sports d'hivers
                tout comme les experts.
                <br />
                L'inscription à ce voyage t'offre une semaine de ski tout frais payer (Logement, Déplacement, 
                Forfait de ski, Location de matériel, hors nouritture)
                D'autre option seront disponible lors de l'inscription.
              </p>
              <p> BDS'ment 💜 </p>
              <span className="signe">L'équipe</span>
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
                        src="/img/Ski1.jpg"
                        alt="Ski1"
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
                      <img className="img-main" src="/img/Ski2.jpg" alt="" />
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
                      <img className="img-main" src="/img/Ski3.jpg" alt="" />
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
                      <img className="img-main" src="/img/Ski4.jpg" alt="" />
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
                <span>Découvre les 2 ALPES</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="organigramme">
            <div className="tree">
              <VideoStation />
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
            <PlanStation></PlanStation>
            <InfoStation></InfoStation>
            <InfoStationPiste></InfoStationPiste>
          </div>
          <div className="tree">
            <PresentationStation></PresentationStation>
          </div>

        </div>
      </div>
      <section className="staff3" ref={staffRef2}>
        <div className="staff__wrapper__2">
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
              <div className="staff__title__2">
                <span>De la neige en Avril ?</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="organigramme">
            <div className="tree">
              <ImageCarousel />
              <PresentationGlacier></PresentationGlacier>
            </div>
          </div>
        </div>

      </section>
      <Footer></Footer>
    </main>
  );
}
