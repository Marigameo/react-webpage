import React,{useEffect} from 'react';
import SimpleSlider from './specialities';
import MultipleItems from '../DynamicComponents/Doctors/doctors';
// import SimpleSlider from './specialities';
// import MultipleItems from './doctors';
import '../../components/assets/style.css'
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import Blog from '../Blog/Blog';

//images 
import threeOne from "../assets/img/three/1.png";
import threeTwo from "../assets/img/three/2.png";
import threeThree from "../assets/img/three/3.png";
import Search from '../DynamicComponents/SearchBar/app/Search';
import Feedback from './feedback';
import AppSection from '../DynamicComponents/AppSection/AppSection';

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
                <Search/> 
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

<AppSection/>     

<MultipleItems/>
<section id="view-btn" style={{padding: '2rem'}}>
    <h3 style={{paddingTop: '2rem'}}>What People Say about Us</h3>
    <Feedback/>
</section>

<Blog/>

</main>
        </>
     );
}
 
export default Home;