import React, {useEffect} from 'react';
import './ForWoman.css';
import { Container,Row } from 'react-bootstrap';
import BlogTwo from '../Blog/BlogTwo';
import Search from '../DynamicComponents/SearchBar/app/Search';
import AppSection from '../DynamicComponents/AppSection/AppSection';
import Slide from './Slide/Slide';
import {HealthScreen} from './HealthScreen/HealthScreen';

const ForWoman = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
<main>
<Container>
<section style={{paddingTop: '7rem'}}><Search/></section>
<div className='fw-banner'></div>
</Container>
<Slide/>
<section className='fw-sec5'>
<Container>
<article id='h-mid'>
    <div className="row">
    <div className="col-lg-6">
    <h2>Health Screenings</h2>
    <p>Book essential health check-ups.</p>
    <Row id='h-layout'>
            {HealthScreen.map((item, index)=> {
                return(
                    <div className="col-lg-4">
                    <article id='h-design'>
                    <img src={item.img} width={54} height={54} alt='item.img' key={item.img} /> 
                    <a href='#/'>{item.text}</a> 
                    </article>
                    </div>
                )
            })}
    </Row>
    <button type="button" class="btn btn-success">Know More</button>
    </div>
    <div className="col-lg-6"></div>
    </div>
    </article>
</Container>
</section>
<AppSection/>
<BlogTwo/>

</main>
     );
}
 
export default ForWoman;