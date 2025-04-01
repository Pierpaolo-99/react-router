export default function App() {

  return (
    <>
      <header>
        <nav
          class="navbar navbar-expand-sm navbar-light bg-light"
        >
          <div class="container">
            <a class="navbar-brand" href="#">My Blog</a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="#" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Chi siamo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Posts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>

        <section>
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Welcome to My Blog</h1>
              <p class="col-md-8 fs-4">
                Discover articles, stories, and insights on a variety of topics.
                Stay updated with the latest posts and join the conversation.
              </p>
              <button class="btn btn-primary btn-lg" type="button">
                Read Latest Posts
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

      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} My Blog. Tutti i diritti riservati.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="/terms" className="text-light text-decoration-none">Termini e Condizioni</a>
            </li>
            <li className="list-inline-item">
              <a href="/contacts" className="text-light text-decoration-none">Contattaci</a>
            </li>
          </ul>
          <div className="mt-3">
            <a href="https://facebook.com" className="text-light me-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-light">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>

    </>
  )
}
