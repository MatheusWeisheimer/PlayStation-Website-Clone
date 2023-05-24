import { navData } from "./navdata"

function Navdrop(props) {
    const currentData = navData.find(item => item.title === props.dropType)
    const dropElements = currentData.iconSection.map(item => <h2 key={item}>{item}</h2>)

    return (
        dropElements
    )
}

export default Navdrop