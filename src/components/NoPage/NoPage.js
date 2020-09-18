import React from 'react'
import Header from '../Header/Header'


export default function NoMatch() {
    return(
        <>
        <Helmet>
            <title>Whoops!</title>
        </Helmet> 
        <Header />
        <div className = "blogPostNotFound">
            <p>Oh no! Looks like you got lost! There's nothing here :/</p>
        </div>
        </>
    )
}
