export default function Posts() {
    // Simulazione di una lista di post
    const posts = [
        {
            id: 1,
            title: "Come iniziare con React",
            description: "Una guida introduttiva per imparare React passo dopo passo.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            id: 2,
            title: "10 consigli per migliorare il tuo JavaScript",
            description: "Scopri come scrivere codice JavaScript più pulito ed efficiente.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "Le migliori librerie CSS per il 2025",
            description: "Una panoramica delle librerie CSS più popolari e utili.",
            image: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="mb-4">I Nostri Post</h1>
                <div className="row">
                    {posts.map((post) => (
                        <div className="col-md-4 mb-4" key={post.id}>
                            <div className="card">
                                <img src={post.image} className="card-img-top" alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <a href={`/posts/${post.id}`} className="btn btn-primary">
                                        Leggi di più
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}