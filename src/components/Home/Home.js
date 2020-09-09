import React from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'
import Header from "../Header/Header"
import profilepic from '../../img/profilepic.png'

const Blogs = ({blogs}) => {
    return blogs.reverse().map((b, index) => {
        return (
            <div key={b.name} className="blogDemo" style={{marginBottom:'3ch',marginTop:'1ch'}}>
                    <Link to={`/blogs/${index}`}>
                    <h3 style={{paddingBottom:'0px'}}>{b.name}</h3>
                    <h5>{b.date}</h5>
                    <p>{b.teaser}</p>
                    </Link>
                </div>)
    })
} 

export default function Home () {

    return (
        <>
            <Header />
            <header className="homeheader">
                CoffeeCloud
            </header>
            <header className="homeheadersub">Exploring newest technologies, one cup at a time</header>
            <table className="aboutMe" align="center">
                <tbody>
                    <tr>
                        <td align = "left" valign = "top"><img src={profilepic} className="profile" alt="profile" /></td>
                        <td align = "left" valign = "top"><p><br></br>Welcome to the blog! Grab a seat, your coffee is almost ready!<br></br>While you wait, check out <a href="http://www.github.com/ikepcampbell">my GitHub</a> for all content in this blog.</p></td>
                    </tr>
                </tbody>
            </table>
            

            <main>
                <Blogs blogs={blogs} />
            </main>
        </>
    )
}