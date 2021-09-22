import React from 'react';
import main from "../../assets/img/app/Virtual.png";

const AppSection = () => {
  return (
    <section className="section section-features">
    <div className="container">
        <div className="row">
        <div className="col-md-4">
                <div className="feature-app">
                    <img src={main} height={400} alt="Feature"/>
                </div>
            </div>
            <div className="col-md-7 f-app-t">
                <div className="feature-text">
                <h2 className="mt-2">Medatu App coming soon</h2><br/>
                    <p>1000+ Online Healthcare Experts. <br/>We make it easy to book a Virtual appointment anywhere in India.</p>
                    <div style={{fontSize: "14px !important"}}>
                        <input type="text" placeholder="Enter Your Phone Number" name="app" id="app"/>
                        <button id="app-num">Join The List</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default AppSection;