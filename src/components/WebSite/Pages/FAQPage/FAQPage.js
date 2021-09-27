import './FAQPage.css'
import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import FAQGeneral from '../DynamicComponents/FAQ/FAQGeneral';

const FAQPage = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )

    return ( 
        <>
        <section style={{paddingTop: '1rem'}} className="banner-faq">
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