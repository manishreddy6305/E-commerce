import Rating from "./rating.js";
import Dname from "./dname";
import Price from "./price";
import './../styles/card2.css'
function Card2(props){
    return(
        <>
            <div className="card2-main">
              <div className="card2-img">
              <img src={props.img} alt='img' className='headphone'></img>
              </div>
              <div className="card2-sub">
              <Dname name={props.name}/>
              <div className="card2-rating">
              <Rating rating={"star"}/>
              <Rating rating={"star"}/>
              <Rating rating={"star"}/>
              <Rating rating={"star"}/>
              <Rating rating={"starn"}/>
              </div>
              <Price price="499"/>
              </div>
            </div>
        </>
    )
}
export default Card2