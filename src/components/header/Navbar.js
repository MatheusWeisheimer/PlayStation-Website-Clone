import { navData } from "./navdata" 
import NavbarCSS from "./Navbar.module.css"
import NavBtn from "./NavBtn"

function Navbar(props) {
    const {dropState, setDropState} = props.dropState

    const navBtnEls = navData.map(item => (
        <NavBtn key={item.title} dropState={{dropState, setDropState}} title={item.title}/>
    ))

    return (
        <div className={NavbarCSS.navContainer}>
            <div className={NavbarCSS.container}>
                <img className={NavbarCSS.psLogo} src={require("../../assets/images/playstation-logo.png")} />
                <div className={NavbarCSS.navButtons}>{navBtnEls}</div>
            </div>
            <div className={NavbarCSS.container}>
                <button className={NavbarCSS.signBtn}>Sign In</button>
                <img className={NavbarCSS.searchGlass} src={require("../../assets/images/search-glass.png")} />
            </div>
        </div>
    )
}

export default Navbar