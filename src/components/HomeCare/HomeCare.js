import React  from 'react'
import './HomeCare.css'
import { Container } from 'react-bootstrap'
import Carousel from '../DynamicComponents/Components/Carousel'

//images
import hOne from '../assets/img/home-care/01.jpg'
import hTwo from '../assets/img/home-care/02.jpg'
import hThree from '../assets/img/home-care/03.jpg'
import hFour from '../assets/img/home-care/04.jpg'
import hFive from '../assets/img/home-care/05.jpg'

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
    <Container fluid className="home-care-banner">
        <Container className="banner-design">
            <div className="home-care-header">
                <h1>Professional Healthcare services, <br/>At the convenience of <br/>your Home.</h1>
            </div>
        </Container>
    </Container>

    <Container style={{padding: '2rem'}}>
        <h3>Lorem, ipsum dolor.</h3>
    <Carousel/>
    </Container>
    <Container style={{padding: '2rem'}}>
        <h3>Lorem, ipsum dolor.</h3>
    <Carousel/>
    </Container>
    
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
</main>
    );
};

export default HomeCare;
