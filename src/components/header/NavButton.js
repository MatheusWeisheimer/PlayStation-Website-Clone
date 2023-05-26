function NavButton(props) {
    function dropDrop() {
        const {navDrop, setNavDrop} = props.dropState
        if (navDrop === props.title) {
            setNavDrop("Hide")
        }
        else {setNavDrop(props.title)}
    }

    return (
        <div onClick={dropDrop}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default NavButton