import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={"sticky top-0 z-50 d-flex" + css.header}>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/Logo.png" alt="Bootstrap" width="50" height="40"/>
                        <span className={css.azul}>BOOK PLUS</span>
                    </a>

                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="#">Catálago</a>
                                    <a className="nav-link active" aria-current="page" href="#">Lançamento</a>
                                    <a className="nav-link active" aria-current="page" href="#">Mais vendidos</a>
                                    <a className="nav-link active border border-primary border  rounded bg-primary text-white" aria-current="page" href="#">Login Admin</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>

            </nav>
        </header>
    )
}