import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = (props) => {
    const input = document.getElementById('name')

    return (
        <div className="form-wrap">
            <h1>Create Account</h1>
            <input type="text" placeholder="Type Your Name Here..." name="name" id="name" onChange={e => props.click(e)}/><br/>
            <button className="btn btn--primary">
                <Link to={{
                    pathname: input ? '/sign-up-colours' : props.location.pathname
                }}>
                    Next <FontAwesomeIcon icon="arrow-right" />
                </Link>
            </button>
        </div>
    )
}

export default SignUp