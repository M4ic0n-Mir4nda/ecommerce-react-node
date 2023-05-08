import './style.css';
import Search from '../Search';
import IconsMenu from '../IconsMenu';
import logo from '../../images/logo.png'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className='logo'/>
            <Search />
            <IconsMenu />
        </header>
    )
}

export default Header;