import React, { useState, useEffect } from 'react'

import {blogs} from '../../data/blogs'

export default function Blogs (props) {
    const id  = props.match.params.blogId
    const [ notFound, setNotFound ] = useState(false)

    useEffect(() => {
        if(typeof blogs[id] === 'undefined') {
            setNotFound(true)
        }
    }, [id] )

    return (
        <>
            {notFound ?
            <div className="blogPostNotFound">
                <p>yikes no blog here :/</p>
            </div> :
                <div className="blogPost">
                    <h1>{blogs[id].name}</h1>
                    <h4>By: {blogs[id].author} &nbsp;&nbsp;&nbsp; {blogs[id].date}</h4>

                    <p>{blogs[id].text}</p>
            </div>
            }
        </>
    )
}