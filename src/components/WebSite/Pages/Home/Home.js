import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Search from '../DynamicComponents/SearchBar/app/Search';
import Feedback from './FeedBack';
import Blog from '../Blog/Blog';
import Three from '../DynamicComponents/Three/Three';
import Appointment from '../Appointments/Appointment/Appointment';
import Space from '../DynamicComponents/Space/Space';
import DocHome from '../Doctors/Doctors/DocHome';
import './FormDesign.css'

const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
<main className="main-wrapper">
<Space/>
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
<Appointment/>

<div className="section-header text-center">
    <p className="section-p text-center">Top Health Care Professionals to Solve Your Health Issues.</p>
</div>  

<DocHome/>
<Container>
    <article id='f-box' className='text-center'>
    <h3 style={{paddingTop: '2rem'}}>What People Say about Us</h3>
    <Feedback/>
    </article>
</Container>
<Blog/>
</main>
</>
);
}
 
export default Home;