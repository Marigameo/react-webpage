import React, {useEffect} from 'react';
import './ForWoman.css';
import { Container } from 'react-bootstrap';
import BlogTwo from '../Blog/BlogTwo';
import Search from '../DynamicComponents/SearchBar/app/Search';
import AppSection from '../DynamicComponents/AppSection/AppSection';
import Slide from './Slide/Slide';

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
<AppSection/>
<BlogTwo/>

</main>
     );
}
 
export default ForWoman;