import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import css from './Login.module.css';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";


export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    return (
        <>
            <Header />
            <div className={css.loginFundo}>
                <div className={css.cartao}>



                    <form>

                        <div className={css.grupoInput}>
                            <label className={css.label}>E-mail</label>
                            <input
                                type="email"
                                className={css.input}
                                placeholder="User@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Atualiza o state
                                required
                            />
                        </div>

                        <div className={css.grupoInput}>
                            <label className={css.label}>Senha</label>
                            <input
                                type="password"
                                className={css.input}
                                placeholder="******"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} // Atualiza o state
                                required
                            />
                        </div>

                        <Link className={css.botao} to="/Login">Cadastrar</Link>

                    </form>

                </div>
            </div>
            <Footer />
        </>

    );
}