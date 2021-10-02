import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

//images 
import google from '../../assets/img/app/googleplay.png';
import appStore from '../../assets/img/app/appstore.png';
import footerLogo from "../../assets/img/footer-logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer className="footer" style={{zIndex: '92222'}}>
        
        <div className="footer-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    
                        <div className="footer-widget footer-about">
                            <Link to='/'>
                            <div className="footer-logo">
                                <img src={footerLogo} alt="logo"/>
                            </div>
                            </Link>
                            <div className="footer-about-content">
                                <h5>Medatu Solutions Private Limited</h5>
                                <h5>
                                    <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;
                                    +91 XXXXXXXXXX
                                </h5>
                                <h5>
                                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                                    care@medatu.com
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Company</h2>
                        <ul>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/our-services'>Our Services</Link></li>
                        <li><Link to="/register">How It Works</Link></li>
                        <li><Link to='/faq'>FAQs</Link></li>
                        <li><Link to="/register">Careers</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For People</h2>
                        <ul>
                        <li><Link to="/search">Language</Link></li>
                        <li><Link to="/login">Speciality</Link></li>
                        <li><Link to="/register">Ayurvedic Doctors</Link></li>
                        <li><Link to="/booking">Homeopathy Doctors</Link></li>
                        <li><Link to="/patient-dashboard">Book Lab Test</Link></li>
                        <li><Link to="/patient-dashboard">Help Centre</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Professionals</h2>
                        <ul>
                                <li><Link to="/search">Doctor’s Profile</Link>
                            </li>
                                <li><Link to="/login">Pharmacies</Link>
                            </li>
                                <li><Link to="/register">Diagnostic Labs</Link>
                            </li>
                            <li><Link to="/register">Hospitals</Link>
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    
                    <div className="footer-widget text-left footer-menu">
                        <h5>Get the Medatu App, now!</h5>
                        <img src={google} alt="" width={140} height={40} style={{margin: ".2rem"}}/>
                        <img style={{margin: ".2rem"}} src={appStore} alt="" width={140} height={40}/>
                    </div>
                        <br /><div className="social-icon">
                                    <ul>
                                        <li>
                                            <Link to="#/" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                        </li>
                                        <li>
                                            <Link to="#/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></Link>
                                        </li>
                                        <li>
                                            <Link to="#/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                                        </li>
                                        <li>
                                            <Link to="#/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></Link>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                    </div>
                    
            </div>
        </div>
    
        <div className="footer-bottom">
            <div className="container-fluid">
            
                <div className="copyright">
                    <div className="row">

                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0">&copy; 2021 Medatu. All rights reserved.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                         <div className="copyright-menu">
                                <ul className="policy-menu">
                                    <li><Link to="/term-condition">Terms of Use</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;