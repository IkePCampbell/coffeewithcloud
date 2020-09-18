import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {blogs} from '../../data/blogs'
import {Helmet} from 'react-helmet'

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
        <div>
            <div className="filterinput">
            Search title and tags for: <input onChange={e => searchByName(e.target.value.toLowerCase())} 
                    onKeyUp={e => searchByName(e.target.value.toLowerCase())} />
            </div>
            {fliterDisplay.map((b,i) => (
                <div key={b.i} style={{marginBottom:'3ch',marginTop:'1ch'}}>
                    <Link to={`/blogs/${b.id}`}>
                <div class="card w-75" style={{margin: '0 auto'}}>
                <div class="card-body">
                    <h5 class="card-title">{b.name}
                        <div class="text-muted" style={{ fontSize:"0.65em" }}>
                            {b.date}
                        </div>
                    </h5>
                    <p class="card-text">{b.teaser}</p>
                    <footer class="blockquote-footer">Tags: {b.tags}</footer>
                </div>
                </div>
                </Link>
                </div>
            ))}
            
        </div>
    )
}

export default function BlogSearch() {
    return (
        <>
        <Helmet>
            <title>Search For Blogs</title>
        </Helmet> 
        <main>
            <SearchBlogs blogs={blogs} />
        </main>
        </>
    )
}