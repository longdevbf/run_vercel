import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faFacebookF, faYoutube, faTelegramPlane, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='full'>
      <div className="end">
        <div className="footer__navbar-linkus">
          <h2 className="footer__navbar-logo">HeritageChain</h2>
          {/* Feed back */}
          <div className="footer__feedback">
            <h3 className="footer__feedback-title">Feedback</h3>
            <form className="footer__feedback-form">
              <input 
                type="text" 
                placeholder="Your feedback..." 
                className="footer__feedback-input" 
              />
              <button 
                type="submit" 
                className="footer__feedback-submit"
              >
                Submit
              </button>
            </form>
          </div>
  
          <ul className="footer__navbar-info footer__navbar-info--noflex">
    <li>
      <a href="#" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faTwitter} />
      </a>
    </li>
    <li>
      <a href="#" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faLinkedinIn} />
      </a>
    </li>
    <li>
      <a href="#" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faFacebookF} />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faYoutube} />
      </a>
    </li>
    <li>
      <a href="#" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faTelegramPlane} />
      </a>
    </li>
    <li>
      <a href="#" className="footer__navbar-info--noflex">
        <FontAwesomeIcon className='ghc' icon={faDiscord} />
      </a>
    </li>
  </ul>
        </div>
        <div className="footer__navbar-link">
          <h3 className="footer__navbar-title">Link</h3>
          <ul className="footer__navbar-info">
            <li className="footer__social-link footer__social-link--flex">Overons</li>
            <li className="footer__social-link footer__social-link--flex">Counters</li>
            <li className="footer__social-link footer__social-link--flex">Blog</li>
            <li className="footer__social-link footer__social-link--flex">FAQ</li>
          </ul>
        </div>
        <div className="footer__navbar-company">
          <h3 className="footer__navbar-title">Company</h3>
          <ul className="footer__navbar-info">
            <li className="footer__social-link footer__social-link--flex">Terms & Conditions</li>
            <li className="footer__social-link footer__social-link--flex">Privacy Policy</li>
            <li className="footer__social-link footer__social-link--flex">Contact</li>
            <li className="footer__social-link footer__social-link--flex">Careers</li>
          </ul>
        </div>
        <div className="footer__navbar-getintouch fix">
          <h3 className="footer__navbar-title">Get in touch</h3>
          <ul className="footer__navbar-info">
            <li className="footer__social-link footer__social-link--flex">
              <i className="fas fa-map-marker-alt"></i> Crechterwoord K12 182 DK Alknjkcb
            </li>
            <li className="footer__social-link footer__social-link--flex">
              <i className="fas fa-phone"></i> 085-132567
            </li>
            <li className="footer__social-link footer__social-link--flex">
              <i className="fas fa-envelope"></i> info@heritagechain.net
            </li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
};

export default Footer;
