import React from 'react';
import BOne from './BOne';
import BTwo from './BTwo';
import './Blog.css'

function Blog() {
  return (
    <section className="section section-doctor">
<div className="container">
<div className="row">
    <div className="col-lg-4">
        <div className="b-header">
            <h2>Information for your health and wellness</h2>
        </div>
        <div className="about-content">
            <p style={{width: 'fit-content'}}>Easy-to-Read health information from our medical experts enables people to live in a better way as per health is concerned.</p>					
            <a className='r-more' href={() => false}>Read More</a>
        </div>
    </div>
    <div className="col-lg-8">
        <div className="row">
            <div className="s-blog">
                <BOne/>
                <BTwo/>
            </div>
        </div>
    </div>
</div>
</div>
</section>
  )
}

export default Blog;