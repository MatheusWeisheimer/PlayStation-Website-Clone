import PropTypes from "prop-types"

function StyledButton(props) {
    const {backgroundCol, textCol} = props.style
    const style = {
        backgroundColor: backgroundCol,
        color: textCol
    }

    return (
        <button style={style}>
            {props.name}
        </button>
    )
}

StyledButton.propTypes = {
    style: PropTypes.shape({
        backgroundCol: PropTypes.string.isRequired,
        textCol: PropTypes.oneOf(["#fff", "#1f1f1f"])
    }),
    name: PropTypes.string.isRequired,
}

export default StyledButton