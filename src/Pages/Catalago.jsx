import Header from "../components/Header/Header.jsx";
import Destaques from "../components/Destaque/Destaque.jsx";
import LivroOrdem from "../components/LivroOrdem/LivroOrdem.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


export default function Home(){
    return(
        <>
            <Header />
            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>
                <Destaques />
                <LivroOrdem />
            </main>

            <Footer />
        </>

    )
}