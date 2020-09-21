import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { blogs } from '../../data/blogs'
import { Helmet } from 'react-helmet'

export default function Blogs (props) {
  const [ markdown, setMarkdown ] = useState(null)
  const id  = props.match.params.blogId

  useEffect(() => {
    if (typeof blogs[id] !== 'undefined')
      fetch(blogs[id].source)
        .then(response => response.text())
        .then(text => setMarkdown(text))
  }, [ id ] )

  return (
    <>
      {!blogs[id] ?
        <div className="blogPostNotFound">
          <Helmet>
            <title>Whoops!</title>
          </Helmet> 
          <p>Oh no! Looks like you got lost! There's nothing here :/</p>
        </div> :                            
        <div className="blogPost">
          <Helmet>
            <title>{blogs[id].name}</title>
          </Helmet>
          <h1>{blogs[id].name}</h1>
          <h4>By: {blogs[id].author} &nbsp;&nbsp;&nbsp; {blogs[id].date}</h4>
          <div className = "markdownContent">
            <ReactMarkdown source = {markdown} escapeHtml={false} />
          </div>
          <br></br>
          <div className="blogEnding">
            <p>{blogs[id].ending}</p>
            <p style={{ paddingTop:'1%' }}>Feel free to <a href="https://ikepcampbell.github.io/coffeewithcloud/#/contactme">contact me</a> with any questions or suggestions!</p>
          </div>
          <br></br>
        </div>
      }

    </>
  )
}