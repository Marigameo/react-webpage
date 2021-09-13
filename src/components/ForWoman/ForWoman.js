import './ForWoman.css'
import iOne from '../assets/img/for-woman/illustration-1.svg'
import iTwo from '../assets/img/for-woman/illustration-2.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ForWoman = () => {
    return ( 
        <main style={{paddingTop: '5.2rem'}}>
            
            <section className='fw-sec1'>
                <article className='container'>
                <div className="row">
                    <div className="col-lg-7"></div>
                    <div className="col-lg-5">
                        <h2>Maternity</h2>
                        <p>Medatu provides comprehensive pregnancy packages with complete digital guidance on diet and exercise.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
                </div>
                </article>
            </section>

            <section className='fw-sec2'>
                <article className='container'>
                <div className="row">
                   
                    <div className="col-lg-5">
                        <h2>Fertility Care</h2>
                        <p>At Medatu, we connect you to our best fertility care experts.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
                    <div className="col-lg-7"></div>
                </div>
                </article>
            </section>

<section className='fw-sec3'>
    <article className='container'>
    <div className="row">
        <div className="col-lg-6" style={{paddingTop: '4rem'}}>
            <h3>Have these issues or symptoms?
            <br/>Talk to our health experts today!</h3>
                <div className="container" style={{margin: '2rem'}}>
                <ul>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Irregular periods</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Heavy menstrual bleeding</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Pelvic pain</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Abnormal vaginal discharge</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Abnormal weight gain</li></div>
                </div>
            </ul>
        </div>
    </div>
    
<div className="col-lg-6" style={{paddingLeft: '10rem'}}>
    <img src={iOne} alt="iOne" width={400} height={400} />
</div>
    </div>
    </article>
</section>

<section className='fw-sec4'>
    <article className='container'>
        <div className="section-header text-center" style={{paddingBottom: '4rem'}}>
        <h2>Health Screenings</h2>
        <p className='text-center'>Women should focus on taking care of herself. Exercising regularly, eating healthy, staying hydrated,
            managing stress, and routine health screening may help prevent various health issues.</p>
        </div>
    
    <div className="row">
        <div className="col-lg-6" style={{paddingTop: '4rem'}}>
            <h4>Book these essential health check-ups today!</h4>
                <div className="container" style={{margin: '2rem'}}>
                <ul>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Blood Glucose Test</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Bone Density Screening</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Cholesterol Check</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>Mammograms</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faCheck}/></div>
                    <div className="col-lg-11"><li>PAP Smear and Pelvic Examination</li></div>
                </div>
            </ul>
            <button type="button" class="btn btn-success">Book Now</button>
        </div>
    </div>
    
<div className="col-lg-6" style={{paddingLeft: '10rem'}}>
    <img src={iTwo} alt="iTwo" width={400} height={400} />
</div>
    </div>
    </article>
</section>
</main>
     );
}
 
export default ForWoman;