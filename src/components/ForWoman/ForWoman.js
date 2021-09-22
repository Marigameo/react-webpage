import React, {useEffect} from 'react';
import './ForWoman.css';
import banner from '../assets/img/for-woman/banner.jpg'
import { Container } from 'react-bootstrap';
import BlogTwo from '../Blog/BlogTwo';

import AppSection from '../DynamicComponents/AppSection/AppSection';
import Slide from './Slide/Slide';
import WHI from './WHI/WHI';

const ForWoman = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
<main style={{paddingTop: '5rem'}}>
<section className="fw-banner">
        <article className="banner-design">
            <div className="banner-header">
                <h1>Simplifying Healthcare for Women</h1>
                <p>Stay Strong and Healthy</p>
            </div>
        </article>
    </section> 
<Slide/>
<AppSection/>
<WHI/>
<BlogTwo/>

</main>
     );
}
 
export default ForWoman;