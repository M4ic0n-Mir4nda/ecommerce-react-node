import './style.css';
import { Link } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import { getAllDepartments } from '../../services/departments';
import { searchForProductsDepartment } from '../../services/produtos';
import iconMenu from '../../images/iconMenuDepartamento.svg';

function Menu({arrDepartments}) {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        fetchDepartmentsAPI();
    }, [])

    async function fetchDepartmentsAPI() {
        const deparmentsAPI = await getAllDepartments();
        setDepartments(deparmentsAPI)
    }

    async function handleClick(id) {
        const produtosAPI = await searchForProductsDepartment(id);
        arrDepartments(produtosAPI)
    }
    
    return (
        <section className='menu'>
            <ul className='dropdown-menu'>
                <li>
                    <div className='container-departments'>
                        <img src={iconMenu} className='icon-department'/>
                        <span className='title-menu'>Departamentos</span>
                    </div>
                    <ul className='dropdown-submenu'>
                        { departments.map( department => (
                        <li key={department.DEPTO}>
                            <span 
                                className="department" 
                                onClick={() => handleClick(department.DEPTO)}
                                >{department.DESCRICAO}
                            </span>
                        </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <Link to='/cupom' className='link-menu'>Cupom</Link>
                </li>
                <li>
                    <Link to='/promocoes' className='link-menu'>Promocoes</Link>
                </li>
            </ul>






            {/* <Departments />
            <p>Cupom</p>
            <p>Lista de Compras</p> */}
        </section>
    )
}

export default Menu;