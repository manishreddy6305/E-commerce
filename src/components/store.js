import './../styles/store.css'
import Accesories from './accesories';
import Header from './header'
import Poster from './poster';
import axios from 'axios';
import Card from './card';
import { useEffect } from 'react';
import { useState } from 'react';
function Store(){
    let d=0;
    const [range,sr]=useState(600);
    const [n,sn]=useState("12");
    const [name,sname]=useState("");
    const [data,setdata]=useState([]);
    useEffect(() => {
        loaddata();
    },[])
    const loaddata=()=>{
        axios.get('https://ecommercebackend-manish.herokuapp.com/data').then(res=>{
           setdata(res.data);
       })
   }
    const n1=()=>{
        let d=document.getElementById("Name").value;
        console.log(d);
        sname(d);
    }
    const num=()=>{
        let d=document.getElementById("num").value;
        console.log(d);
        sn(d);
    }
    const ch=()=>{
        let t=document.getElementById("range").value;
        console.log(t);
        sr(t);
    }
    return(
        <> 
           <Header header="Store / Accesories"/>
           <div className="center">
           <div className='store-main'>
               <div className="store-sub-1">
                   <div className="store-content">
                        <p className="B">Accesories</p>
                        <Accesories devicename="Apple car" count="2" style1="Adn" style2="Adc"/>
                        <Accesories devicename="Air port & Wireless" count="48"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Cables & Docks" count="14"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Case & Films" count="15"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Charging devices" count="23"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Connected Home" count="1"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Headphones" count="95"  style1="Adn" style2="Adc"/>
                   </div>
                   <div className="store-content">
                         <div className="store-ranger">
                         <p className="A">Prices</p>
                         <p className="zero">0 - {range+" $"}</p>
                         </div>  
                         <input type="range" min="0" max="600" id="range"  onInput={ch}/>
                   </div>
                   <div className="store-content" >
                       <p className="B">Color</p>
                       <input type="radio" style={{marginLeft:"15px"}}></input>
                       <input type="radio" style={{backgroundColor:"red"}}></input>
                       <input type="radio" style={{backgroundColor:"brown"}}></input>
                       <input type="radio" style={{backgroundColor:"green"}}></input>
                       <input type="radio" style={{backgroundColor:"black"}}></input>
                       <input type="radio"style={{backgroundColor:"violet"}}></input>
                   </div>
                   <div className="store-content">
                        <p className="B">Brand</p>
                        <Accesories devicename="Apple" count="2"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="LG" count="48"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Nokia" count="14"  style1="Adn" style2="Adc"/>
                        <Accesories devicename="Samsung" count="15"  style1="Adn" style2="Adc"/>
                   </div>
               </div>
               <div className='store-sub-2'>
                   <Poster Poster="poster-main2" content="poster-content2" style="poster2" postersub="poster-sub2" postercontent="iPhone 8"/>
                   <div className="Store-navbar">
                        <p className="store-navbar-content">{data.length} Items</p>
                        <p className="store-navbar-content">Sort By</p>
                        <div className="store-navbar-content">
                        <select className="option" id="Name" onClick={n1}>
                           <option name="Name" value="">Name</option>
                           <option name="Name" value="Mac">Mac</option>
                           <option name="Name" value="ipad">Ipad</option>
                           <option name="Name" value="ipod">Ipod</option>
                           <option name="Name" value="iphone">Iphone</option>
                           <option name="Name" value="iwatch">Iwatch</option>
                           <option name="Name" value="Accesories">Accesories</option>
                        </select>
                        </div>
                        <p className="store-navbar-content">Show</p>
                        <div className="store-navbar-content">
                        <select className="option" id="num" onClick={num}>
                            <option>Value</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                        </select>
                        </div>
                   </div>
                   <div className="devices2">
                  {
                      data.map(element => {
                          if(name=="")
                          {
                            d++;
                             if(d>n||element.price>range)
                             return ;
                             return <Card info={element} style="card-main2"/> ; 
                          }
                          else{
                              if(element.category==name)
                              {    d++;
                                  if(d>n||element.price>range)
                                  return;
                                  return <Card info={element} style="card-main2"/> ;
                              }
                              return;
                          }                       
                      })
                  }
              </div>
                   <div> 
    
                   </div>
               </div>
           </div>
           </div>
        </>
    )
}
export default Store;