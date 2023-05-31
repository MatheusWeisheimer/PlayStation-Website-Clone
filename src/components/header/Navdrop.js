import { navData } from "./navdata"
import NavdropCSS from "./Navdrop.module.css"

function Navdrop(props) {
    const currentData = navData.find(item => item.title === props.dropType)

    const iconSectionEls = currentData.iconSection.map(item => (
        <div className={NavdropCSS.iconElement} key={item}>
            <img className={NavdropCSS.iconImage} src={require(`../../assets/images/${getImageName(item)}.png`)} />
            <span className={NavdropCSS.iconTitle}>{item}</span>
        </div>
    ))
    
    const dotSectionEls = currentData.dotSection.map(item => (
        <div className={NavdropCSS.dotEl}>
            <div className={NavdropCSS.dot}></div>
            <span className={NavdropCSS.dotTitle}>{item}</span>
        </div>
    ))

    function getImageName(elementName) {
        return elementName.replaceAll(" ", "-")
    }

    return (
            <div className={NavdropCSS.navdrop}>
                <div className={NavdropCSS.iconSection}>
                    {iconSectionEls}
                </div>
                <div className={NavdropCSS.dotSection}>
                    {dotSectionEls}
                </div>
            </div>
    )
}

export default Navdrop