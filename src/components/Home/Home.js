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
                <div className="card col-md-12 col-lg-6" style={{margin: '0 auto'}}>
                <div className="card-body">
                    <h5 className="card-title">{b.name}
                        <div className="text-muted" style={{ fontSize:"0.65em" }}>
                            {b.date}
                        </div>
                    </h5>
                    <p className="card-text">{b.teaser}</p>
                    <footer className="blockquote-footer">Tags: {b.tags}</footer>
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
                <a href="https://github.com/IkePCampbell"><img src={profilepic} className="profile" alt="profile"  /></a>
            </div>
            <br/>
            <hr style={{ width: '75%', marginLeft: '12.5%' }}/>
            <p className='col-md-12 col-lg-6' style={{margin: '0 auto'}}>Recent Posts: </p>
            </div>
            <main>
                <Blogs blogs={blogs} />
            </main>
            </div>
        </>
    )
}