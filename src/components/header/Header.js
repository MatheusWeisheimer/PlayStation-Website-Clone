import { useRef, useState } from "react"
import { navData } from "./navdata"
import "./Header.css"
import NavBtn from "./NavBtn"
import Navdrop from "./Navdrop"

function Header() {
    const [mobileNavOn, setMobileNavOn] = useState(false)
    const [dropTitle, setDropTitle] = useState("Games")
    const [isDropHidden, setIsDropHidden] = useState(true)

    const navRef = useRef()

    const navBtnElements = navData.map(({title}) => (
        <NavBtn key={title} title={title} dropState={{dropTitle, setDropTitle, isDropHidden, setIsDropHidden}} />
    ))

    function toggleNav() {
        navRef.current.classList.toggle("header-navbar-toggle")
        setMobileNavOn(prev => !prev)
    }

    return (
        <header>
            <div className="main-header-container">
                <div className="header-icon-container">
                    <img className="header-navbar-icon" onClick={() => {toggleNav(); setIsDropHidden(true)}} src={require(`../../assets/images/header-nav-${mobileNavOn ? "close" : "icon"}.png`)} alt="toggle navbar button" />
                    <img className="header-search-icon" src={require("../../assets/images/search-glass.png")} alt="magnifying glass icon" />
                </div>
                <img className="ps-header-logo" src={require("../../assets/images/playstation-logo.png")} alt="playstation logo" />
                <button className="header-sign-btn">Sign In</button>
                <nav ref={navRef} className="header-navbar header-navbar-toggle">
                    {navBtnElements}
                </nav>
            </div>
            <Navdrop dropState={{dropTitle, setDropTitle, isDropHidden, setIsDropHidden}} />
        </header>
    )
}

export default Header