import Header from "../components/Header/Header.jsx";
import Hero from "../components/Banner/Banner.jsx";
import Destaques from "../components/Destaque/Destaque.jsx";
import LivroOrdem from "../components/LivroOrdem/LivroOrdem.jsx";
import Footer from "../components/Footer/Footer.jsx";
import css from "../components/Destaque/Destaque.module.css";


export default function Home(){
    return(
        <>
            <Header />
            <Hero />
            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end my-5 gap-4">


                    <div className="d-flex flex-column gap-2">


                        <div className="d-flex align-items-center gap-3">
                            <div className={css.linha}></div>
                        </div>


                        <h2 className={`${css.tituloPrincipal} display-6 m-0`}>Nosso Catálago</h2>

                    </div>


                    <div className="d-flex gap-3 align-items-center">
                        <select className={css.ordernar}>
                            <option>Ordernar por: Relevância</option>
                            <option>Mais Recente</option>
                            <option>Menor preço</option>
                        </select>
                    </div>

                </div>
                <LivroOrdem />
            </main>

            <Footer />
        </>

    )
}