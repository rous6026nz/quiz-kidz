import React from 'react'

const Animal = (props) => {
    return (
        <div>
            <div 
                className="animal-tile"
                id={props.animalId}
                name={props.name}
                onClick={e => props.click(e)}
                style={{
                    background: `url(http://localhost:3000/images/animals/${props.img}) center`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                    }}>
            </div>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Animal