import { navData } from "./navdata" 
import "./Navbar.css"
import NavBtn from "./NavBtn"

function Navbar(props) {
    const {dropState, setDropState} = props.dropState

    const navBtnEls = navData.map(item => (
        <NavBtn key={item.title} dropState={{dropState, setDropState}} title={item.title}/>
    ))

    return (
        <div className="nav-broad-container">
            <div className="nav-section-container">
                <img className="ps-nav-logo" src={require("../../assets/images/playstation-logo.png")} alt="playstation logo" />
                <div className="nav-btn-container">{navBtnEls}</div>
            </div>
            <div className="nav-section-container">
                <button className="nav-sign-btn">Sign In</button>
                <img className="nav-search-icon" src={require("../../assets/images/search-glass.png")} alt="magnifying glass icon" />
            </div>
        </div>
    )
}

export default Navbar