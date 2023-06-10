import './style.css'
import user from '../../images/user.png'
import carShopping from '../../images/carShooping.png'

function IconsMenu() {
    return (
        <div className='icons-container'>
            <img src={user} className='icon' />
            <img src={carShopping} className='icon' onClick={() => setState(true)}/>
        </div>
    )
}

export default IconsMenu;