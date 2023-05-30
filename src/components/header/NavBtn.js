import NavBtnCSS from "./NavBtn.module.css"

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
        <button onClick={handleClick} className={NavBtnCSS.container}>
            <span>{title}</span>
            <img className={`${NavBtnCSS.arrow} ${dropState === title ? NavBtnCSS.rotate : ''}`} src={require(`../../assets/images/${dropState === title ? "filled" : "unfilled" }-arrow.png`)} alt="arrow pointing down" />
        </button>
    )
}

export default NavBtn