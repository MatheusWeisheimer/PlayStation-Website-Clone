import { useState } from "react"
import { navData } from "./navdata"
import Navdrop from "./Navdrop"
import NavButton from "./NavButton"

function Header() {
    const [navDrop, setNavDrop] = useState("Hide")

    const navButtons = navData.map(item => (
        <NavButton key={item.title} title={item.title} dropState={{navDrop, setNavDrop}}/>
    ))

    return (
        <header className="header">
            <div className="main-header">
                <div className="navBar">
                    {navButtons}
                </div>
            <button>Sign In</button>
            </div>
            { navDrop !== "Hide" && <Navdrop dropType={navDrop}/> }
        </header>
    )
}

export default Header