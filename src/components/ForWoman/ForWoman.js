import './ForWoman.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Contains from './Elements/Contains';
import Blog from '../Blog/Blog';

const ForWoman = () => {
    return ( 
        <main style={{paddingTop: '5.2rem'}}>
            
            <section className='fw-sec1'>
                <Container>
                <Row>
                    <div className="col-lg-8"></div>
                    <div className="col-lg-4">
                        <h2>Maternity</h2>
                        <p>Medatu provides comprehensive pregnancy packages with complete digital guidance on diet and exercise.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
                </Row>
                </Container>
            </section>

            <section className='fw-sec2'>
                <Container>
                <Row>
                   
                    <div className="col-lg-5">
                        <h2>Fertility Care</h2>
                        <p>At Medatu, we connect you to our best fertility care experts.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
                    <div className="col-lg-7"></div>
                </Row>
                </Container>
            </section>

<section className='fw-sec3'>
<Container id='view-btn' fluid='md'>
<h3 className='text-center'>Have these issues or symptoms?
        <br/>Talk to our health experts today!</h3>
            
<article>
<Row className="row">
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
</Row>

<Row className="row">
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
</Row>

<Row className="row">
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
    <div className="col-lg-3"><Contains/></div>
</Row>
</article>
   
<button type="button" class="btn btn-success">Know More</button>

</Container>
</section>

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