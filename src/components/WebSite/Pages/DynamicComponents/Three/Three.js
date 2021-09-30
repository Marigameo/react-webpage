import React from 'react';
import './Three.css'
import { Container } from 'react-bootstrap';
//images 
import threeOne from "../../../../assets/img/three/1.png";
import threeTwo from "../../../../assets/img/three/2.png";
import threeThree from "../../../../assets/img/three/3.png";

const data = [
  {
    img: threeOne,
    text: `Assess Your Health with AI features`
  },
  {
    img: threeTwo,
    text: `Connect to a healthcare expert online within 5 minutes`
  },
  {
    img: threeThree,
    text: `Healthcare Services at your Home`
  }
]
const Three = () => {
  return (
    <Container>
        <section className="section-two text-center">
      {data.map((item, index) => {
        return(
          <div className="styles-two" key={item.img}>
            <div className="top-two">
                <img key={item.text} src={item.img} alt="#/"/>
            </div>
            <div className="body-two text-center">
                <h5 className="h3-two">{item.text}</h5>
                <div className="text-center">
                <button id="section-btn">Check Now</button>
                </div>
            </div>
          </div>
        )
      })}
    </section>
    </Container>
  );
};

export default Three;