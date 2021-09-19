import './ForWoman.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Slide from './Slide/Slide';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Components/Carousel';
import BlogTwo from '../Blog/BlogTwo';
import AppSection from '../DynamicComponents/AppSection/AppSection';

const ForWoman = () => {
    return ( 
<main style={{paddingTop: '5.2rem'}}>
    <Carousel/>
    <Container>
      <Slide/>
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
        <a href='#/'>PAP Smear</a> 
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
    <div className="col-lg-4">
        <aside id='h-design'>    
        <FontAwesomeIcon icon={faCheck}/> 
        <a href='#/'>Pelvic Examination</a> 
        </aside>
    </div>
</Row>
    <button type="button" class="btn btn-success">Know More</button>
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