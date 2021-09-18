import React from "react";
import { Link } from "react-router-dom";
import { SpecialityData } from "./SpecialityList/Data/SpecialityData";

const Specialities = () => {
  return (
<section className="container section section-specialities" >
<article id='view-btn'>
        <div className="section-header text-center">
            <h2>Clinics and Specialities</h2>
        </div>
      <aside className='s-items'>
        {SpecialityData.map((item, index) => {
          return(
            <div className="speicality-item">
            <Link to='/doctors'>
              <div id='img-spec'>
                <img key={item.text} src={item.img} alt="Speciality"/> 
              </div>
            </Link>
            <p>{item.text}</p>
            </div>
          )
        })
        }
</aside>
<Link to='/s-list'>
<button className="btn view-btn">View More</button>
</Link>

</article>
</section>    
  );
};

export default Specialities;



          