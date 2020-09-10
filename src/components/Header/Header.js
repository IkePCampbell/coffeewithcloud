import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className = "nav">
            <Link to={`/`}>Home</Link>
            <Link to={`/blogs`}>Search for Blogs</Link>
            <Link to={`/contactme`}>Got Questions?</Link>
            <Link to={`/about`}>About Me</Link>
        </div>
    )
}

export default Header