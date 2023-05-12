import './style.css';

function Header({children}) {
    return (
        <header className="App-header">
            {children}
        </header>
    )
}

export default Header;