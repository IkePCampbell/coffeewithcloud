import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className = "nav">
            <Link to={`/`}>Home</Link>
            <Link to={`/`}>Search for Blogs</Link>
            <Link to={`/`}>Got Questions?</Link>
            <Link to={`/`}>About Me</Link>
            
        </div>
    )
}

export default Header