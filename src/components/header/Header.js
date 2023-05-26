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
        <>  
            <div className="navBar">
                {navButtons}
            </div>
            { navDrop !== "Hide" && <Navdrop dropType={navDrop}/> }
        </>
    )
}

export default Header