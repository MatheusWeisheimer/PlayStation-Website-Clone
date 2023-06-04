import { useState } from "react"
import "./NavBtn.css"

function NavBtn(props) {
    const {dropState, setDropState} = props.dropState
    const title = props.title

    const [hovered, setHovered] = useState(false)

    function handleClick() {
        if (dropState === title) {
            setDropState("Hide")
        }
        else { setDropState(title) }
    }

    function toggleHovered() {
        setHovered(prev => !prev)
    }

    function getBtnIcons(title) {
        if (dropState === title) {
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
        <button onClick={handleClick} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered} className={`nav-btn ${dropState === title ? "nav-btn-background-blue" : ""}`}>
            <img className="nav-btn-icon" src={require(`../../assets/images/${getBtnIcons(title).icon}.png`)} alt={`${title} icon`} />
            <span className={`nav-btn-title ${dropState === title ? `nav-btn-title-opened` : ""}`}>{title}</span>
            <img className={`nav-btn-arrow ${dropState === title ? "nav-btn-arrow-rotate" : ""}`} src={require(`../../assets/images/${getBtnIcons(title).arrow}.png`)} alt="arrow icon pointing down" />
        </button>
    )
}

export default NavBtn