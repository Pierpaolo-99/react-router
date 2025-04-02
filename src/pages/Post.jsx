import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {

    const [post, setPost] = useState(null)
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate()

    const { slug } = useParams()
    console.log(slug);

    useEffect(() => {
        fetch(`http://localhost:3006/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            });

        fetch(`http://localhost:3006/api/v1/posts`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, [slug])

    const handleNextPost = () => {
        const currentIndex = posts.findIndex(p => p.slug === slug);
        if (currentIndex !== -1 && currentIndex < posts.length - 1) {

            const nextSlug = posts[currentIndex + 1].slug;
            navigate(`/posts/${nextSlug}`);
        }
    };

    const handlePreviousPost = () => {

        const currentIndex = posts.findIndex(p => p.slug === slug);
        if (currentIndex > 0) {

            const previousSlug = posts[currentIndex - 1].slug;
            navigate(`/posts/${previousSlug}`);
        }
    };

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div
                className="banner"
                style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url('http://localhost:3006/img/posts/${post.image}')`,
                }}
            ></div>

            <div className="card d-flex flex-row" style={{ maxWidth: "100%", padding: "2rem", margin: "3rem" }}>
                <img
                    src={'http://localhost:3006/img/posts/' + post.image}
                    className="card-img-left"
                    alt={post.title}
                    style={{ width: "50%", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <p className="card-text">
                        <small className="text-muted">Descrizione: {post.content}</small>
                    </p>
                    <button className="btn btn-primary me-2" onClick={handlePreviousPost}>
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <button className="btn btn-primary" onClick={handleNextPost}>
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}