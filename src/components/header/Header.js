import { useState } from "react"
import { navData } from "./navdata"
import Navdrop from "./Navdrop"

function Header() {
    const [navDrop, setNavDrop] = useState("Hide")

    const navElements = navData.map(item => <h2 key={item.title}>{item.title}</h2>)

    return (
        <>
            { navDrop != "Hide" && <Navdrop dropType={navDrop}/> }
        </>
    )
}

export default Header