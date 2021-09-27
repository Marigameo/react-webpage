import React, {useEffect} from 'react';
import './ForWoman.css';
import BlogTwo from '../Blog/BlogTwo';

import Slide from './Slide/Slide';
import WHI from './WHI/WHI';
import Appointment from '../Appointments/AppointmentW/Appointment';
import Space from '../DynamicComponents/Space/Space';

const ForWoman = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
<main>
    <Space/>
<section className="fw-banner">
        <article className="banner-design">
            <div className="banner-header">
                <h1>Simplifying Healthcare for Women</h1>
                <p>Stay Strong and Healthy</p>
            </div>
        </article>
    </section> 
<Slide/>
<Appointment/>
<WHI/>
<BlogTwo/>

</main>
     );
}
 
export default ForWoman;