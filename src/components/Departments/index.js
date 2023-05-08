import List from '../List';
import './style.css'

function Departments() {
    return (
        <section className='departments-container'>
            <div className='dropdown'>
                <p className='textDepartments'>Todos os Departamentos</p>
                <List />
            </div>
        </section>
    )
}

export default Departments;