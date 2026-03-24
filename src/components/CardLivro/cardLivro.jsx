import css from './cardLivro.module.css';
import { Link } from 'react-router-dom';

export default function CardLivro({
                                      imagem,
                                      categoria,
                                      titulo,
                                      autor,
                                      faixa_etaria,
                                      admin = false,
                                      onEditar,
                                      onExcluir,
                                      id
                                  }) {

    const isAdmin = admin && localStorage.getItem("token");

    return (
        <div className={css.cartaoLivro}>

            <div className={css.imagemContainer}>
                <img
                    src={imagem || "https://via.placeholder.com/150"}
                    className={css.imagem}
                />

                <Link className={css.botaoDetalhes} to={`/detalhes/${id}`}>
                    Ver
                </Link>
            </div>

            <div className={css.informarcoes}>
                <span className={css.categoria}>{categoria}</span>
                <h3 className={css.titulo}>{titulo}</h3>
                <p className={css.autor}>{autor}</p>
                <span className={css.idade}>{faixa_etaria}</span>
            </div>

            {isAdmin && (
                <div className="d-flex gap-2 mt-2 p-2">

                    <button
                        className="btn btn-warning btn-sm w-100"
                        onClick={() => onEditar?.(id)}
                    >
                        Editar
                    </button>

                    <button
                        className="btn btn-danger btn-sm w-100"
                        onClick={() => onExcluir?.(id)}
                    >
                        Excluir
                    </button>

                </div>
            )}

        </div>
    );
}