import './../styles/header.css'
function Header(props){
    return(
        <>
          <p className='header'>{props.header}</p>
        </>
    )
}
export default Header;