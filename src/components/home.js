import Poster from './poster';
import Companyf from './companyf';
import Card2 from './card2';
import Navbar2 from './navbar2';
import './../styles/home.css'
function Home(){
    const title={
        link:"./images/Web/shipping.svg",
        head:"FREE SHIPPING"
    }
    const title2={
        link:"./images/Web/refund.svg",
        head:"100% REFUND"
    }
    const title3={
        link:"./images/Web/support.svg",
        head:"SUPPORT 24/7"
    }
    return(
        <>
         <div className="image1">
         <img src="./images/miscellaneous/corousel_3.png" className="hp"/>
         </div>
         <Navbar2 />
         <Poster Poster="poster-main" content="poster-content" style="ips" postersub="poster-sub" postercontent="iPhone 6 Plus"/>
         <div className="companyf-main">
         <div className="companyf-sub">
          <Companyf details={title}/>
          <Companyf details={title2}/>
          <Companyf details={title3} />
         </div>
         </div>
         <div>
         <h2 className="fd">FEATURED PRODUCTS</h2>
         </div>
         <div className="slider">
         <div className="slider-sub">
          <Card2 img="./images/Web/beats_solo_2.svg" name="Ear Headphones Black"/>
          <Card2 img="./images/Web/H-squared.svg"  name="H-Squared tvTray"/>
          <Card2 img="./images/Web/Netatmo_rain.svg"  name="Netatmo Rain Gauge"/>
         </div>
         </div>
        </>
    )
}
export default Home;