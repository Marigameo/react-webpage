import { Link } from "react-router-dom";

const AboutIntro = () => {
    return ( 
        <main style={{padding: '0 10rem 10rem'}}>
            <h1>About Us</h1><br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nequen sapiente! <br/>Dicta excepturi, dolorem blanditiis ratione reprehenderit quas incidunt. <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, quasi?</p>
            <br/>
            <Link to='/about'><button type="button" className="btn btn-success">Click Here</button></Link>
            
        </main>
     );
}
 
export default AboutIntro;