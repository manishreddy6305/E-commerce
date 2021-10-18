import Cartcard from "./cartcard";
import Header from "./header";
import './../styles/cart.css'
import { useEffect } from "react";
import Accesories from "./accesories";
import { useState } from "react";
import axios from "axios";
function Cart(){
    const [coupon,sc]=useState("0");
    const [subtotal,st]=useState(0);
    const [update,su]=useState("");
    const [update2,su2]=useState("");
    const [update3,su3]=useState("");
    const [cartdata,scd]=useState([]);
    useEffect(() => {
        idata();
    }, [update,update2,update3,cartdata,coupon])
    const idata=()=>{
      axios.get("https://ecommercebackend-manish.herokuapp.com/cartdatai").then(res=>{
           scd(res.data);
           totalp();
      }).catch(err=>{
          console.log(err);
      })
    }
    const totalp=()=>{
        let sum=0;
        cartdata.forEach(element=>{
           sum+=(element.qty)*(parseInt(element.price));
        })
        st(sum);
    }
    const Redeem=()=>{
        let c=document.getElementById("re").value;
        axios.post("https://ecommercebackend-manish.herokuapp.com/redeem",{value: c}).then(res=>{
                console.log(res.data);
                sc(res.data);
       })
    }
    const co=()=>{
        if(coupon=="0")
        return <p>$ {parseInt(subtotal)+20}</p>
        else
        return <p>$ {parseInt(subtotal)-70}</p>
    }
    return(
        <>
        <Header header="Cart"/>
        <div className="cart">
        <div className="cart-main">
          <div>
              <p className="cpi">PRODUCT</p>
          </div>
          <div className="cart-price">
              <p className="cpi">PRICE</p>
              <p className="cpi">QTY</p>
              <p className="cpi2">UNIT PRICE</p>
          </div>
        </div>
        {
            
            cartdata.map(element=>{
                return <Cartcard data={element} u={su} u2={su2} u3={su3}/>
            })
         }
        <div className="subtotal">
           <div className="coupon">
              <input type="text" className="VC" id="re" placeholder="Voucher code"/>
              <input type="submit" className="Re" value="Redeem" onClick={Redeem}/>
           </div>
           <div className="Billing">
            <Accesories devicename="Subtotal" count={"$ "+subtotal} style1="Adn2" style2="Adc2"/>
            <Accesories devicename="Shipping fee" count="$ 20" style1="Adn2" style2="Adc2"/>
            <Accesories devicename="Coupon" count={coupon} style1="Adn2" style2="Adc2"/>
            <div className="total">
             <h3>TOTAL</h3>
             {
                co()
             }
            </div>
            <button className="Pay">Check out</button>
           </div>
        </div>
        </div>
        </>
    )
}
export default Cart;