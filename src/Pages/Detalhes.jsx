import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Detalhes() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log("RESPOSTA API:", data);

          // 🔥 TRATAMENTO CORRETO
          if (data.livro) {
            setLivro(data.livro);
          } else {
            setLivro(data);
          }
        })
        .catch(err => console.log(err));
  }, [id]);

  if (!livro) {
    return (
        <>
          <Header />
          <div className="container mt-5 text-center">
            <h3>Carregando livro...</h3>
          </div>
          <Footer />
        </>
    );
  }

  return (
      <>
        <Header />

        <div className="container mt-5">
          <div className="card shadow-lg p-4">
            <div className="row g-4 align-items-center">

              <div className="col-md-4 text-center">
                <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>

              <div className="col-md-8">
                <h2 className="mb-3">{livro.titulo}</h2>

                <p><strong>Autor:</strong> {livro.autor}</p>
                <p><strong>Gênero:</strong> {livro.categoria}</p>
                <p><strong>Faixa etária:</strong> {livro.faixa_etaria}</p>

                <hr />

                <p>
                  <strong>Descrição:</strong><br />
                  {livro.descricao || "Sem descrição disponível"}
                </p>

                <button className="btn btn-success mt-3">
                  Comprar livro
                </button>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </>
  );
}