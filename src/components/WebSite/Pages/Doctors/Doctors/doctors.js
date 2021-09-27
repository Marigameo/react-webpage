import React from "react";
import {Link} from "react-router-dom";
import Docinfo from "./Docinfo";

const Doctors = () => {
    return (
    <section id='view-btn'>
        <div className='doc-carousel'>
        <Docinfo/>
        </div>    
        <Link to="/doctors">
            <button className=" btn view-btn">View More</button>
        </Link>
    </section>
    );
};

export default Doctors;