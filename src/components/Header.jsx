import { NavLink } from "react-router-dom"

export default function Header() {

    const menu = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/Chisiamo',
            text: 'Chi siamo'
        },
        {
            id: 3,
            path: '/Posts',
            text: 'Posts'
        },
        {
            id: 4,
            path: '/Contacts',
            text: 'Contacts'
        },
    ]

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
                                {menu.map(item => (
                                    <li class="nav-item" key={item.id}>
                                        <NavLink to={item.path} className={'nav-link'}>{item.text}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}