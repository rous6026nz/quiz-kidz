import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import colourData from '../data'
import Colour from './Colour'

class SignUpColour extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colours: []
        }
    }

    componentDidMount() {
        this.handleData()
    }

    handleData() {
        colourData.getColours()
            .then(res => {
                this.setState({
                    colours: res.body
                })
            })
    }

    render() {
        let colourSwatch = (
            this.state.colours.map((colour, index) => {
                return <Colour 
                        click={e => this.props.click(e)}
                        colourId={colour.id}
                        key={colour.id}
                        name={colour.name} 
                        hex={colour.hex_code}
                        />
            })
        )
        return (
            <div>
                <div className="form-wrap">
                    <h1>Hi, pick a colour</h1>
                    <div className="list-wrapper">
                        <ul className="list">
                        { colourSwatch }
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <button className="btn btn--primary">
                        <Link to={{
                            pathname: this.props.state.location,
                        }}>
                            Next <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default SignUpColour