import './FAQPage.css'
import React from 'react';
import { Container } from 'react-bootstrap';
import FAQGeneral from '../DynamicComponents/FAQ/FAQGeneral';

const FAQPage = () => {
    return ( 
        <>
        <section style={{paddingTop: '2rem 0'}} className="banner-faq">
        <h2>How can we help you?</h2>
            <input type="text" />
        </section> 
        <Container style={{margin: '4rem auto'}}>
            <FAQGeneral/>
        </Container>
        </>
     );
}
 
export default FAQPage;