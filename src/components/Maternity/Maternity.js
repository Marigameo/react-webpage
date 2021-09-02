import React from 'react';
import '../../components/assets/style.css'
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';

import sliderFour from "../../components/assets/img/slider/slider-4.jpg"
import iconOne from "../../components/assets/img/pregnancy-sec/icons/1.png"
import iconTwo from "../../components/assets/img/pregnancy-sec/icons/2.png"
import iconThree from "../../components/assets/img/pregnancy-sec/icons/2.png"
import iconFour from "../../components/assets/img/pregnancy-sec/icons/2.png"
import iconFive from "../../components/assets/img/pregnancy-sec/icons/5.png"
import iconSix from "../../components/assets/img/pregnancy-sec/icons/6.png"
import pregOne from "../../components/assets/img/pregnancy-sec/1.svg";
import pregTwo from "../../components/assets/img/pregnancy-sec/2.svg";
import pregThree from "../../components/assets/img/pregnancy-sec/2.svg";
import pregFour from "../../components/assets/img/pregnancy-sec/2.jpg";
import pregFive from "../../components/assets/img/pregnancy-sec/2.jpg";
import doctorOne from "../../components/assets/img/doctors/doctor-01.jpg"
import doctorTwo from "../../components/assets/img/doctors/doctor-02.jpg"
import doctorThree from "../../components/assets/img/doctors/doctor-03.jpg"
import doctorFour from "../../components/assets/img/doctors/doctor-04.jpg"
import doctorFive from "../../components/assets/img/doctors/doctor-05.jpg"
import bannerOne from "../../components/assets/img/banner-1.jpg"
// import Navbar from '../Navbar/Navbar1';
// import Footer from '../Footer';

const Maternity = () => {
    return ( 
        <>
        {/* <Navbar/> */}
<div className="main-wrapper">
		
        <div className="home-banner">
                        <a href="#/">
                            <img className="img-banner" src={sliderFour} alt=""/>
                        </a>
                   
                    <div className="container">
                        <div className="banner-wrapper" id="doc-form">
                        <h1 style={{letterSpacing: ".5px", color: "#fdfdfd", marginBottom: "1rem"}}>Plan you family with<br/>
                            bright future</h1>
                        <a href="search.html" className="btn banner-btn">MAKE APPOINTMENT</a>
                    </div>
            </div>
        </div>			
      
                <section className="brow-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconOne} alt=""/>
                                                </div>
                                                <h4>Birth Control</h4>
                                                <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconTwo} alt=""/>
                                                </div>
                                                <h4>Pregnancy Testing</h4>
                                                <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconThree} alt=""/>
                                                </div>
                                                <h4>Health Care</h4>
                                                <br/><br/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconFour} alt=""/>
                                                </div>
                                                <h4>Gynecology Services</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconFive} alt=""/>
                                                </div>
                                                <h4>After  Birth</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="brower-box">
                                            <div>
                                                <div className="brower-img">
                                                    <img src={iconSix} alt=""/>
                                                </div>
                                                <h4>Premature Birth</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
                
        <section>
            <div id="sec-two" className="section-two">
                
                <div id="s-two" className="styles-two">
                        <div className="top-two">
                            <img src={pregOne} id="img-two" alt=""/>
                        </div>
                        <div className="body-two text-center">
                            <h3 className="h3-two">Prenatal Testing</h3>
                            <h6 className="h6-two text-left">Get mom-friendly information on the safety<br/>
                                or risk of medications, drugs, or other<br/>
                                exposures during pregnancy and while<br/>
                                breastfeeding.s</h6>
                            
                        </div>
                </div>
    
                <div id="s-two" className="styles-two">
                        <div className="top-two">
                            <img src={pregTwo} id="img-two" alt=""/>
                        </div>
                        <div className="body-two text-center">
                            <h3 className="h3-two">Pregnancy Complication</h3>
                            <h6 className="h6-two text-left">Sometimes things go wrong during pregnancy<br/>
                                and you need extra care. In this section you<br/>
                                will find information and support for<br/>
                                pregnancy complications.</h6>
                           
                        </div>
                </div>
    
            </div>
        </section>
    
        <section className="section section-blogs">
            <div className="container">
               
                <div className="section-header text-center">
                    <h2>Pregnancy Tools</h2>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="row blog-grid-row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="blog-details.html">
                                    <img className="img-fluid" src={pregThree} alt="PostImage"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><a href="blog-details.html">Pregnancy test calcuator</a></h3>
                                <p className="mb-0">Find out the earliest day you can take a
                                    pregnancy test, depending on your
                                    ovulation date or your
                                    menstruation details. </p>
                            </div>
                        </div>
                   
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="blog-details.html">
                                    <img className="img-fluid" src={pregFour} alt="PostImage"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><a href="blog-details.html">Caffine intake calculator</a></h3>
                                <p className="mb-0">Find out the earliest day you can take a
                                    pregnancy test, depending on your
                                    ovulation date or your
                                    menstruation details. </p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="blog-details.html">
                                    <img className="img-fluid" src={pregFive} alt="PostImage"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><a href="blog-details.html">Weight gain calculator</a></h3>
                                <p className="mb-0">Find out the earliest day you can take a
                                    pregnancy test, depending on your
                                    ovulation date or your
                                    menstruation details. </p>
                            </div>
                        </div>
                     
                    </div>
                    
                </div>
            </div>
        </section>
    
    <section className="section section-search-2">
                <div className="container sizer">
                    <div className="row">
    
                        <div className="col-md-4">
                            <img src={bannerOne} className="search-img" alt="" />
                        </div>
    
                        <div className="col-md-8 search-doctor">
                            <div className="search-area">
                                <h2>Pregnancy Guide eBook</h2><br/>
                                <p>Do you want to experience your pregnancy<br/>
                                     as easily as A, B, C?</p>
    
                                <p>Our comprehensive eBook covers all the bases<br/>
                                     of what you need to know on your<br/>
                                     pregnancy journey.</p>
    
                                <ul>
                                    <li>How to choose the right care for<br/>
                                        pregnancy and birth</li>
                                    <li>How to live a healthy lifestyle during<br/>
                                        pregnancy</li>
                                </ul><br/>
                                
                                <form className="search-input">
                                    
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" placeholder="Name" defaultValue="Name"/>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" placeholder="Email" defaultValue="Email"/>
                                                    </div>
                                                </div>
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary search-btn submit-btn">Search</button>
                                                </div>   
                                            </div>
                                        
                                </form>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <img src={pregOne} alt="doc-img" id="doc-c-img"/>
                        </div>
                    
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="preg-faq-box">
                                <h1>Pregnancy FAQ</h1>
                                <h1 style={{color:"#373B79"}}>Ask Gynecologist</h1>
                                <p>Being pregnant can raise many questions, especially if it's your first time
                                    being pregnant. Read on for Medatu founder Aisha's answers to your
                                    pressing pregnancy questions.</p>
                                    <button style={{color:"#151515"}} type="button" className="btn btn-light">Pre-Pregnancy</button>
                                    <button style={{color:"#151515"}} type="button" className="btn btn-light">Pregnancy</button>
                                    <button style={{color:"#151515"}} type="button" className="btn btn-light">Birth</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        
    <section className="section section-doctor">
        <div className="container">
            <div className="section-header text-center">
                <h2>Blogs and News</h2>
                <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="doctor-slider slider">
    
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="UserImage" src={doctorOne}/>
                                </a>
                               <p>Being Pregnancy</p>
                            </div>
                        </div>
    
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="UserImage" src={doctorTwo}/>
                                </a>
                               <p>Planning a Pregnancy</p>
                            </div>
                        </div>
    
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="UserImage" src={doctorThree}/>
                                </a>
                               <p>Planning a Pregnancy</p>
                            </div>
                        </div>
    
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="UserImage" src={doctorFour}/>
                                </a>
                               <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
    
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="UserImage" src={doctorFive}/>
                                </a>
                               <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    {/* <Footer/> */}
    </>
     );
}
 
export default Maternity;

