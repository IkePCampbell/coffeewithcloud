import React from "react"
import {Link} from "react-router-dom"
import cloud from '../../img/coffeecloud.png'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to={`/`} className="nav-brand"><img src={cloud} alt="coffeecloud"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to={`/`} className = "nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/blogs`} className = "nav-link">Search for Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/contactme`} className = "nav-link">Got Questions?</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/about`} className = "nav-link">About Me</Link>
                </li>
            </ul>
            </div>
        </nav>
    </>
    )
}

export default Header