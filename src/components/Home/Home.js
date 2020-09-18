import React from 'react'
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
                {/* eslint-disable-next-line */}
                <title>coffeewithcloud☕</title>
            </Helmet> 
            <div className="col-lg-12">
            <div className="home">
            <br/>
            <header className="homeheader">
                <h1>CoffeeWithCloud</h1>
            </header>
            <header className="homeheadersub">
                <h2>Exploring newest technologies, one cup at a time</h2>
            </header>
            <div align="center">
                
                <p><br></br>Welcome to the blog! Grab a seat, your coffee is almost ready!<br></br>While you wait, check out <a href="http://www.github.com/ikepcampbell">my GitHub</a> for all content in this blog.</p>
                <img src={profilepic} className="profile" alt="profile" />
            </div>
            <br/>
            <p style={{marginLeft: '12.5%'}}>Recent Posts: </p>
            </div>
            <main>
                <Blogs blogs={blogs} />
            </main>
            </div>
        </>
    )
}