import React from "react"
import {Link} from "react-router-dom"
import style from "../../styles/index.css"
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