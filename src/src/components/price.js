import './../styles/price.css'
function Price(props){
    return(
        <>
          <div className="card-price">
                   <span className="card-red">${props.price}</span>
                   <span className="card-through">$599</span>
          </div>
        </>
    )
}
export default Price ;