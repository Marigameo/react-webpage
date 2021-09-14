import React from 'react';
import main from "../../assets/img/app/main.png";

const AppSection = () => {
  return (
    <section style={{backgroundImage: "linear-gradient(to right, #fbfdff , #E6EFF9 )"}} className="section section-features">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <div className="feature-text">
                <h2 className="mt-2">Medatu App coming soon</h2><br/>
                    <p>1000+ Online Healthcare Experts. Medatu makes It Easy to book a Virtual appointment anywhere in India.</p>
                    <div style={{fontSize: "14px !important"}}>
                        <input type="text" placeholder="Enter Your Phone Number" name="app" id="app"/>
                        <button id="app-num">Join The List</button>
                    </div>
                </div>
                </div>
                <div className="col-md-8">
                    <div className="section-header text-center features-img">
                        <img src={main} className="img-fluid" alt="Feature"/>
                    </div>
                </div>

        </div>
    </div>
    </section>
  );
};

export default AppSection;