import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Banner/Banner.jsx";
import LivroOrdem from "../components/LivroOrdem/LivroOrdem.jsx";
import Footer from "../components/Footer/Footer.jsx";
import css from "../components/Destaque/Destaque.module.css";

export default function Home() {

    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <Hero />

            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end my-5 gap-4">

                    <h2 className={`${css.tituloPrincipal} display-6 m-0`}>
                        Nosso Catálogo
                    </h2>

                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Pesquisar por título, autor ou gênero"
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

                </div>

                <LivroOrdem busca={busca} filtro={filtro} />

            </main>

            <Footer />
        </>
    );
}