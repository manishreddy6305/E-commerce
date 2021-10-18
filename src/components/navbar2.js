import './../styles/navbar2.css'
import Card from "./card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Navbar2(){
    useEffect(() => {
        loaddata();
    },[])
    const [tab,stab]=useState("All");
    const [count,scount]=useState(8);
    const [data,setdata]=useState([]);
    const loaddata=()=>{
         axios.get('https://ecommercebackend-manish.herokuapp.com/data').then(res=>{
            setdata(res.data);
        })
    }
    const hi=()=>{
        if(count>24)
              return "SHOW LESS"

        else
        {
            return "LOAD MORE"
        }
      }
      const one=()=>{
          stab("All");
          scount(8);
          d=0;
          let num=0;
          let c=document.querySelectorAll(".nav2-link");
          c.forEach(element=>{
          num++;
            if(num==1)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
     const two=()=>{
         stab("Mac");
         scount(8);
         d=0;
         let num=0;
         let c=document.querySelectorAll(".nav2-link");
         c.forEach(element=>{
         num++;
            if(num==2)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
     const three=()=>{
         stab("iphone");
         scount(8);
         d=0;
         let num=0;
         let c=document.querySelectorAll(".nav2-link");
         c.forEach(element=>{
         num++;
            if(num==3)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
     const four=()=>{
         stab("ipad");
         scount(8);
         d=0;
         let num=0;
         let c=document.querySelectorAll(".nav2-link");
         c.forEach(element=>{
         num++;
            if(num==4)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
     const five=()=>{
         stab("ipod");
         scount(8);
         d=0;
         let num=0;
         let c=document.querySelectorAll(".nav2-link");
         c.forEach(element=>{
         num++;
            if(num==5)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
     const six=()=>{
         stab("Accesories");
         scount(8);
         d=0 ;
         let num=0;
         let c=document.querySelectorAll(".nav2-link");
         c.forEach(element=>{
         num++;
            if(num==6)
            element.style.color='rgb(58, 164, 226)';
            else
            element.style.color='black';
         })
        }
    let d=0;
    return(
        <>
          <div className="navbar2-main">
              <div>
                    <h2 className="BS">BEST SELLER</h2>
              </div>
              <div className="nav2-links">
                        <p className="nav2-link" onClick={one}>All</p>
                        <p className="nav2-link" onClick={two}>Mac</p>
                        <p  className="nav2-link" onClick={three}>Iphone</p>
                        <p  className="nav2-link" onClick={four}>Ipad</p>
                        <p  className="nav2-link" onClick={five}>Ipod</p>
                        <p className="nav2-link" onClick={six}>Accesories</p>

              </div>
              <div className="devices">
                  {
                      data.map(element => {
                        
                        if(tab=="All")
                        {
                            d++;
                          if(d>count)
                          return;
                          return <Card info={element} style="card-main"/>
                        }
                        else
                        {
                            if(element.category==tab)
                            {
                                d++;
                                if(d>count)
                                return;
                                return <Card info={element} style="card-main"/>;
                            }
                            return ;
                        }
                      })
                  }
              </div>
              <div className="Loadmore" onClick={()=>{
                  if(count<28)
                  scount(2*count)
                  else
                  scount(8)}}>     
              {
                  hi()
              }
              </div>
          </div>
        </>
    )
}
export default Navbar2;