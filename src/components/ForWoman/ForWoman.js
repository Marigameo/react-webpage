import './ForWoman.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../DynamicComponents/Components/Carousel'
import Blog from '../Blog/Blog';

import Slide from './Components/Slide';

const ForWoman = () => {
    return ( 
<main style={{paddingTop: '5.2rem'}}>
    <Slide/>
    <Container>
        <h3>Lorem, ipsum.</h3>
        <Carousel/>
    </Container>
    <Container>
        <h3>Lorem, ipsum.</h3>
        <Carousel/>
    </Container>

<section className='fw-sec5'>
<Container>
<article id='h-mid'>
    <div className="col-lg-8">
    <h2>Health Screenings</h2>
    <p>Book essential health check-ups.</p>
<Row id='h-layout'>
    <div className="col-lg-4">
        <article id='h-design'>
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'>Blood Glucose Test</a> 
        </article>
    </div>
    <div className="col-lg-4">
        <aside id='h-design'>
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'> Bone Density Screening</a> 
        </aside>
    </div>
    <div className="col-lg-4">
        <aside id='h-design'>    
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'>PAP Smear and Pelvic Examination</a> 
        </aside>
    </div>
    <div className="col-lg-4">
        <aside id='h-design'>
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'>Mammograms</a>
        </aside>
    </div>
    <div className="col-lg-4">
        <aside id='h-design'>
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'>Cholesterol Check</a> 
        </aside>
    </div>
</Row>
    <button type="button" class="btn btn-success">Know More</button>
    </div>
    </article>
</Container>
</section>
 
<Blog/>

</main>
     );
}
 
export default ForWoman;