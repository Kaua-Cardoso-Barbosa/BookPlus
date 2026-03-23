import { useEffect, useState } from "react";
import CardLivro from "../CardLivro/CardLivro.jsx";

export default function LivroOrdem({ busca, filtro }) {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetch("https://apps-api-livros.ucxocw.easypanel.host/livro")
            .then((res) => res.json())
            .then((data) => {
                setLivros(data.livros);
            })
            .catch((error) => console.error("Erro:", error));
    }, []);

    // 🔍 FILTRO DE BUSCA (titulo, autor, categoria)
    const livrosFiltrados = livros.filter((livro) => {
        const termo = busca.toLowerCase();

        return (
            livro.titulo.toLowerCase().includes(termo) ||
            livro.autor.toLowerCase().includes(termo) ||
            livro.categoria.toLowerCase().includes(termo)
        );
    });

    // 🔽 ORDENAÇÃO
    const livrosOrdenados = [...livrosFiltrados].sort((a, b) => {

        if (filtro === "az") {
            return a.titulo.localeCompare(b.titulo);
        }

        if (filtro === "za") {
            return b.titulo.localeCompare(a.titulo);
        }

        if (filtro === "idade") {
            return a.faixa_etaria.localeCompare(b.faixa_etaria);
        }

        return 0;
    });

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 gy-5">

                {livrosOrdenados.map((livro) => (
                    <div className="col" key={livro.id}>
                        <CardLivro
                            imagem={livro.imagem}
                            categoria={livro.categoria}
                            titulo={livro.titulo}
                            autor={livro.autor}
                            faixa_etaria={livro.faixa_etaria} 
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}