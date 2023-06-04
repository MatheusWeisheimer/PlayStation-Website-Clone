import "./NavdropCard.css"

function NavdropCard({title}) {
    const backgroundImageName = title.replaceAll(" ", "-")
    const backgroundImagePath = require(`../../assets/images/${backgroundImageName}.png`)

    return (
        <div style={{backgroundImage: `url(${backgroundImagePath})`}} className="navdrop-card">
            <p className="navdrop-card-title">{title}</p>
        </div>
    )
}

export default NavdropCard