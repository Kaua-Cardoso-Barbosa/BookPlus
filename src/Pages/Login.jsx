import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.css';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                })
            });

            retorno = await retorno.json();

            console.log(retorno);

            if (retorno.token) {

                localStorage.setItem('token', retorno.token);
                localStorage.setItem('user', retorno.user);
                localStorage.setItem('email', retorno.email);

                navigate('/Dashbord');


            }

        } catch (erro) {
            console.error(erro);
        }
    }


    return (
        <>
            <Header />
            <div className={css.loginFundo}>
                <div className={css.cartao}>

                    <form onSubmit={handleLogin}>

                        <div className={css.grupoInput}>
                            <label className={css.label}>E-mail</label>
                            <input
                                type="email"
                                className={css.input}
                                placeholder="User@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={css.grupoInput}>
                            <label className={css.label}>Senha</label>
                            <input
                                type="password"
                                className={css.input}
                                placeholder="*******"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={css.botao}>
                            Entrar
                        </button>

                    </form>

                </div>
            </div>
            <Footer />
        </>
    );
}