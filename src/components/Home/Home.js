import React from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'


const Blogs = ({blogs}) => {
    return blogs.reverse().map((b, index) => {
        return (
        <Link to={`/blogs/${index}`}>
            <div className="blogDemo">
                <h3>{b.name}</h3>
                <h4>{b.date}</h4>
                <p>{b.teaser}</p>
            </div>
        </Link>)
    })
}

export default function Home () {

    return (
        <>
            <header class="homeheader">
                CoffeeCloud
            </header>
            <header class="homeheadersub">Exploring newest technologies, one cup at a time</header>
            <table class = "aboutMe" align="center">
                <tr>
                    <td align = "left" valign = "top"><img src={require('./profilepic.png')} class="profile"/></td>
                    <td align = "left" valign = "top"><p><br></br>Welcome to the blog! Grab a seat your coffee is almost ready!<br></br>While you wait, check out <a href="http://www.github.com/ikepcampbell">my GitHub</a> for all content in this blog.</p></td>
                </tr>
                
                
            </table>
            

            <main>
                <Blogs blogs={blogs} />
            </main>
        </>
    )
}