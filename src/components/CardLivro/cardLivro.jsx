import css from './cardLivro.module.css';
import { Link } from 'react-router-dom';

export default function CardLivro({ imagem, categoria, titulo, autor, faixa_etaria }) {
    return (
        <div className={css.cartaoLivro}>

            <div className={css.imagemContainer}>
                <img src={imagem} className={css.imagem} />
                <Link className={css.botaoDetalhes} to="/Detalhes">Ver</Link>
            </div>

            <div className={css.informarcoes}>
                <span className={css.categoria}>{categoria}</span>

                <h3 className={css.titulo}>{titulo}</h3>

                <p className={css.autor}>{autor}</p>

                <span className={css.idade}>{faixa_etaria}</span>

            </div>
        </div>
    );
}
