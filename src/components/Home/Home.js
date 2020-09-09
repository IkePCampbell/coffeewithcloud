import React from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'
import Header from "./header"

const Blogs = ({blogs}) => {
    return blogs.reverse().map((b, index) => {
        return (
        <div>
            <div className="blogDemo"style={{marginBottom:'3ch',marginTop:'1ch'}}>
                    <Link to={`/blogs/${index}`}>
                    <h3 style={{paddingBottom:'0px'}}>{b.name}</h3>
                    <h5>{b.date}</h5>
                    <p>{b.teaser}</p>
                    </Link>
                </div>
        </div>)
    })
}

export default function Home () {

    return (
        <>
            <Header />
            <header class="homeheader">
                CoffeeCloud
            </header>
            <header class="homeheadersub">Exploring newest technologies, one cup at a time</header>
            <table class="aboutMe" align="center">
                <tr>
                    <td align = "left" valign = "top"><img src={require('./profilepic.png')} class="profile"/></td>
                    <td align = "left" valign = "top"><p><br></br>Welcome to the blog! Grab a seat, your coffee is almost ready!<br></br>While you wait, check out <a href="http://www.github.com/ikepcampbell">my GitHub</a> for all content in this blog.</p></td>
                </tr>
            </table>
            

            <main>
                <Blogs blogs={blogs} />
            </main>
        </>
    )
}