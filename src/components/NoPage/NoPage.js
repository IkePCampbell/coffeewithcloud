import React from 'react'
import { Helmet } from 'react-helmet'


export default function NoMatch() {
  return (
    <>
      <Helmet>
        <title>Whoops!</title>
      </Helmet> 
      <div className = "blogPostNotFound">
        <p>Oh no! Looks like you got lost! There's nothing here :/</p>
      </div>
    </>
  )
}
