import { navData } from "./navdata"
import NavdropCSS from "./Navdrop.css"

function Navdrop(props) {
    const currentData = navData.find(item => item.title === props.dropType)

    const iconSectionEls = currentData.iconSection.map(item => (
        <div className="navdrop-icon-el" key={item}>
            <img className="navdrop-icon-image" src={require(`../../assets/images/${getImageName(item)}.png`)} />
            <span className="navdrop-icon-title">{item}</span>
        </div>
    ))
    
    const dotSectionEls = currentData.dotSection.map(item => (
        <div className="navdrop-dot-el">
            <div className="navdrop-dot-dot"></div>
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