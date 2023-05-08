import './style.css'
import search from '../../images/busca.svg'

function Search() {
    return (
        <div className="container-search">
            <input placeholder="Busque um produto..." className="search" />
            <img src={search} alt="imagem de busca" className="img-busca"/>
        </div>
    )
}

export default Search;