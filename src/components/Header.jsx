import { NavLink } from "react-router-dom"

export default function Header() {
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
                                    <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to={'/Chisiamo'} className={'nav-link'}>Chi siamo</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to={'/Posts'} className={'nav-link'}>Posts</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to={'/Contacts'} className={'nav-link'}>Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}