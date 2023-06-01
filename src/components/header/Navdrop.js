import { navData } from "./navdata"
import "./Navdrop.css"

function Navdrop(props) {
    const currentData = navData.find(item => item.title === props.dropType)

    const iconSectionEls = currentData.iconSection.map(item => (
        <div className="navdrop-icon-el" key={item}>
            <img className="navdrop-icon-image" src={require(`../../assets/images/${getImageName(item)}.png`)} alt={item} />
            <span className="navdrop-icon-title">{item}</span>
        </div>
    ))
    
    const dotSectionEls = currentData.dotSection.map(item => (
        <div className="navdrop-dot-el">
            <span className="navdrop-dot-dot"></span>
            <span className="navdrop-dot-title">{item}</span>
        </div>
    ))

    function getImageName(elementName) {
        return elementName.replaceAll(" ", "-")
    }

    return (
            <div className="navdrop-container">
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