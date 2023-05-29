import { navData } from "./navdata"

function Navdrop(props) {
    const currentData = navData.find(item => item.title === props.dropType)
    const iconSectionEls = currentData.iconSection.map(item => (
        <div key={item}>
            <img src="../../"/>
        </div>
    ))
    const dotSectionEls = currentData.dotSection.map(item => <h2 key={item}>{item}</h2>)

    function getImageName(elementName) {
        return elementName.replace(" ", "-")
    }

    return (
        <div className="nav-drop">
            <div className="icon-section drop-section">
                {iconSectionEls}
            </div>
        </div>
    )
}

export default Navdrop