import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardLivro from "../CardLivro/CardLivro.jsx";

export default function LivroOrdem({ busca = "", filtro, admin = false }) {

    const [livros, setLivros] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://apps-api-livros.ucxocw.easypanel.host/livro")
            .then((res) => res.json())
            .then((data) => {
                console.log("API:", data);

                if (Array.isArray(data)) {
                    setLivros(data);
                } else if (Array.isArray(data.livros)) {
                    setLivros(data.livros);
                } else {
                    console.error("Formato inesperado:", data);
                    setLivros([]);
                }
            })
            .catch((error) => {
                console.error("Erro:", error);
                setLivros([]);
            });
    }, []);

    const livrosFiltrados = Array.isArray(livros)
        ? livros.filter((livro) => {
            const termo = busca.toLowerCase();

            return (
                livro.titulo?.toLowerCase().includes(termo) ||
                livro.autor?.toLowerCase().includes(termo) ||
                livro.categoria?.toLowerCase().includes(termo)
            );
        })
        : [];

    const livrosOrdenados = [...livrosFiltrados].sort((a, b) => {
        if (filtro === "az") return a.titulo.localeCompare(b.titulo);
        if (filtro === "za") return b.titulo.localeCompare(a.titulo);
        if (filtro === "idade") return a.faixa_etaria.localeCompare(b.faixa_etaria);
        return 0;
    });

    function handleEditar(id) {
        navigate(`/editar-livro/${id}`);
    }

    async function handleExcluir(id) {
        const confirmacao = window.confirm("Tem certeza que deseja excluir?");
        if (!confirmacao) return;

        try {
            const response = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });

            if (response.ok) {
                alert("Livro excluído com sucesso!");
                setLivros((prev) => prev.filter((livro) => livro.id !== id));
            } else {
                alert("Erro ao excluir livro");
            }

        } catch (error) {
            console.error(error);
            alert("Erro na conexão");
        }
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 gy-5">

                {livrosOrdenados.map((livro) => (
                    <div className="col" key={livro.id}>

                        <CardLivro
                            id={livro.id}
                            imagem={livro.imagem}
                            categoria={livro.categoria}
                            titulo={livro.titulo}
                            autor={livro.autor}
                            faixa_etaria={livro.faixa_etaria}
                            admin={admin}
                            onEditar={handleEditar}
                            onExcluir={handleExcluir}
                        />

                    </div>
                ))}

            </div>
        </div>
    );
}