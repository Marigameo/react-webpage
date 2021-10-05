import { Container } from "react-bootstrap";
import { WHIData } from "./WHIData";

const WHI = () => {
    return ( 
        <>
        <Container fluid className='whi'>
        {/* <h2>Women Health Issues</h2> */}
        <h4>Consult with an experienced doctor today!</h4>
        <article className='whi-con'>
            {WHIData.map((item, index) => {
                return(
                    <div className="whi-box">
                        <img src={item.img} alt="i-img" width={64} height={64} />
                        <h5 className='text-center'>{item.text}</h5>
                    </div>
                )
            })}
        </article>
        </Container>
        </>
     );
}
 
export default WHI;