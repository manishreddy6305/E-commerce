import './../styles/cartcard.css'
import {CgCloseO} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import {HiMinusSm} from 'react-icons/hi'
import {HiPlus} from 'react-icons/hi'
import axios from 'axios';
import { useState } from 'react';
function Cartcard(props){
    const close2=()=>{
        const ran=Date.now();
        console.log(ran);
        console.log("clicked")
        axios.post("https://ecommercebackend-manish.herokuapp.com/cartdatadelete",{_id:props.data._id}).then(res=>{
            console.log(res.data);
            props.u(ran);
        })
    }
    const plus=()=>{
        axios.post("https://ecommercebackend-manish.herokuapp.com/cartqty",{_id:props.data._id,qty:props.data.qty}).then(res=>{
            const ran2=Date.now();
            console.log(res.data);
            props.u2(ran2)
        })
    }
    const minus=()=>{
        if(props.data.qty>1){
        axios.post("https://ecommercebackend-manish.herokuapp.com/cartqty2",{_id:props.data._id,qty:props.data.qty}).then(res=>{
            const ran3=Date.now();
            console.log(res.data);
            props.u3(ran3)
        })}
    }
    return(
        <>
        <div className="cc-main">
         <div className="cc-device">
         <IconContext.Provider value={{className:"close"}}>
         <CgCloseO onClick={close2}/>
         </IconContext.Provider>
         <img src={props.data.imgurl} className="cc-img"></img>
         <p className="cc-name">{props.data.name}</p>
         </div>
         <div className="cc-price">
         <p className="cc-price-sub ccp">$ {(props.data.qty)*(parseInt(props.data.price))}</p>
         <div className="QTY">
         <IconContext.Provider value={{className:"close2"}}>
         <HiMinusSm onClick={minus}/>
         </IconContext.Provider>
         <p className="cc-num">{props.data.qty}</p>
         <IconContext.Provider value={{className:"close2"}}>
         <HiPlus  onClick={plus}/>
         </IconContext.Provider>
         </div>
         <p className="cc-price-sub ccp2">$ {props.data.price}</p>
         </div>
        </div>
        </>
    )
}
export default Cartcard;