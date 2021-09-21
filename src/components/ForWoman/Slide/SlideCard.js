import { SlideData } from "./SlideData";

const SlideCard = () => {
    return ( 
        <section className='fw-slide'>
                {SlideData.map((item,index) => {
                    return(
                        <div className='fw-s-deet'>
                        <h3>{item.hOne}</h3>
                        <p>{item.para}</p>
                        </div>
                    )
                })}
           
        </section>
     );
}
 
export default SlideCard;