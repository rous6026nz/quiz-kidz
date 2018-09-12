import React from 'react'
import {Link} from 'react-router-dom'

const Colour = (props) => {
    return (
        <div 
            className="colour-swatch" 
            name={props.name}
            id={props.colourId}
            style={{background: props.hex}}
            onClick={e => props.click(e)}>
        </div>
    )
}

export default Colour