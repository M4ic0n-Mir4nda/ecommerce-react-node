import './style.css'

const listDepartments= ['LIMPEZA', 'CARNES, AVES E PEIXE', 'FEIRA', 'BEBIDAS', 'DOCES E SOBREMESAS', 'PADARIA'];

function List() {
    return (
        <section className='dropdown-content'>
            <ul className="list-department">
                { listDepartments.map( (department, indice) => (
                    <li className="department" key={indice}>{department}</li>
                ))}
            </ul>
        </section>
    )
}

export default List;