import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Posts() {

    const [posts, setPosts] = useState([])

    const base_api_url = 'http://localhost:3006'
    const posts_endpoint = '/api/v1/posts'
    const img_endpoint = '/img/posts/'

    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            })
    }

    useEffect(() => {
        fetchData(base_api_url + posts_endpoint)
    }, [])

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="mb-4">I Nostri Post</h1>
                <div className="row">
                    {posts.map((post) => (
                        <div className="col-md-4 mb-4" key={post.slug}>
                            <div className="card">
                                <img src={base_api_url + img_endpoint + post.image} className="card-img-top" alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <NavLink to={`/posts/${post.slug}`} className="btn btn-primary">
                                        Leggi di più
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}