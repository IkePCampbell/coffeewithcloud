import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import {blogs} from '../../data/blogs'

const SearchBlogs = props => {
    const [search, setSearch] = useState("");
    const [fliterDisplay, setFilterDisplay] = useState(props.blogs);

    const searchByName = e => {
        let oldBlogs = props.blogs.map(b => {
            return {id: b.id,tags:b.tags,name:b.name,date:b.date,author:b.author,teaser:b.teaser,source:b.source};
        });

        if (e !== ""){
            let fliteredBlogs = [];
            setSearch(e);
            fliteredBlogs = oldBlogs.filter(blog => blog.name.toLowerCase().includes(search) || blog.tags.toLowerCase().includes(search)
                );
            setFilterDisplay(fliteredBlogs);
        } else {
            setFilterDisplay(props.blogs)
        }
    };
    return (
        <div className="d-flex flex-column">
            <div className="filterinput">
            Search title and tags for: <input onChange={e => searchByName(e.target.value.toLowerCase())} 
                    onKeyUp={e => searchByName(e.target.value.toLowerCase())} />
            </div>
            {fliterDisplay.map((b,i) => (
                <div key={b.id} className="blogDemo card" style={{marginBottom:'3ch',marginTop:'1ch'}}>
                <Link className="card-body" style={{textDecoration:'none'}} to={`/blogs/${b.id}`}>
                <h3 className="card-title" style={{paddingBottom:'0px'}}>{b.name}</h3>
                <h5 className="card-subtitle" >{b.date}</h5>
                <p className="card-text" >{b.teaser}</p>
                <p className="card-text" style={{fontSize:'14px'}}>Tags: {b.tags}</p>
                </Link>
            </div>
            ))}
            
        </div>
    )
}

export default function BlogSearch() {
    return (
        <>
        <Header />
        <main>
            <SearchBlogs blogs={blogs} />
        </main>
        </>
    )
}