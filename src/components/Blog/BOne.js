import React from "react";
import docOne from "../assets/img/blog/blog-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const BOne = () => {
    return ( 
        <div className="col-lg-6 col-md-6 col-sm-6">
<div className="doctor-blog profile-widget">
    <div className="doc-img">
        {/* <a href="/blog"> */}
        <Link as={Link} to="/blog">
        <img className="img-fluid" alt="User" src={docOne}/>
        </Link>
        {/* </a> */}
        <a href={() => false} className="fav-btn">
            <FontAwesomeIcon icon={faBookmark}/>
        </a>
    </div>
    <div className="pro-content">
        <h3 className="title">
            <a href="/blog">10 foods for Healthy Heart</a> 
        </h3>
        
        <p>Eating healthy diet might help minimize the risk of heart diseases.</p>
    </div>
</div>
</div>
     );
}
 
export default BOne;