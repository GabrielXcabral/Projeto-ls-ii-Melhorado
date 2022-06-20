function Criarcard ({imagem, titulo, comentario}){
    return (
        <article>
            <div className="card">
                <img src={imagem} 
                     className="card-img-top" 
                     alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{comentario}</p>
                </div>
                <button id='btn' class="btn third"><i class="bi bi-bag-fill"></i></button>
            </div>
        </article>
    )
    
}

export default Criarcard;