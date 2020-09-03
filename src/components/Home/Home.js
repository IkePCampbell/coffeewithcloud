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
            <header>
                hi welcome to my blog
            </header>
            <main>
                <Blogs blogs={blogs} />
            </main>
        </>
    )
}