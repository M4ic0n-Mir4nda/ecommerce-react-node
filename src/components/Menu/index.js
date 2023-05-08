import './style.css'
import Departments from '../Departments';

function Menu() {
    return (
        <section className='menu'>
            <Departments />
            <p>Cupom</p>
            <p>Promoçoes</p>
            <p>Lista de Compras</p>
        </section>
    )
}

export default Menu;