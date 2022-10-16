import Logo from "./../../assets/logo.svg"

const Header = () =>{
    return(
        <div className="header">
            <div className="content">
                <img className="logo" src={Logo} alt="Ratepunk logo" width="125px" height="32px"/>
                <ul className="nav_bar">
                    <li><a className="active_link" href="#">Chrome Extension</a></li>
                    <li><a href="#">Price Comparison</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header