export default function Home() {

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
                            <button className="btn btn-primary btn-lg" type="button">
                                Leggi gli Ultimi Post
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <h2 className="mb-4">In Evidenza</h2>
                        <div className="card">
                            <img src="featured-image.jpg" className="card-img-top" alt="Post in evidenza" />
                            <div className="card-body">
                                <h5 className="card-title">Titolo del Post in Evidenza</h5>
                                <p className="card-text">Un breve estratto del post in evidenza...</p>
                                <a href="/posts/featured-post" className="btn btn-primary">Leggi di più</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light py-5">
                    <div className="container">
                        <h2>Chi Siamo</h2>
                        <p>
                            Benvenuti su <strong>My Blog</strong>, uno spazio dedicato alla condivisione di idee, storie e conoscenze.
                            Scopri di più su di noi e unisciti alla nostra community!
                        </p>
                        <a href="/about" className="btn btn-secondary">Scopri di più</a>
                    </div>
                </section>

                <section className="text-center py-5">
                    <div className="container">
                        <h2>Esplora i nostri Post</h2>
                        <p>Scopri articoli interessanti e approfondimenti su vari argomenti.</p>
                        <a href="/posts" className="btn btn-primary btn-lg">Vai ai Post</a>
                    </div>
                </section>
            </main>
        </>
    )
}