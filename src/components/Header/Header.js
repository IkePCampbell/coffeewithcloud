import React from "react"
import {Link} from "react-router-dom"
import cloud from '../../img/coffeecloud.png'

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <Link to={`/`} className="nav-brand"><img src={cloud} alt="coffeecloud"/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <Link to={`/`} className = "nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/blogs`} className = "nav-link">Search for Blogs</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/contactme`} className = "nav-link">Got Questions?</Link>
                </li>
                <li class="nav-item">
                    <Link to={`/about`} className = "nav-link">About Me</Link>
                </li>
            </ul>
            </div>
        </nav>
    </>
    )
}

export default Header