import './../styles/accesories.css'
function Accesories(props){
    return(
        <>
           <div className="Acc">
                <p className={props.style1}>{props.devicename}</p>
                <p className={props.style2}>{props.count}</p>
            </div>
        </>
    )
}
export default Accesories;