import { useState } from "react"
import "./Header.css"
import Navbar from "./Navbar"
import Navdrop from "./Navdrop"

function Header() {
    const [dropState, setDropState] = useState("Hide")

    return (
        <header className="header-container">
            <div>
                <Navbar dropState={{dropState, setDropState}} />
            </div>
            { dropState !== "Hide" && <Navdrop dropType={dropState}/> }
        </header>
    )
}

export default Header