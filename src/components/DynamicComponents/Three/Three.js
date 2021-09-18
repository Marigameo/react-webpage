import React from 'react';
//images 
import threeOne from "../../assets/img/three/1.png";
import threeTwo from "../../assets/img/three/2.png";
import threeThree from "../../assets/img/three/3.png";

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
    <section className="section-two text-center">
      {data.map((item, index) => {
        return(
          <div id="s-two" className="styles-two">
            <div className="top-two">
                <img key={item.text} src={item.img} alt="#/"/>
            </div>
            <div className="body-two text-center">
                <h3 className="h3-two">{item.text}</h3>
                <div className="text-center">
                <button id="section-btn">Check Now</button>
                </div>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default Three;