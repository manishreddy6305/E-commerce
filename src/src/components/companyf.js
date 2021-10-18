import './../styles/companyf.css'
function Companyf(props){
    return(
        <>
          <div className="cf">
               <img src={props.details.link} className="fimg"></img>
               <h4 className="fs">{props.details.head}</h4>
               <p className="cfc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum quia laborum, aspernatur aliquam non repellat vel aut at voluptas nesciunt molestiae iste nulla! Dicta est unde dolores accusantium. Ducimus.</p>
          </div>
        </>
    )
}
export default Companyf;