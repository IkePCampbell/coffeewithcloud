import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'
import profilepic from '../../img/profilepic.png'
import {Helmet} from 'react-helmet'

const Blogs = ({blogs}) => {
    return blogs.slice(0,4).reverse().map((b, index) => {
        return (
            <div key={b.id} style={{marginBottom:'3ch',marginTop:'1ch'}}>
                <Link to={`/blogs/${b.id}`}>
                <div class="card w-75" style={{margin: '0 auto'}}>
                <div class="card-body">
                    <h5 class="card-title">{b.name}
                        <div class="text-muted" style={{ fontSize:"0.65em" }}>
                            {b.date}
                        </div>
                    </h5>
                    <p class="card-text">{b.teaser}</p>
                    <footer class="blockquote-footer">Tags: {b.tags}</footer>
                </div>
                </div>
                </Link>
                </div>)
    })
} 

export default function Home () {

    return (
        <>
            <Helmet>
                <title>coffeewithcloud☕</title>
            </Helmet> 
            <div className="col-lg-12">
            <header className="homeheader">
                CoffeeWithCloud
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
            <p style={{width:'40%',left:"30%",margin:"0 auto"}}>Recent Posts: </p>

            <main>
                <Blogs blogs={blogs} />
            </main>
            </div>
        </>
    )
}