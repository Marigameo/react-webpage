import React,{useEffect}  from "react";
import './specialities.css'
import { Link, withRouter } from "react-router-dom";
import { SpecialityData } from "./SpecialityList/Data/SpecialityData";

const Specialities = ({ history}) => {

  useEffect(() => {
    window.scroll(0,0)
    },)
    
  const handleClick = () => {
    history.push(`/${SpecialityData}`)
  }
  return (
<section className="container section section-specialities" >
<article id='view-btn'>
        <div className="section-header text-center">
            <h2>Clinics and Specialities</h2>
        </div>
      <aside className='s-items'>
        {SpecialityData.map((item, index) => {
          return(
            
            <div className="speicality-item" onClick={handleClick}>
            <Link to='/doctors'>{console.log(item.text)} 
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

export default withRouter(Specialities);



          