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
import ImageCarouselAppartement from './ImageCarouselAppartement';


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

const PhotoLogement = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Le logement</span>
      </div>
    }
  >
  </Tree>
);


const PhotoStation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Photo de la station en Avril</span>
      </div>
    }
  >
  </Tree>
);

const ListePrestation = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Les préstations</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
            <div className="content-style">
              <h2>• Le Transport en bus (aller/retour)</h2>
              <h2>• L'hébergement (7 nuits du Samedi au Samedi)</h2>
              <h2>• Le forfait Skipass (6 jours du Dimanche au Vendredi)</h2>
              <h2>• Le matériel de location (pack Bronze du Dimanche au Vendredi)</h2>
              <h2>• Des Goodies </h2>
              <h2>• Les draps </h2>
            </div>
        </StyledNode>
      }
    >
    </TreeNode>
  </Tree>
);

const ListeAvantage = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Les Animations</span>
      </div>
    }
  >
    <TreeNode
      label={
        <StyledNode>
            <div className="content-style">
              <h2>• Une demi journée de cours de ski offert</h2>
              <h2>• Le Bracelet avantage station : réduction dans les bars/restaurants/animations</h2>
              <h2>• Le WelcomePack : Petit Déjeuner d'accueil, Pot d'accueil, barbecue</h2>
              <h2>• La beercard : une biere par personner par jour dans le bar partenaire</h2>
            </div>
        </StyledNode>
      }
    >
    </TreeNode>
  </Tree>
);

const ListeOptions = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Les Options</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div className="content-style">
            <h2>- Le matériel est compris dans le prix, une augmentation de gamme est possible :</h2>
          </div>
          <div className="plan__station__pic" style={{
              display: "flex",
              flexDirection: "row",
              gap: "8%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}>
              <img src="/img/options/gammeski.png" />
            </div>
          <div className="content-style">
              <h2>- Déductions du matériel de location : -19€</h2>
              <h2>- Location de casque: 25€</h2>
              <h2>- Les assurances :</h2>
          </div>
          <div className="plan__station__pic" style={{
              display: "flex",
              flexDirection: "row",
              gap: "8%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}>
              <img src="/img/options/assurance.png" />
            </div>
        </StyledNode>
      }
    />
  </Tree>
);

const Prix = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga">
        <span>Le Prix de base : 475€</span>
      </div>
    }
  >
    {/* Responsable */}
    <TreeNode
      label={
        <StyledNode>
          <div className="content-style">
            <h2>Intéresser ?</h2>
            <a className="lbl-orga__no" href="https://forms.gle/K9dmgwhq6WUu1fga6">Dit le nous ici !</a>
          </div>
        </StyledNode>
      }
    />
  </Tree>
);

const LienWebcam = () => (
  <Tree
    lineWidth={"0px"}
    lineColor={"white"}
    lineBorderRadius={"0px"}
    label={
      <div className="lbl-orga__no">
        <a href="https://www.les2alpes.com/hiver/live/webcams/">Ici lien vers les webcams !</a>
      </div>
    }
  >
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
  const staffRef3 = useRef(null);

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
    const staff3 = staffRef3.current;

    gsap.set(aboutIntro, { y: "100%", opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 10, ease: "power2.inOut" }, // Réduire la durée de l'animation à 0.5 seconde
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
               pendant une semaine (du 20 au 27 Avril 2024, pendant les vacances scolaires) dans la station des Deux Alpes.
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

        <img src="/img/skieur.png" className="about__footer-img" alt="" />
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
            <div className="tree">
              <PlanStation></PlanStation>
              <InfoStation></InfoStation>
              <InfoStationPiste></InfoStationPiste>
              <PresentationStation></PresentationStation>
            </div>

          </div>
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
      </section>
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
              <PhotoStation/>
            </div>
            <div className="tree">
              <ImageCarousel/>
            </div>
            <div className="tree">
              <LienWebcam />
            </div>
            <div className="tree">
              <PresentationGlacier></PresentationGlacier>
            </div>
          </div>
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
      </section>
      <section className="staff4" ref={staffRef3}>
        <div className="staff__wrapper__3">
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
                <span>nous te proposons</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="organigramme">
            <div className="tree">
              <PhotoLogement/>
            </div>
            <div className="tree">
              <ImageCarouselAppartement/>
            </div>
            <div className="tree">
              <ListePrestation />
            </div>
            <div className="tree">
              <ListeAvantage />
            </div>
            <div className="tree">
              <ListeOptions/>
            </div>
            <div className="tree">
              <Prix/>
            </div>
          </div>
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
      </section>
      <Footer></Footer>
    </main>
  );
}
