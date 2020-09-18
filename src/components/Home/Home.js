import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'
import Header from "../Header/Header"
import profilepic from '../../img/profilepic.png'
import {Helmet} from 'react-helmet'

const Blogs = ({blogs}) => {
    return blogs.slice(0,4).reverse().map((b, index) => {
        return (
            <div key={b.id} className="blogDemo" style={{marginBottom:'3ch',marginTop:'1ch'}}>
                    <Link to={`/blogs/${b.id}`}>
                    <h3 style={{paddingBottom:'0px'}}>{b.name}</h3>
                    <h5>{b.date}</h5>
                    <p>{b.teaser}</p>
                    <p style={{fontSize:'14px'}}>Tags: {b.tags}</p>
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
            <Header />
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
        </>
    )
}