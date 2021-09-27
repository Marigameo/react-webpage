import React, {useEffect} from 'react';
import iOne from '../../../assets/img/about/1.svg'
import iTwo from '../../../assets/img/about/2.svg'
import iThree from '../../../assets/img/about/3.svg'
import {Container, Col, Row,} from 'react-bootstrap'
import './aboutus.css';
export default function AboutUs() {
  useEffect(() => {
    window.scroll(0,0)
}, )
    return (
      <>
      <div className="sectioncolor"  style={{paddingTop:"175px"}}>
<Container className="container1">
  <Row>
    <Col cols="lg">
    <h1>About Us</h1>
    <p>
    Increase in the use of digital healthcare technology could transform the
way people around the world access healthcare and services, can
promote higher standards of healthcare, and provide greater control
over their health. 
    </p>
    <p>
    Medatu is founded on the firm belief to provide affordable health
technology to people in India. From booking your doctor’s appointment,
to purchase medicines or health insurance, Medatu has got you
covered.
    </p>
    </Col>
    <Col  >
   <img src={iOne} width={400} height={400} alt="iOne" />
    </Col>
  </Row>
</Container>
</div>

  <section className='sec-a2'>
  <Container  className="container1">
  <Row>
    <Col>
    <h1>Why Choose Medatu?</h1>

    <p>
    As many consumers seek alternatives to traditional healthcare options,
the availability of digital healthcare technology is the option. Our unique
Artificial Intelligence technology can predict, comprehend, learn, and act
better when it comes to healthcare needs. Medatu embrace the latest
technologies to make healthcare accessible for all Indians in their
regional languages. Medatu is all set to transform healthcare needs for
people helping them skip the struggle of searching for early & fast
appointment, buying affordable medicines, waiting for delayed lab test,
and purchasing or processing health insurance. By creating this
innovative healthcare ecosystem, we strive to provide the most
accurate, complete, and comprehensive information and assistance for
better healthcare decisions.

    </p>
    </Col>
    <Col>
    
    </Col>
  </Row>

  </Container>
  </section>

<div className="sectioncolor">


<Container  className="container1">
  <Row>
  <h1>Our Goal</h1>
    <Col className='sec-a3-h'>
   
    <p>
    Medatu is the name of the innovation, with the primary goal of
streamlining physician’s work, optimizing systems, improving patient
outcomes, reducing human error, and lowering costs through amazing
web and mobile experiences
    </p>
    <p>
    Our system works on a data and fact-driven approach to help address
key health system challenges and help people access to better
healthcare resources. Our rigorous AI-driven approach is a mixture of
accurate, comprehensive, and curated information that enable users to
make better health decisions.
    </p>
    </Col>
    <Col className='sec-a3'><img src={iTwo} alt="iTwo" width={500} height={500} /></Col>
  </Row>

  </Container>
</div>

<div >
<Container  className="container1">
<h1 className='text-center'>Our Team</h1>
  <Row>
    <Col className='seclast-a'>
   <h5>1. Hajeera Almas M (Founder, CEO)</h5>
   <h5>2. Ikram Pasha M (Co-Founder)</h5>
   <h5>2. Ilyas Pasha (COO)</h5>
    </Col>
    <Col><img src={iThree} alt="iThree" width={400} height={400} /></Col>
    <Col className='seclast-a'>
    <h5>4. Shobha N (Project head, technical)</h5>
    <h5>5. Sumayasarwar (Business analyst and
 operational head)
</h5>
    </Col>
  </Row>
</Container>
     

  </div>

  </>
    )
}
