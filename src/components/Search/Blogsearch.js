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
        <div className="col-lg-12">
            <br/>
            <div className="filterinput">
            <div className="input-group input-group-lg" style={{ width: '75%', marginLeft: '12.5%'}}>
            <span className="input-group-btn">
                <label htmlFor="search" className="btn-lg">Search title and tags for:</label>
                </span>
                <input type="text" className="form-control input-lg" placeholder="Search" id="search" aria-describedby="search" onChange={e => searchByName(e.target.value.toLowerCase())} 
                    onKeyUp={e => searchByName(e.target.value.toLowerCase())} />
             </div>
            </div>
            <hr style={{ width: '75%', marginLeft: '12.5%' }}/>
            <br/>
            {fliterDisplay.map((b,i) => (
                <div key={i} style={{marginBottom:'3ch',marginTop:'1ch'}}>
                    <Link to={`/blogs/${b.id}`}>
                        <div className="card w-75" style={{margin: '0 auto'}}>
                        <div className="card-body">
                            <h5 className="card-title">{b.name}
                                <div className="text-muted" style={{ fontSize:"0.65em" }}>
                                    {b.date}
                                </div>
                            </h5>
                            <p className="card-text">{b.teaser}</p>
                            <footer className="blockquote-footer">Tags: {b.tags}</footer>
                        </div>
                        </div>
                    </Link>
                </div>
            )).reverse()}
            
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