import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className = "nav navbar">
            <Link to={`/`} className = "navbar-text">Home</Link>
            <Link to={`/blogs`} className = "navbar-text">Search for Blogs</Link>
            <Link to={`/contactme`} className = "navbar-text">Got Questions?</Link>
            <Link to={`/about`} className = "navbar-text">About Me</Link>
        </div>
    )
}

export default Header