import React, {useEffect}  from 'react'
import './HomeCare.css'
import { Container } from 'react-bootstrap'
import Search from '../DynamicComponents/SearchBar/app/Search'

//images
import hOne from '../assets/img/home-care/01.jpg'
import hTwo from '../assets/img/home-care/02.jpg'
import hThree from '../assets/img/home-care/03.jpg'
import hFour from '../assets/img/home-care/04.jpg'
import hFive from '../assets/img/home-care/05.jpg'
import Disclaimer from './Disclaimer'
import AppSection from '../DynamicComponents/AppSectionHC/AppSection'

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
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return (
<main style={{paddingTop: '4rem'}} className="main-wrapper"> 

<Container className="c-banner-design">
            <Search/> 
    </Container>
    <section className="home-care-banner">
    <div className="home-care-header">
            <h1>Professional Healthcare services, <br/>At the convenience of <br/>your Home.</h1>
        </div>
    </section> 

    <Container fluid className='hcare-spec'>
    {data.map((item, index)=> {
        return(
                <div className='hcare-special'>
                <img src={item.img} key={item.text} alt="iImg" width={180} height={120}/>
            <h5>{item.text}</h5>
            <a className='kmore' href="know-more">Know More</a>
                </div>
        )
    })}
    </Container>

    <article className="row hc-two"></article>
    
<AppSection/>
<Disclaimer/>
</main>
    );
};

export default HomeCare;
