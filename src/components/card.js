import './../styles/card.css'
import Rating from './rating.js';
import Price from './price';
import Dname from './dname';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Card(props){
    const cartdata={
    _id: props.info._id,
    imgurl: props.info.imgurl,
    name: props.info.name,
    price: props.info.price,
    category: props.info.category,
    qty: 1
    };
    const [photo,sphoto]=useState('');
    const [s,ss]=useState("cart_icons");
    const [s1,ss1]=useState("device-img");
    useEffect(() => {
        sphoto(props.info.imgurl);
    }, [])
    const icons=()=>{
        ss("cart_icons2");
        ss1("device-img2");
    }
    const icons2=()=>{
        ss("cart_icons");
        ss1("device-img")
    }
    const addtocart=()=>{
        console.log(cartdata);
        axios.post("https://ecommercebackend-manish.herokuapp.com/cartdata",cartdata).then(res=>{
            console.log(res);
        })
    }
    return(
        <>
           <div className={props.style} onMouseEnter={icons} onMouseLeave={icons2}>
                <div className="HOT">
                    HOT
                </div>
                 <div className="dphoto">
                   <img src={photo} className={s1}/>
                 <div className={s}>
                 <img src="./images/Web/favorite_icon.svg" className="icons"/>
                 <img src="./images/Web/add_cart_icon.svg" className="icons" onClick={addtocart}/>
                 </div>
                 </div>
                 <Dname name={props.info.name}/>
                 <div className="rating">
                    <Rating rating={"star"}/>
                    <Rating rating={"star"}/>
                    <Rating rating={"star"}/>
                    <Rating rating={"star"}/>
                    <Rating rating={"starn"}/>
                 </div>
                 <Price price={props.info.price}/>
           </div>
        </>
    )
}
export default Card;