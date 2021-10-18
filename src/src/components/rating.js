import {RiStarSFill} from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';
import './../styles/rating.css'
function Rating(props){
    return(
        <>
          <IconContext.Provider value={{className:props.rating}}>
                <RiStarSFill/>
          </IconContext.Provider>
        </>
    )
}
export default Rating;