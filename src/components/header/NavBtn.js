import { useState } from "react"
import "./NavBtn.css"

function NavBtn(props) {
    const {dropTitle, setDropTitle, isDropHidden, setIsDropHidden} = props.dropState
    const title = props.title

    const [hovered, setHovered] = useState(false)

    const btnIsFocused = dropTitle === title && !isDropHidden ? true : false

    function handleClick() {
        setDropTitle(title)
        if (isDropHidden) {
            setIsDropHidden(false)
        }
        else if (!isDropHidden && dropTitle === title) {
            setIsDropHidden(true)
        }
    }

    function toggleHovered() {
        setHovered(prev => !prev)
    }

    function getBtnIcons(title) {
        if (btnIsFocused) {
            return ({
                icon: `nav-${title}-filled-blue`,
                arrow: `filled-arrow`
            })
        }
        else {
            if (hovered) {
                return ({
                    icon: `nav-${title}-outline-blue`,
                    arrow: `filled-arrow`
                })
            }
            else {
                return ({
                    icon: `nav-${title}-outline-gray`,
                    arrow: `unfilled-arrow`
                }) 
            }
        }
    }

    return (
        <button onClick={handleClick} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} className={`nav-btn ${btnIsFocused ? "nav-btn-background-blue" : ""}`}>
            <img className="nav-btn-icon" src={require(`../../assets/images/${getBtnIcons(title).icon}.png`)} alt={`${title} icon`} />
            <span className={`nav-btn-title ${btnIsFocused ? `nav-btn-title-opened` : ""}`}>{title}</span>
            <img className={`nav-btn-arrow ${btnIsFocused ? "nav-btn-arrow-rotate" : ""}`} src={require(`../../assets/images/${getBtnIcons(title).arrow}.png`)} alt="arrow icon pointing down" />
        </button>
    )
}

export default NavBtn