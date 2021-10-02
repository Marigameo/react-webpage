import React, {useEffect}  from 'react'
import './HomeCare.css'
import { Container } from 'react-bootstrap'
import Search from '../DynamicComponents/SearchBar/app/Search'

//images
import Disclaimer from './Disclaimer'
import Service from './Service/Service'
import Space from '../DynamicComponents/Space/Space'

const HomeCare = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return (
<main className="main-wrapper"> 
<Space/>
<Container className="c-banner-design">
            <Search/> 
    </Container>
    <section className="home-care-banner">
    <div className="home-care-header">
            <h1>Professional Healthcare services, At the convenience of your Home.</h1>
        </div>
    </section> 
<Service/>
    <article className="row hc-two"></article>
<Disclaimer/>
</main>
    );
};

export default HomeCare;
