import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    return (
        <div className="home-wrapper">
            <div className="btn-group">
                <button className="btn btn--primary">
                    <Link to={'/sign-up'}>
                        Sign Up <FontAwesomeIcon icon="user-plus" />
                    </Link>
                </button>
                <button className="btn btn--primary">
                    <Link to={'/login'}>
                        Login <FontAwesomeIcon icon="sign-in-alt" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home
