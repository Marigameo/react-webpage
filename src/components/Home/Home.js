import React,{useEffect} from 'react';
import SimpleSlider from './specialities';
import MultipleItems from './doctors';
// import SimpleSlider from './specialities';
// import MultipleItems from './doctors';
import '../../components/assets/style.css'
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

//images 
import threeOne from "../assets/img/three/1.png";
import threeTwo from "../assets/img/three/2.png";
import threeThree from "../assets/img/three/3.png";
import main from "../assets/img/app/main.png";
import docOne from "../assets/img/blog/blog-1.jpg"
import docTwo from "../assets/img/blog/blog-2.jpg"
import PlacesInput from './app/PlacesInput';
import Feedback from './feedback';

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
<main className="main-wrapper">

    <section className="banner-home">
        <article className="banner-design">
            <div className="banner-header">
                <h1>Book a Medical Appointment.</h1>
                <p>It’s Simple and Free!</p>
            </div>
            <div className="banner-search">
                <PlacesInput/> 
            </div>
        </article>
    </section>
    
<SimpleSlider/>

<section>
<div className="section-two text-center">
    
    <div id="s-two" className="styles-two">
            <div className="top-two">
                <img src={threeOne} alt="#/"/>
            </div>
            <div className="body-two text-center">
                <h3 className="h3-two">Assess Your Health <br/>with AI features</h3>
                <div className="text-center">
                <button id="section-btn">Check Now</button>
                </div>
            </div>
    </div>

    <div id="s-two" className="styles-two">
            <div className="top-two">
                <img src={threeTwo} alt="#/"/>
            </div>
            <div className="body-two text-center">
                <h3 className="h3-two">Connect to a healthcare expert <br/>online within 5 minutes</h3>
                <div className="text-center">
                <button id="section-btn">Book Now</button>
                </div>
            </div>
    </div>
    
    <div id="s-two" className="styles-two">
            <div className="top-two">
                <img src={threeThree} alt="#/"/>
            </div>
            <div className="body-two text-center">
                <h3 className="h3-two">Healthcare Services at<br/> your Home</h3>
                <div className="text-center">
                <button id="section-btn">Book Now</button>
                </div>
            </div>
    </div>

</div>
</section>

<section style={{backgroundImage: "linear-gradient(to right, #fbfdff , #E6EFF9 )"}} className="section section-features">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-4">
            <div className="feature-text">
            <h2 className="mt-2">Medatu App coming soon</h2><br/>
                <p>1000+ Online Healthcare Experts. Medatu makes It Easy to book a Virtual appointment anywhere in India.</p>
                <div style={{fontSize: "14px !important"}}>
                    <input type="text" placeholder="Enter Your Phone Number" name="app" id="app"/>
                    <button id="app-num">Join The List</button>
                </div>
            </div>
            </div>
            <div className="col-md-8">
                <div className="section-header text-center features-img">
                    <img src={main} className="img-fluid" alt="Feature"/>
                </div>
            </div>

    </div>
</div>
</section>     

<MultipleItems/>
<section id="view-btn" style={{padding: '2rem'}}>
    <h3 style={{paddingTop: '2rem'}}>What People Say about Us</h3>
    <Feedback/>
</section>

<section className="section section-doctor">
<div className="container">
<div className="row">
    <div className="col-lg-4">
        <div className="section-header">
            <h2>Information for your health and wellness</h2>
        </div>
        <div className="about-content">
            <p>Easy-to-Read health information from our medical experts enables people to live in a better way as per health is concerned.</p>					
            <a href={() => false}>Read More..</a>
        </div>
    </div>
<div className="col-lg-8">
<div className="row">

<div className="col-lg-6 col-md-6 col-sm-6">
<div className="doctor-blog profile-widget">
    <div className="doc-img">
        {/* <a href="/blog"> */}
        <Link as={Link} to="/blog">
        <img className="img-fluid" alt="User" src={docOne}/>
        </Link>
        {/* </a> */}
        <a href={() => false} className="fav-btn">
            <FontAwesomeIcon icon={faBookmark}/>
        </a>
    </div>
    <div className="pro-content">
        <h3 className="title">
            <a href="/blog">10 foods for Healthy Heart</a> 
        </h3>
        
        <p>Eating healthy diet might help minimize the risk of heart diseases.</p>
    </div>
</div>
</div>
<div className="col-lg-6 col-md-6 col-sm-6">
        <div className="doctor-blog profile-widget">
            <div className="doc-img">
                {/* <a href="#/"> */}
                   <Link as={Link} to="/blog2">

                    <img className="img-fluid" alt="User" src={docTwo}/>
                    </Link>
                {/* </a> */}
                
                <a href={() => false} className="fav-btn">
                    <FontAwesomeIcon icon={faBookmark}/>
                </a>
            </div>
            <div className="pro-content">
                <h3 className="title">
                    <a href="#/">10 Common COVID-19 Myths You Shouldn’t believe</a> 
                </h3>
                <p>It is time to separate fact from fiction.</p>
            </div>
        </div>	
    </div>
</div>
</div>
</div>
</div>
</section>

</main>
        </>
     );
}
 
export default Home;