import './ForWoman.css'
import iOne from '../assets/img/for-woman/illustration-1.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

const ForWoman = () => {
    return ( 
        <main style={{paddingTop: '5.2rem'}}>
            <section className='fw-sec1'>
                <article className='container'>
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <h2>Maternity</h2>
                        <p>Giving birth to a newbie is the most valuable feeling for a woman
                        where she sails through myriads of new experiences and emotions.
                        To make sure these feelings last forever, Medatu provides
                        comprehensive pregnancy packages with complete digital guidance
                        on diet and exercise. Do not stress yourself during this pandemic time,
                        just call us and allow us help you.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
                </div>
                </article>
            </section>

            <section className='fw-sec2'>
                <article className='container'>
                <div className="row">
                    <div className="col-lg-7"></div>
                    <div className="col-lg-5">
                        <h2>Fertility Care</h2>
                        <p>The inability to bear children affects about 10% to
                        15% of Indian women causing emotional and
                        psychological distress in families. In recent years,
                        increased awareness and better treatment options
                        have enabled higher success rates. At Medatu, we
                        connect you to our best fertility care experts.</p>
                        <button type="button" class="btn btn-success">Know More</button>
                    </div>
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
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Irregular periods</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Heavy menstrual bleeding</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Pelvic pain</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Abnormal vaginal discharge</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
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
    <div className="row">
        <div className="col-lg-6" style={{paddingTop: '4rem'}}>
            <h3>Have these issues or symptoms?
            <br/>Talk to our health experts today!</h3>
                <div className="container" style={{margin: '2rem'}}>
                <ul>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Irregular periods</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Heavy menstrual bleeding</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Pelvic pain</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Abnormal vaginal discharge</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
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
</main>
     );
}
 
export default ForWoman;