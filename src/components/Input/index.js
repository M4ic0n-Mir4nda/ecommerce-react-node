import './style.css'

function Input(props) {
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <input placeholder="Busque um produto..." className="search" onChange={aoDigitado} value={props.valor}/>
    )
}

export default Input;