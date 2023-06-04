import { navData } from "./navdata"
import NavdropCard from "./NavdropCard"
import "./Navdrop.css"

function Navdrop(props) {
    const {dropState, setDropState} = props.dropState
    const currentData = navData.find(item => item.title === dropState)
    
    const cardSectionEls = currentData.iconSection.map(title => (
        <NavdropCard key={title} title={title}/>
    ))
    const dotSectionEls = currentData.dotSection.map(item => (
        <div key={item} className="navdrop-dot-el">
            <span className="navdrop-dot-dot"></span>
            <span className="navdrop-dot-title">{item}</span>
        </div>
    ))

    return (
            <div className="navdrop-container">
                <div className="navdrop-title-section">
                    <img onClick={() => setDropState("Hide")} className="navdrop-close-btn" src={require("../../assets/images/drop-menu-icon.png")} alt="close navdrop"/>
                    <p>{dropState}</p>
                </div>
                <div className="navdrop-card-section">
                    {cardSectionEls}
                </div>
                <div className="navdrop-dot-section">
                    {dotSectionEls}
                </div>
            </div>
    )
}

export default Navdrop