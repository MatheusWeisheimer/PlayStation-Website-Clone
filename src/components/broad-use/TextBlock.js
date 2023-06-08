import PropTypes from "prop-types"

function TextBlock(props) {
    const {title, paragraph} = props.content

    return (
        <div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

TextBlock.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        paragraph: PropTypes.string.isRequired
    })
}

export default TextBlock