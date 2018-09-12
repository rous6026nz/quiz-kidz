import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faSignInAlt, faArrowRight, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faUserPlus, faSignInAlt, faArrowRight, faPlusSquare)

import Home from './Home'
import SignUp from './SignUp'
import SignUpColour from './SignUpColour'
import SignUpAnimal from './SignUpAnimal'
import data from '../data'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      colours: [],
      colourChoice: '',
      animals: [],
      animalChoice: '',
      location: '/'
    }
    this.setNameHandler = this.setNameHandler.bind(this)
    this.setColourChoice = this.setColourChoice.bind(this)
    this.setPetChoice = this.setPetChoice.bind(this)
  }

  setNameHandler = e => {
    this.setState({
      name: e.target.value,
      location: '/sign-up-colours'
    })
  }

  setColourChoice = e => {
    this.setState({
      colourChoice: e.currentTarget.id,
      location: '/sign-up-animals'
    })
  }

  setPetChoice = e => {
    this.setState({
      animalChoice: e.currentTarget.id,
      location: '/profile/99901'
    })
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h4 className="logo-text">Quiz Kidz + Maths = Fun</h4>
        </header>
        <div className="content-container">
          <div className="symbol-container">
            <img src="images/minus.svg" />
            <img src="images/plus.svg" />
            <img src="images/divide.svg" />
            <img src="images/multiply.svg" />
          </div>
          <h1 className="main-heading">Having fun with numbers!</h1>
          <Router>
            <div className="wrapper">
              <Route exact path='/' component={Home} />
              <Route path='/sign-up' render={props => <SignUp {...props} click={this.setNameHandler} state={this.state} />} />
              <Route path='/sign-up-colours' render={props => <SignUpColour {...props} click={this.setColourChoice} state={this.state} />} />
              <Route path='/sign-up-animals' render={props => <SignUpAnimal {...props} click={this.setPetChoice} state={this.state} />} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App

