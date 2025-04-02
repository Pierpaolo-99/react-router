import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    const base_api_url = "http://localhost:3006";
    const posts_endpoint = "/api/v1/posts";
    const img_endpoint = "/img/posts/";

    useEffect(() => {
        fetch(base_api_url + posts_endpoint)
            .then((res) => res.json())
            .then((data) => {
                const featured = data.filter((post) => post.featured === true); // Filtra tutti i post in evidenza
                setFeaturedPosts(featured);
            });
    }, []);

    return (
        <>
            <main>
                <section>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Benvenuto sul Mio Blog</h1>
                            <p className="col-md-8 fs-4">
                                Scopri articoli, storie e approfondimenti su una varietà di argomenti.
                                Rimani aggiornato con gli ultimi post e partecipa alla conversazione.
                            </p>
                            <a href="/Posts" className="btn btn-primary btn-lg" type="button">
                                Leggi gli Ultimi Post
                            </a>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {featuredPosts.length > 0 && (
                        <section className="py-5">
                            <div className="container">
                                <h2 className="mb-4">In Evidenza</h2>
                                <div className="row">
                                    {featuredPosts.map((post) => (
                                        <div className="col-md-6 mb-4" key={post.slug}>
                                            <div className="card" style={{ maxWidth: "100%" }}>
                                                <img
                                                    src={base_api_url + img_endpoint + post.image}
                                                    className="card-img-top"
                                                    alt={post.title}
                                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                                />
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
                    )}

                    <section className="bg-light py-5">
                        <div className="container">
                            <h2>Chi Siamo</h2>
                            <p>
                                Benvenuti su <strong>My Blog</strong>, uno spazio dedicato alla condivisione di idee, storie e conoscenze.
                                Scopri di più su di noi e unisciti alla nostra community!
                            </p>
                            <a href="/Chisiamo" className="btn btn-secondary">Scopri di più</a>
                        </div>
                    </section>

                    <section className="text-center py-5">
                        <div className="container">
                            <h2>Esplora i nostri Post</h2>
                            <p>Scopri articoli interessanti e approfondimenti su vari argomenti.</p>
                            <a href="/posts" className="btn btn-primary btn-lg">Vai ai Post</a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}