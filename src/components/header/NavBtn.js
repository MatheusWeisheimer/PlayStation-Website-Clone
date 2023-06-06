import { useState } from "react"
import "./NavBtn.css"

function NavBtn(props) {
    const {dropTitle, setDropTitle, isDropHidden, setIsDropHidden} = props.dropState
    const title = props.title

    const [hovered, setHovered] = useState(false)

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
        if (dropTitle === title) {
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
        <button onClick={handleClick} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} className={`nav-btn ${dropTitle === title ? "nav-btn-background-blue" : ""}`}>
            <img className="nav-btn-icon" src={require(`../../assets/images/${getBtnIcons(title).icon}.png`)} alt={`${title} icon`} />
            <span className={`nav-btn-title ${dropTitle === title ? `nav-btn-title-opened` : ""}`}>{title}</span>
            <img className={`nav-btn-arrow ${dropTitle === title ? "nav-btn-arrow-rotate" : ""}`} src={require(`../../assets/images/${getBtnIcons(title).arrow}.png`)} alt="arrow icon pointing down" />
        </button>
    )
}

export default NavBtn