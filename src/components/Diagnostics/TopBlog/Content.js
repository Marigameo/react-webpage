import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
    return ( 
        <main className='container'>
            <h1>COVID-19</h1>
            <p>COVID-19 infects different people in different way. The symptoms may be mild or severe.<br/>The most common symptoms can be:</p>
            <ul>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Tiredness and body aches</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Fever</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Dry cough</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Difficulty breathing</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Loss of taste or smell</li></div>
                </div>
                <div className="row">
                    <div className="col-lg-1 lg-size"><FontAwesomeIcon icon={faUserNurse}/></div>
                    <div className="col-lg-11"><li>Nausea and diarrhea</li></div>
                </div>
            </ul>
        </main>
     );
}
 
export default Content;