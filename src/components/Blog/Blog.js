import React, { useState, useEffect } from 'react'
import ReactMarkdown, { types } from "react-markdown";
import {blogs} from '../../data/blogs'
import Header from '../Header/Header'

export default function Blogs (props) {
    const [markdown, setMarkdown] = useState(null)
    const id  = props.match.params.blogId

    useEffect(() => {
        if(typeof blogs[id] !== "undefined")
            fetch(blogs[id].source)
            .then(response => response.text())
                .then(text => setMarkdown(text))
    }, [id] )

    return (
        <>
            <Header />
            {!blogs[id] ?
                <div className="blogPostNotFound">
                    <p>yikes no blog here :/ </p>
                </div> :                            
                    <div className="blogPost">
                        <h1>{blogs[id].name}</h1>
                        <h4>By: {blogs[id].author} &nbsp;&nbsp;&nbsp; {blogs[id].date}</h4>
                        <div className = "markdownContent">
                            <ReactMarkdown source = {markdown} escapeHtml={false} />
                        </div>
                </div>
            }
        </>
    )
}