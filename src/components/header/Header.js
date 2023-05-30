import { useState } from "react"
import HeaderCSS from "./Header.module.css"
import Navbar from "./Navbar"
import Navdrop from "./Navdrop"

function Header() {
    const [dropState, setDropState] = useState("Hide")

    return (
        <header className="headerContainer">
            <div className="main-header">
                <Navbar dropState={{dropState, setDropState}} />
            </div>
            { dropState !== "Hide" && <Navdrop dropType={dropState}/> }
        </header>
    )
}

export default Header