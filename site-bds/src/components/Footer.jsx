import { Link } from "react-router-dom";

function Footer() {
 const mail = ""
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer__top">
          <Link className="logo-link footer__logo-link ">
            <div className="logo__icon-wrapper footer__icon-wrapper">
              <img src="/logoBdsBlanc.png" alt=""  style={{width:"100%"}} />
            </div>
          </Link>
          <div className="network">
            <Link className="network__link"  to="https://www.facebook.com/bdspolytechtours" data-action="from-circle"><div className="network__icon-wrapper"><i className='bx bxl-facebook'></i></div></Link>
            <Link className="network__link" to="https://www.instagram.com/bdspolytechtours/" data-action="from-circle"><div className="network__icon-wrapper"><i className='bx bxl-instagram'></i></div></Link>
          </div>
          
        </div>
        <div className="email-box">
            <div className="email-box__moving-item">
              <div className="email-box__moving">
                <Link to={mail} className="email-box__big-link heading-xxl text-ouline">
                  <p className="email-box__big-text">polytechtours.bds@gmail.com</p>
                  <p className="email-box__big-text text-with-clip-path">polytechtours.bds@gmail.com</p>
                </Link>
                <Link to={mail} className="email-box__big-link heading-xxl text-ouline">
                  <p className="email-box__big-text">polytechtours.bds@gmail.com</p>
                  <p className="email-box__big-text text-with-clip-path">polytechtours.bds@gmail.com</p>
                </Link>
                <Link to={mail} className="email-box__big-link heading-xxl text-ouline">
                  <p className="email-box__big-text">polytechtours.bds@gmail.com</p>
                  <p className="email-box__big-text text-with-clip-path">polytechtours.bds@gmail.com</p>
                </Link>
                <Link to={mail} className="email-box__big-link heading-xxl text-ouline">
                  <p className="email-box__big-text">polytechtours.bds@gmail.com</p>
                  <p className="email-box__big-text text-with-clip-path">polytechtours.bds@gmail.com</p>
                </Link>
                <Link to={mail} className="email-box__big-link heading-xxl text-ouline">
                  <p className="email-box__big-text">polytechtours.bds@gmail.com</p>
                  <p className="email-box__big-text text-with-clip-path">polytechtours.bds@gmail.com</p>
                </Link>
              </div>
              <Link className="email-box__small-link">polytechtours.bds@gmail.com</Link>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="paragraph footer__copyright">
              <span className="copyright__span">© 2023 Polytech Tours. </span>
              <span className="copyright__span">Tous droits réservés</span>
            </p>
            <div className="footer__secondary-links-wrapper">
               <img src="/univpoly.png" className="univ" alt="univ" />
            </div>
          </div>
      </div>
    </footer>
  );
}
export default Footer;