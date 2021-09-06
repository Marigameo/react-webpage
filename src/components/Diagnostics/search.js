import React from 'react'
import '../assets/style.css';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import PlacesInput from './dropdown/Placeinput';

export default function Search() {
    return (
        <main style={{padding: '8rem 10rem 0 14rem'}}>
            <PlacesInput/> 
        </main>
    )
}
