import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

//images
import blogOne from "../../../assets/img/blog/blog-1.jpg";
import blogThumbTwo from "../../../assets/img/blog/blog-thumb-02.jpg";
import blogThumbOne from "../../../assets/img/blog/blog-thumb-01.jpg";
import docThumbOne from "../../../assets/img/doctors/doctor-thumb-02.jpg";
import patientOne from "../../../assets/img/patients/patient1.jpg";
import patientTwo from "../../../assets/img/patients/patient2.jpg";
import patientThree from "../../../assets/img/patients/patient3.jpg";
import patientFour from "../../../assets/img/patients/patient4.jpg";
import patientFive from "../../../assets/img/patients/patient5.jpg";

const BlogPage = () => {
    return ( 
        <>
		<div className="main-wrapper">
		
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Blog Grid</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="container">
            
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-view">
                            <div className="blog blog-single-post">
                                <div className="blog-image">
                                    <a href={() => false}><img alt="blogImg" src={blogOne} className="img-fluid"/></a>
                                </div>
                                <h3 className="blog-title">10 foods for Healthy Heart</h3>
                            
                                <div className="blog-content">
                                    <p>Heart diseases are leading cause of deaths in India. Anyone can get a heart disease, but you are at higher risk if you have diabetes, high blood pressure or high cholesterol, are obese, not exercising regularly, or eating unhealthily. 
                                        Regular intake of these 10 healthy foods might help to keep your heart healthy.
                                    </p>
                                    <strong>1. Asparagus</strong><br/>
                                    <p>Asparagus is a natural source of folate (vitamin B9) that prevents the formation of  homocysteine           (a type of amino acid) inside our body. High homocysteine levels may lead to the risk of heart problems, such as coronary artery disease and stroke.</p><br/>
                                    <strong>2. Berries</strong><br/>
                                    <p>A great source of fibre, folate, iron, calcium, vitamin A, and vitamin C, berries are low in fat. Also, they embrace antioxidant polyphenols that helps to reduce heart risk. </p><br/>
                                    <strong>3. Chia seeds and flaxseeds</strong><br/>
                                    <p>These are the rich source of omega-3 fatty acids, such as alpha-linolenic acid. Omega-3s is best known for lowering the levels of harmful fat in your body. In addition, it helps to reduce blood pressure and minimise the buildup of fatty plaques in the arteries. </p><br/>
                                    <strong>4. Nuts</strong><br/>
                                    <p>Almonds, hazelnuts, peanuts, pecans, pistachios, and walnuts are all heart-friendly nut food. Nuts are rich in protein, fibre, minerals, vitamins, and antioxidants. Similarly, fish and flaxseeds, walnuts are also ripe with omega-3 fatty acids, making them heart-healthy food to have on the go.</p><br/>
                                    <strong>5. Goat Liver</strong><br/>
                                    <p>Among other organ meats, the liver is one of the most nutrient-dense. Liver is bulging with folic acid, iron, chromium, copper, and zinc that increases the blood’s haemoglobin level and keep our heart healthy.</p><br/>
                                    <strong>6. Oatmeal</strong><br/>
                                    <p>Oatmeal is another healthy heart food option, as it is rich in soluble fibre. Oat-based products significantly reduce LDL and total cholesterol without any adverse effects.</p><br/>
                                    <strong>7. Salmon</strong><br/>
                                    <p>This is another top-level food for heart health that contains omega-3s. Omega-3s are proven healthy fats that reduce the risk of heart rhythm disorders and lower blood pressure. In addition, it reduces triglycerides and fights inflammation. The American Heart Association recommends two servings of salmon or other oily fish per week.</p><br/>

                                    <strong>8. Green Leafy Vegetables</strong> 
                                    <p>A balanced amount of veggies in the diet can help to moderate weight and blood pressure. They are low in fat and calories but rich in 										fibre, minerals, and vitamins. Spinach is a rich source of magnesium. You can maintain a healthy heart rhythm by consuming magnesium 										regularly.</p> 
                                    <strong>9. Tomatoes</strong>
                                    <p>Tomatoes is another on the list. It contains a lot of nutrients that keep our hearts healthy. The little red fruits contain all the 											necessary ingredients such as chock-full of fibre, potassium, vitamin C, folate, and choline that ensures our heart health. On the same 											side, it helps to keep heart disease at bay, potassium benefits muscles and bones and helps prevent kidney stones formation.</p>
                                    <strong>10. Dark Chocolate</strong> 
                                    <p>Dark chocolate is rich in disease-fighting antioxidants like flavonoids. Regular consumption of dark chocolate can help lower blood pressure and risk of heart diseases. </p>
                                </div>
                            </div>
                            
                            <div className="card blog-share clearfix">
                                <div className="card-header">
                                    <h4 className="card-title">Share the post</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="social-share">
                                        <li><a href="#/" title="Facebook"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                        <li><a href="#/" title="Twitter"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                        <li><a href="#/" title="Linkedin"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                        <li><a href="#/" title="Google Plus"><FontAwesomeIcon icon={faGooglePlus}/></a></li>
                                        <li><a href="#/" title="Youtube"><FontAwesomeIcon icon={faYoutube}/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card author-widget clearfix">
                            <div className="card-header">
                                <h4 className="card-title">About Author</h4>
                                </div>
                            <div className="card-body">
                                <div className="about-author">
                                    <div className="about-author-img">
                                        <div className="author-img-wrap">
                                            <a href="doctor-profile.html"><img className="img-fluid rounded-circle" alt="" src={docThumbOne} /></a>
                                        </div>
                                    </div>
                                    <div className="author-details">
                                        <a href="doctor-profile.html" className="blog-author-name">Dr. Darren Elder</a>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="card blog-comments clearfix">
                                <div className="card-header">
                                    <h4 className="card-title">Comments (12)</h4>
                                </div>
                                <div className="card-body pb-0">
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={patientFour}/>
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Michelle Fairfax</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p className="blog-date">Dec 6, 2017</p>
                                                <a className="comment-btn" href="#/">
                                                   <FontAwesomeIcon icon={faReply}/> Reply
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="comments-list reply">
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" alt="" src={patientFive}/>
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
                                                            <span className="blog-author-name">Gina Moore</span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                        <p className="blog-date">Dec 6, 2017</p>
                                                <a className="comment-btn" href="#/">
                                                   <FontAwesomeIcon icon={faReply}/> Reply
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" alt="" src={patientThree}/>
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
                                                            <span className="blog-author-name">Carl Kelly</span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                        <p className="blog-date">December 7, 2017</p>
                                                <a className="comment-btn" href="#/">
                                                   <FontAwesomeIcon icon={faReply}/> Reply
                                                </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={patientTwo}/>
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Elsie Gilley</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p className="blog-date">December 11, 2017</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={patientOne}/>
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Joan Gardner</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <p className="blog-date">December 13, 2017</p>
                                                <a className="comment-btn" href="#/">
                                                   <FontAwesomeIcon icon={faReply}/> Reply
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            
                            <div className="card new-comment clearfix">
                                <div className="card-header">
                                    <h4 className="card-title">Leave Comment</h4>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Your Email Address <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Comments</label>
                                            <textarea rows="4" className="form-control"></textarea>
                                        </div>
                                        <div className="submit-section">
                                            <button className="btn btn-primary submit-btn" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                    <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

                        <div className="card search-widget">
                            <div className="card-body">
                                <form className="search-form">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." className="form-control" defaultValue="Search"/>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch}/></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
        
                        <div className="card post-widget">
                            <div className="card-header">
                                <h4 className="card-title">Latest Posts</h4>
                            </div>
                            <div className="card-body">
                                <ul className="latest-posts">
                                    <li>
                                        <div className="post-thumb">
                                            <a href="blog-details.html">
                                                <img className="img-fluid" src={blogThumbOne} alt=""/>
                                            </a>
                                        </div>
                                        <div className="post-info">
                                            <h4>
                                                <a href="blog-details.html">Doccure – Making your clinic painless visit?</a>
                                            </h4>
                                            <p>4 Dec 2019</p>
                                        </div>
                                    </li>
                                    <li>
                                    
                                        <div className="post-thumb">
                                            <a href="blog-details.html">
                                                <img className="img-fluid" src={blogThumbTwo} alt=""/>
                                            </a>
                                        </div>
                                        <div className="post-info">
                                            <h4>
                                                <a href="blog-details.html">Online Doctor Appointment Scheduling</a>
                                            </h4>
                                            <p>1 Dec 2019</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                        <div className="card category-widget">
                            <div className="card-header">
                                <h4 className="card-title">Blog Categories</h4>
                            </div>
                            <div className="card-body">
                                <ul className="categories">
                                    <li><a href="#/">Cardiology <span>(62)</span></a></li>
                                    <li><a href="#/">Health Care <span>(27)</span></a></li>
                                    <li><a href="#/">Nutritions <span>(41)</span></a></li>
                                    <li><a href="#/">Health Tips <span>(16)</span></a></li>
                                    <li><a href="#/">Medical Research <span>(55)</span></a></li>
                                    <li><a href="#/">Health Treatment <span>(07)</span></a></li>
                                </ul>
                            </div>
                        </div>
            
                        <div className="card tags-widget">
                            <div className="card-header">
                                <h4 className="card-title">Tags</h4>
                            </div>
                            <div className="card-body">
                                <ul className="tags">
                                    <li><a href="#/" className="tag">Children</a></li>
                                    <li><a href="#/" className="tag">Disease</a></li>
                                    <li><a href="#/" className="tag">Appointment</a></li>
                                    <li><a href="#/" className="tag">Booking</a></li>
                                    <li><a href="#/" className="tag">Kids</a></li>
                                    <li><a href="#/" className="tag">Health</a></li>
                                    <li><a href="#/" className="tag">Family</a></li>
                                    <li><a href="#/" className="tag">Tips</a></li>
                                    <li><a href="#/" className="tag">Shedule</a></li>
                                    <li><a href="#/" className="tag">Treatment</a></li>
                                    <li><a href="#/" className="tag">Dr</a></li>
                                    <li><a href="#/" className="tag">Clinic</a></li>
                                    <li><a href="#/" className="tag">Online</a></li>
                                    <li><a href="#/" className="tag">Health Care</a></li>
                                    <li><a href="#/" className="tag">Consulting</a></li>
                                    <li><a href="#/" className="tag">Doctors</a></li>
                                    <li><a href="#/" className="tag">Neurology</a></li>
                                    <li><a href="#/" className="tag">Dentists</a></li>
                                    <li><a href="#/" className="tag">Specialist</a></li>
                                    <li><a href="#/" className="tag">Doccure</a></li>
                                </ul>
                            </div>
                        </div>
            
                        
                    </div>
                    
            </div>
            </div>

        </div>		
</div>
</>
     );
}
 
export default BlogPage;