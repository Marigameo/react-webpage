import React from 'react';
import CountDown from '../Components/CountDown/CountDown';
import './Content.css'

const Content = () => {
    return ( 
        <main id='coming-soon' style={{padding: '14rem 10rem 5rem'}}>
            <section>
            <h1>Under <br/>Construction</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>Inventore sunt eos facilis dolor quia saepe dolores sint quod quidem ad.</p>
            <CountDown/>
            <h4>We will notify you for updates.</h4>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Notify Me</button>
                </div>
            </div>
            </section>
        </main>
     );
}
 
export default Content;