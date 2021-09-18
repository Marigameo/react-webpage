import React  from 'react'
import './HomeCare.css'
import { Container } from 'react-bootstrap'
import illustration from '../assets/img/home-care/illustration.svg' 
import Search from '../DynamicComponents/SearchBar/app/Search'
import Carousel from '../DynamicComponents/Components/Carousel'

//images
import hOne from '../assets/img/home-care/01.jpg'
import hTwo from '../assets/img/home-care/02.jpg'
import hThree from '../assets/img/home-care/03.jpg'
import hFour from '../assets/img/home-care/04.jpg'
import hFive from '../assets/img/home-care/05.jpg'
import Disclaimer from './Disclaimer'

const data = [
    {
        img: hOne,
        text: `Doctor at Home`
    },
    {
        img: hTwo,
        text: `Nurse at Home`
    },
    {
        img: hThree,
        text: `Vaccination at Home`
    },
    {
        img: hFour,
        text: `Health Screening`
    },
    {
        img: hFive,
        text: `Physical Therapy`
    }
]
const HomeCare = () => {
    return (
<main style={{paddingTop: '6rem'}} className="main-wrapper"> 

    <section className="home-care-banner">
    <Container fluid className="banner-design">
        <div className="home-care-header">
            <h1>Professional Healthcare services, <br/>At the convenience of <br/>your Home.</h1>
        </div>
        <div className="banner-search">
            <Search/> 
        </div>
    </Container>
    </section> 

    <Container fluid className='hcare-spec'>
    {data.map((item, index)=> {
        return(
        <div className="hcare-special">
        <img src={item.img} key={item.text} alt="iImg" width={180} height={120}/>
        <h5>{item.text}</h5>
        <a className='kmore' href="know-more">Know More</a>
        </div>
        )
    })}
    </Container>

<section className="container">
    <article className="row home-care-section-two">
        <div className="col-lg-6">
        <img src={illustration} alt="home-care-img-section" />
        </div>
        <div className="col-lg-6">
            <h1>Home Care Services</h1>
            <div className="text">
            <p>Medical consultations at clinic or hospital often require transport arrangements and long waiting hours. It may expose you to various infections and compromise on quality care. </p>
            <p>Medatu’s Home Care option brings stress-free healthcare services to your doorstep. Just choose your location and service you require. Our highly qualified and experienced doctors will provide best treatment at comfort of your home.</p>
            </div>
        </div>
    </article>
</section>

    <Container style={{padding: '2rem'}}>
        <h3>Lorem, ipsum dolor.</h3>
    <Carousel/>
    </Container>
    <Container style={{padding: '2rem'}}>
        <h3>Lorem, ipsum dolor.</h3>
    <Carousel/>
    </Container>
    

<Disclaimer/>
</main>
    );
};

export default HomeCare;
