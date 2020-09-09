import React, { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import {blogs} from '../../data/blogs'

export default function Blogs (props) {
    const [markdown, setMarkdown] = useState(null)
    const id  = props.match.params.blogId
    const [ notFound, setNotFound ] = useState(false)

    useEffect(() => {
        if(typeof blogs[id] === 'undefined') {
            setNotFound(true)
        }
        fetch(blogs[id].source)
        .then(response => response.text())
            .then(text => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        setMarkdown(text)
        }
        )
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
                    <div className = "markdownContent">
                        <ReactMarkdown source = {markdown} escapeHtml={false} />
                    </div>
            </div>
            }
        </>
    )
}