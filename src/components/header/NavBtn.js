import "./NavBtn.css"

function NavBtn(props) {
    const {dropState, setDropState} = props.dropState
    const title = props.title

    function handleClick() {
        if (dropState === title) {
            setDropState("Hide")
        }
        else { setDropState(title) }
    }

    return (
        <button onClick={handleClick} className="nav-btn">
            <span className={`nav-btn-title ${dropState === title ? `nav-btn-title-opened` : ""}`}>{title}</span>
            <img className={`nav-btn-arrow ${dropState === title ? "nav-btn-arrow-rotate" : ""}`} src={require(`../../assets/images/${dropState === title ? "filled" : "unfilled" }-arrow.png`)} alt="arrow pointing down" />
        </button>
    )
}

export default NavBtn