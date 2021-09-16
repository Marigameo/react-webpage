import React from 'react';
import docOne from "../assets/img/blog/blog-1.jpg"
import docTwo from "../assets/img/blog/blog-2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function Blog() {
  return (
    <section className="section section-doctor">
<div className="container">
<div className="row">
    <div className="col-lg-4">
        <div className="section-header">
            <h2>Information for your health and wellness</h2>
        </div>
        <div className="about-content">
            <p>Easy-to-Read health information from our medical experts enables people to live in a better way as per health is concerned.</p>					
            <a href={() => false}>Read More</a>
        </div>
    </div>
<div className="col-lg-8">
<div className="row">

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
</div>
</div>
</div>
</div>
</section>
  )
}

export default Blog;