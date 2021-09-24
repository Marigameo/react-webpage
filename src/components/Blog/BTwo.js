import React,{useEffect} from "react";
import docTwo from "../assets/img/blog/blog-2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const BTwo = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
        <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="doctor-blog profile-widget">
            <div className="doc-img">
                <Link as={Link} to="/blog2">
                <img className="img-fluid" alt="User" src={docTwo}/>
                </Link>
                
                <a href={() => false} className="fav-btn">
                    <FontAwesomeIcon icon={faBookmark}/>
                </a>
            </div>
            <div className="pro-content">
                <h3 className="title">
                    <a href="#/">10 Common COVID-19 Myths You Shouldn’t believe</a> 
                </h3>
                <p>It is time to separate fact from fiction.</p>
            </div>
        </div>	
    </div>
     );
}
 
export default BTwo;