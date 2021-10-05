import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './FeedBack.css'

export default class FeedBack extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Slider {...settings}>
        <div className='f-box'>
                      
        <div className='text-center f-content'>
          <h3>Lorem, ipsum.</h3>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa corrupti quod odio quos blanditiis incidunt velit praesentium repellat voluptatem minus aperiam nulla accusamus, quibusdam dolorum non tempore, molestias quas."</p>
        </div>  
        <div className='f-text'>
          <p>- Person Name</p>
        </div>
      
      </div>

          <div className='f-box'>
                      
          <div className='text-center f-content'>
            <h3>Lorem, ipsum.</h3>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa corrupti quod odio quos blanditiis incidunt velit praesentium repellat voluptatem minus aperiam nulla accusamus, quibusdam dolorum non tempore, molestias quas."</p>
          </div>  
          <div className='f-text'>
            <p>- Person Name</p>
          </div>
        
        </div>

          <div className='f-box'>
                      
                      <div className='text-center f-content'>
                        <h3>Lorem, ipsum.</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa corrupti quod odio quos blanditiis incidunt velit praesentium repellat voluptatem minus aperiam nulla accusamus, quibusdam dolorum non tempore, molestias quas."</p>
                      </div>  
                      <div className='f-text'>
                        <p>- Person Name</p>
                      </div>
                    
                    </div>

          <div className='f-box'>
                      
                      <div className='text-center f-content'>
                        <h3>Lorem, ipsum.</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa corrupti quod odio quos blanditiis incidunt velit praesentium repellat voluptatem minus aperiam nulla accusamus, quibusdam dolorum non tempore, molestias quas."</p>
                      </div>  
                      <div className='f-text'>
                        <p>- Person Name</p>
                      </div>
                    
                    </div>

          <div className='f-box'>
                      
            <div className='text-center f-content'>
              <h3>Lorem, ipsum.</h3>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa corrupti quod odio quos blanditiis incidunt velit praesentium repellat voluptatem minus aperiam nulla accusamus, quibusdam dolorum non tempore, molestias quas."</p>
            </div>  
            <div className='f-text'>
              <p>- Person Name</p>
            </div>
          
          </div>
        </Slider>
      </Container>
    );
  }
}