
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

//images
import blogOne from "../../../assets/img/blog/blog-2.jpg";
import blogThumbTwo from "../../../assets/img/blog/blog-thumb-02.jpg";
import blogThumbOne from "../../../assets/img/blog/blog-thumb-01.jpg";
import docThumbOne from "../../../assets/img/doctors/doctor-thumb-02.jpg";
import patientOne from "../../../assets/img/patients/patient1.jpg";
import patientTwo from "../../../assets/img/patients/patient2.jpg";
import patientThree from "../../../assets/img/patients/patient3.jpg";
import patientFour from "../../../assets/img/patients/patient4.jpg";
import patientFive from "../../../assets/img/patients/patient5.jpg";

const BlogPageTwo = () => {
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
                                <h3 className="blog-title">10 Common COVID-19 Myths You Shouldn’t believe </h3>
                            
                                <div className="blog-content">
                                    <p>Chances are you've heard about some myths that claim to prevent, treat, or cure coronavirus disease 2019 (COVID-19). In reality, it might be tempting to use a questionable product or method to stay healthy during the pandemic, it's extremely unlikely to consider it and might even cause serious harm.<br/>Below are 10 most viral Covid-19 myths that claim to prevent, treat, or cure coronavirus (COVID-19). 
                                    </p>
                                    <strong>1. Spraying or Consuming alcohol can kill Coronavirus</strong><br/>
                                    <p>Alcohol when comes in contact with skin can cause harm, especially when it enters your eyes or mouth accidentally. Avoid using them on your body. Alcohol consumption does not kill coronavirus inside the body. Heavy alcohol consumption weakens the immune system and decreases ability to cope with infectious diseases.  In fact, it even makes people more vulnerable to COVID-19.</p><br/>
                                    
                                    <strong>2. Steam Inhalation can kill Coronavirus</strong><br/>
                                    <p>There are false claims that steam inhalation can prevent COVID-19 infection. In reality, this statement would be imprecise and potentially dangerous. Steam inhalation is only useful as a home remedy for colds and upper respiratory infections. Though it has few benefits but more of serious and dangerous side effects such as burn Injuries. Neither the US Centers for Disease Control and Prevention (CDC) nor the World Health Organization (WHO) recommend steam as a treatment for coronavirus.</p><br/>
                                    
                                    <strong>3. Only People with Preexisting Symptoms Are at Risk of Coronavirus Infection</strong><br/>
                                    <p>The truth is coronavirus can enter the body of all ages and lead to complications and death in some cases. However, individuals with preexisting health conditions, such as diabetes, obesity, or asthma, are more likely to become severely ill.</p><br/>
                                    
                                    <strong>4. Just wearing Face Masks Protects from Coronavirus</strong><br/>
                                    <p>People should wear cloth face masks in public areas wherever it is difficult to maintain a 6-foot, or 2-metre distance from others. This will decrease the spread of the virus. While wearing a mask, we should also follow other precautions, like avoid touching the face, physical distancing, and washing the hands frequently.</p><br/>
                                    
                                    <strong>5. Hand Dryers Kill the Coronavirusr</strong><br/>
                                    <p>Hand dryers do not kill coronavirus. One of the best ways is to protect yourself from the virus is keep washing your hand with soap and water frequently for at least 20 seconds at a time. Use an alcohol-based hand sanitizer whenever this is not possible.</p><br/>
                                    
                                    <strong>6. Garlic Gives Protection against Coronavirus</strong><br/>
                                    <p>Garlic is a healthy food that contain certain antibacterial and antiviral properties. Till date, there is no such evidence that proves - garlic can prevent Covid-19. Regular consumption of garlic may help to enhance your immunity, crucial for fighting this disease.</p><br/>
                                    
                                    <strong>7.COVID-19 Vaccine is Unsafe</strong><br/>
                                    <p>There is misinformation about covid-19 vaccine is unsafe since it was developed so quickly. This is not true. The vaccines are still very effective and can protect you against the virus. All vaccines are made under strict guidelines and ensure 100% safe and effective.</p><br/>

                                    <strong>8. COVID-19 Vaccine and Pregnancy</strong> 
                                    <p>Another myth is women will not be able to get pregnant or women experience miscarriage if they take a COVID-19 vaccine. The myth has been spread across social media which claims that antibodies made from the COVID-19 vaccines will bind to proteins in the placenta (the organ that gives an unborn baby food and oxygen) and stop pregnancy. While there is no such scientific study that supports this myth.</p> 
                                    
                                    <strong>9. Vitamin and Mineral Supplements Kill Coronavirus</strong>
                                    <p>The Fact is Vitamins D and C, and the mineral zinc can indeed boost your immune system and protect against viruses. This is mainly true for people who lack these supplements. But they don’t cure or treat COVID-19 if you already suffering from a virus.</p>
                                    
                                    <strong>10.COVID-19 Reinfection</strong> 
                                    <p>“I had COVID-19, so I am immune” is another myth. Whereas, scientists have studied Covid-19 reinfection is possible. The study is still in progress that how likely we are to get infected again, how often it happens, and who has a higher chance of getting the disease again. Now if you’ve just recovered from COVID-19, you must wear a mask in public, stay away from crowds, and wash your hands regularly.</p>
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
 
export default BlogPageTwo;