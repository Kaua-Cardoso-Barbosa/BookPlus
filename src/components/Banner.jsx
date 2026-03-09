
export default function Banner() {
    return (
        <div className="card text-bg-dark">
            <img src="/Banner-copy.jpg" className="card-img opacity-50" alt="..."/>
            <div className="card-img-overlay">
                <p className="card-title">CURADORIA EXCLUSIVA</p>
                <p className="card-text">Descubra seu próximo capítulo.</p>
                <p className="card-text">Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.</p>
                <button>EXPLORAR CATÁLOGO</button>
                <button>VER PROMOÇÕES</button>
            </div>
        </div>
    )
}