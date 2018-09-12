import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import animalData from '../data'
import Animal from './Animal'

class SignUpAnimal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: []
        }
    }
    
    componentDidMount() {
        this.handleData()
    }

    handleData() {
        animalData.getAnimals()
            .then(res => {
                this.setState({
                    animals: res.body
                })
            })
    }

    render() {
        let animalTiles = (
            this.state.animals.map((animal, index) => {
                return <Animal 
                        click={e => this.props.click(e)}
                        animalId={animal.id}
                        key={animal.id} 
                        name={animal.name} 
                        img={animal.img_filename} />
            })
        )
        return (
            <div>
                <div className="form-wrap">
                    <h1>Next, choose your Math buddy</h1>
                    <div className="list-wrapper">
                        <ul className="list">
                            { animalTiles }
                        </ul>
                    </div>
                </div>
                <div className="section">
                    <button className="btn btn--primary">
                        <Link to={{
                            pathname: this.props.state.location
                        }}>
                            Next <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default SignUpAnimal