import './../styles/navbar.css'
import {RiArrowDropDownFill} from 'react-icons/ri'
import {VscAccount} from 'react-icons/vsc'
import {GrBasket} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function Navbar(){
    const [sub,st2]=useState(0);
    const [cou,scoun]=useState(0)
    useEffect(() => {
        idata1();
    }, [])
    const idata1=()=>{
      axios.get("https://ecommercebackend-manish.herokuapp.com/cartdatai").then(res=>{
           totalp2(res.data);
      }).catch(err=>{
          console.log(err);
      })
    }
    const totalp2=(cartd2)=>{
        let sum=0;
        console.log(cartd2);
        cartd2.forEach(element=>{
           sum+=(element.qty)*(parseInt(element.price));
        })
        console.log(sum);
        scoun(cartd2.length);
        st2(sum+20);
        console.log(cou);
        console.log(sub);
    }
    return(
        <>
           <div className="navbar-main">
               <div className="navbar1">
                    <div className="end">
                     <span className='en'>EN</span> 
                     <IconContext.Provider value={{className: 'dd'}} >
                     <RiArrowDropDownFill />
                     </IconContext.Provider>
                     <IconContext.Provider value={{className: 'dd'}} >
                     <span className="dollar">$</span>
                     <RiArrowDropDownFill />
                     </IconContext.Provider>
                    </div>
                    <div className='main'>
                     <div className="profile">
                     <IconContext.Provider value={{className: 'icon'}} >
                     <VscAccount />
                     </IconContext.Provider>
                     <span className="icon-c">My profile</span>
                     </div>
                     <Link to="/cart" className="cart-link">
                     <div className="profile">
                     <IconContext.Provider value={{className: 'icon'}} >
                     <GrBasket />
                     </IconContext.Provider>
                     <span className="icon-c">{cou} items</span>
                     <span className="price">${sub}</span>
                     </div>
                     </Link>
                     <div className="profile">
                     <IconContext.Provider value={{className: 'icon search'}} >
                     <BiSearch />
                     </IconContext.Provider>
                     </div>
                    </div>
               </div>
           </div>
           <div className="navbar-main2">
                <div className='logo'>
                     <h2 className='ishop'><span className='i'>i</span>SHOP</h2>
                </div>
                <div className='navli'>
                    <Link to='/' className="lc">HOME</Link>
                    <Link to="/store" className="lc">STORE</Link>
                    <Link to="/store" className="lc">IPHONE</Link>
                    <Link to="/store" className="lc">IPAD</Link>
                    <Link to="/store" className="lc">MACBOOK</Link>
                    <Link to="/store" className="lc">ACCESORIES</Link>
                </div>
           </div>
        </>
    )
}
export default Navbar;