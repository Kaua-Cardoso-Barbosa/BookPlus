import css from './Banner.module.css';

export default function Banner() {
    return (

        <section className={`${css.heroSecao} d-flex flex-column`}>

            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv"
                alt="Ambiente de leitura"
                className={css.heroImagem}
            />

            <div className={css.heroOverlay}></div>


            <div className="container position-relative z-1 d-flex flex-column justify-content-center flex-grow-1 py-5">


                <div className="col-12 col-lg-8 col-xl-7">


                    <h2 className="display-4 fw-bolder text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                        Descubra seu <br/>
                        <span className={css.heroTituloGradiente}>
                            próximo capítulo.
                        </span>
                    </h2>


                    <p className="fs-4 fw-bold text-white mb-5" style={{ letterSpacing: '0.05em' }}>
                        Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
                    </p>


                    <div className="d-flex flex-wrap gap-3 mt-2">
                        <a href="#catalogo" className={css.botaoPrimario}>
                            Explorar Catálogo
                        </a>
                        <a href="#promocoes" className={css.botaoSecundario}>
                            Ver Promoções
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}