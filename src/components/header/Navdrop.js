import { navData } from "./navdata"
import "./Navdrop.css"

function Navdrop(props) {
    const {dropState, setDropState} = props.dropState

    const currentData = navData.find(item => item.title === dropState)

    const iconSectionEls = currentData.iconSection.map(item => (
        <div className="navdrop-icon-el" key={item}>
            <div>
                <img className="navdrop-icon-image" src={require(`../../assets/images/${getImageName(item)}.png`)} alt={item} />
            </div>
            <span className="navdrop-icon-title">{item}</span>
        </div>
    ))
    
    const dotSectionEls = currentData.dotSection.map(item => (
        <div key={item} className="navdrop-dot-el">
            <span className="navdrop-dot-dot"></span>
            <span className="navdrop-dot-title">{item}</span>
        </div>
    ))

    function getImageName(elementName) {
        return elementName.replaceAll(" ", "-")
    }

    return (
            <div className="navdrop-container">
                <div className="navdrop-title-section">
                    <img onClick={() => setDropState("Hide")} className="navdrop-close-btn" src={require("../../assets/images/drop-menu-icon.png")} alt="close navdrop"/>
                    <p>{dropState}</p>
                </div>
                <div className="navdrop-icon-section">
                    {iconSectionEls}
                </div>
                <div className="navdrop-dot-section">
                    {dotSectionEls}
                </div>
            </div>
    )
}

export default Navdrop