import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import LivroOrdem from "../components/LivroOrdem/LivroOrdem.jsx";
import css from "../components/Destaque/Destaque.module.css";

export default function Dashboard() {

    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleNovoLivro() {
        navigate("/novolivro");
    }

    return (
        <>
            <Header />

            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center my-5 gap-4">

                    <h2 className={`${css.tituloPrincipal} display-6 m-0`}>
                        Dashboard de Livros
                    </h2>

                    <div className="d-flex gap-3">

                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Pesquisar..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Pesquisar
                            </button>
                        </form>

                        <select className={css.ordernar} onChange={(e) => setFiltro(e.target.value)}>
                            <option value="">Ordenar</option>
                            <option value="idade">Faixa etária</option>
                            <option value="az">A → Z</option>
                            <option value="za">Z → A</option>
                        </select>

                        <button className="btn btn-primary" onClick={handleNovoLivro}>
                            <Link to="/novolivro" style={{color: 'white', textDecoration: 'none'}}>+ Novo Livro</Link>
                        </button>

                    </div>

                </div>


                <LivroOrdem busca={busca} filtro={filtro} admin={true} />

            </main>

            <Footer />
        </>
    );
}