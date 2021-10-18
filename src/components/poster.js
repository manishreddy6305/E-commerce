import './../styles/poster.css'
function Poster(props){
    return(
        <>
           <div className={props.Poster}>
                 <div className={props.postersub}>
                     <div className={props.content}>
                         <p className="ip6">{props.postercontent}</p>
                         <p className="tag">Performance and design. Taken right to the edge.</p>
                         <p className="Sn">SHOP NOW</p>
                     </div>
                     <img src="./images/miscellaneous/2_corousel.png" className={props.style}></img>
                 </div>
           </div>
        </>
    )
}
export default Poster;