import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function NovoLivro() {

    const [titulo, setTitulo] = useState("");
    const [imagem, setImagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autor, setAutor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [categoria, setCategoria] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    titulo,
                    imagem,
                    descricao,
                    autor,
                    faixa_etaria: faixaEtaria,
                    categoria
                })
            });

            const data = await response.json();
            console.log("RESPOSTA API:", data);

            if (response.ok) {
                alert("Livro adicionado com sucesso!");
                navigate("/dashboard");
            } else {
                alert(data.message || "Erro ao adicionar livro");
            }

        } catch (error) {
            console.error(error);
            alert("Erro na conexão com o servidor");
        }
    }

    return (
        <>
            <Header />

            <div className="container mt-5 mb-5" style={{ maxWidth: "700px" }}>
                <div className="card shadow">
                    <div className="card-body p-4">

                        <h3 className="mb-4 text-center">Adicionar Novo Livro</h3>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label">Título</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Imagem (URL)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={imagem}
                                    onChange={(e) => setImagem(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descrição</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Autor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Faixa Etária</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={faixaEtaria}
                                    onChange={(e) => setFaixaEtaria(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Gênero Literário</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Voltar
                                </button>

                                <button type="submit" className="btn btn-success">
                                    <Link to="/dashbord" style={{color: 'white', textDecoration: 'none'}}>Salvar Livro</Link>
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}