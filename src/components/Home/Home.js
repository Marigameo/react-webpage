import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import MultipleItems from '../Doctors/Doctors/doctors';
import '../../components/assets/style.css'
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import Search from '../DynamicComponents/SearchBar/app/Search';
import Feedback from './feedback';
import AppSection from '../DynamicComponents/AppSection/AppSection';
import 'jquery/dist/jquery.min';
import Blog from '../Blog/Blog';
import Three from '../DynamicComponents/Three/Three';

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
<Specialitites/>
<Three/>
<AppSection/>  
<div className="section-header text-center">
    <p className="section-p text-center">Top HealthCare Professionals to Solve Your Health Issues.</p>
</div>  
<Container fluid>
<MultipleItems/>
</Container>
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