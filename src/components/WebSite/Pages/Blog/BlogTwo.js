import React from 'react';
import BOne from './BOne';
import BTwo from './BTwo';

function BlogTwo() {
  return (
    <section className="section section-doctor">
<div className="container">
<div className="row">
    <div className="col-lg-4">
        <div className="section-header">
            <h2>Women Health And Wellness</h2>
        </div>
        <div className="about-content">
            <p>Easy-to-Read health information from our medical experts enables people to live in a better way as per health is concerned.</p>					
            {/* <a href={() => false}>Read More</a> */}
        </div>
        <div id="view-btn">
        <button className="btn view-btn">Read More</button>
        </div>
    </div>
<div className="col-lg-8">
<div className="row">
<BOne/>
<BTwo/>
</div>
</div>
</div>
</div>
</section>
  )
}

export default BlogTwo;     