import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import bookDocOne from "../../assets/img/doctors/book-doc-01.jpg";
import bookDocTwo from "../../assets/img/doctors/book-doc-02.jpg";
import bookDocThree from "../../assets/img/doctors/book-doc-03.jpg";
import bookDocFour from "../../assets/img/doctors/book-doc-04.jpg";
import bookDocFive from "../../assets/img/doctors/book-doc-05.jpg";
 
const Docinfo = () => {
  const pics = [
    {
      id: 1,
      img: bookDocOne
    },
    {
      id: 2,
      img: bookDocTwo
    },
    {
      id: 3,
      img: bookDocThree
    },
    {
      id: 4,
      img: bookDocFour
    },
    {
      id: 5,
      img: bookDocFive
    }
  ] 
  return (
    <>
    {pics.map((item, index)=> {
      return(
        <article style={{width: 300}}>
        <div className="profile-widget">
        <a href="#/">
            <img src={item.img} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">Dr. Darren Elder</a></h3>
            <div>
                <h5 id="pro-sub">PSICOLOGIST </h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </div>
    </article>
      )
    })}
    </>
  );
};

export default Docinfo;
