import './style.css'
import user from '../../images/user.png'
import carShopping from '../../images/carShooping.png'

const icons = [user, carShopping];

function IconsMenu() {
    return (
        <div className='icons-container'>
            { icons.map( (icon, indice) => (
                <img src={icon} className='icon' alt='imagens menu' key={indice}/>
            ))}
        </div>
    )
}

export default IconsMenu;