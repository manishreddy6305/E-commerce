import './../styles/footer.css' 
import {RiFacebookFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import { IconContext } from 'react-icons/lib'
import Footersub from './footersub'
function Footer(){
    return(
        <>
           <div className="footer-main">
                <div className='footer-sub'>
                     <div className="footerc1">
                       <div className="first">
                       <h4 className='is'><span className='isu'>i</span>SHOP</h4>
                        <p className="footerc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur esse unde magnam! Odit perspiciatis veritatis aliquid officia, quaerat harum non.</p>
                       </div>
                       <div className="first">
                       <h5 className="fu">Follow Us</h5>
                        <p className='footerc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur esse unde magnam! Odit </p>
                        <div className="ft">
                        <IconContext.Provider value={{className:'facebook'}}>
                        <RiFacebookFill />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'facebook'}}>
                        <FaTwitter />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'facebook'}}>
                        <GrInstagram />
                        </IconContext.Provider>
                        </div>
                       </div>
                       <div className="first">
                       <h5 className="fu">Contact Us</h5>
                        <p className="footerc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur esse unde magnam! Odit perspiciatis veritatis aliquid officia, quaerat harum non.</p>
                       </div>
                     </div>
                     <div className="footerc2">
                     <Footersub />
                     <Footersub />
                     <Footersub />
                     <Footersub />
                     <Footersub />
                     <Footersub />
                     </div>
                     <div className="cards">
                       <img src="./images/Web/Western_union.svg" className="card"></img>
                       <img src="./images/Web/master_card.svg" className="card"></img>
                       <img src="./images/Web/Paypal.svg" className="card"></img>
                       <img src="./images/Web/visa.svg" className="card visa"></img>
                     </div>
                </div>
           </div>
        </>
    )
}
export default Footer;