import React,{useEffect} from "react";
import docOne from "../../../assets/img/blog/blog-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import './Blog.css'

const BOne = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, )
    return ( 
        
        <div className="col-lg-6 col-md-6">
<div className=" b-widget">
    <div className="doc-img">
        <Link as={Link} to="/blog">
        <img className="img-fluid" alt="User" src={docOne}/>
        </Link>
        <a href={() => false} className="fav-btn">
            <FontAwesomeIcon icon={faBookmark}/>
        </a>
    </div>
    <div className="pro-content">
        <h3 className='title'>10 foods for Healthy Heart</h3>
        
        <p>Eating healthy diet might help minimize the risk of heart diseases.</p>
    </div>
</div>
</div>
     );
}
 
export default BOne;