import css from './cardLivro.module.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function BookCard({imagem, titulo, categoria, autor}){
    return (

        <div className={`${css.cartaoLivro} h-100`}>

            <div className={css.imagemContainer}>
                <img src={imagem} alt={titulo} className={css.imagem}/>
                <div className={css.overlay}></div>
                <Link className={css.botaoDetalhes} to="/Detalhes">Ver</Link>
            </div>

            <div className={css.informarcoes}>
                <span className={css.categoria}>{categoria}</span>
                <h3 className={css.titulo}>{titulo}</h3>
                <p className={css.autor}>{autor}</p>
            </div>

        </div>
    )
}