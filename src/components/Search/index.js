import Input from "../Input";
import { useState } from 'react'
import styled from 'styled-components'
import search from '../../images/busca.svg'

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

export const SearchDiv = styled.div`
    display: flex;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 5px;
    border-radius: 10px 10px 10px 10px;
`

const ImageSearch = styled.img`
    border: none;
    background-color: #fff;
    padding: 10px;
    border-radius: 0 10px 10px 0px;
    cursor: pointer;
}
`

const Button = styled.button`
    border: none;
    background-color: #fff;
    border-radius: 0 10px 10px 0px;
`

function Search(props) {

    const [busca, setBusca] = useState('')

    const aoClicar = (event) => {
        event.preventDefault()
        props.Aodigitado({
            busca
        })
    }

    return (
        <SearchContainer>
            <SearchDiv>
                <Input 
                    aoAlterado={valor => setBusca(valor)}
                    valor={busca}
                />
                <Button type="submit" onClick={aoClicar}>
                    <ImageSearch src={search} alt='Imagem de busca'/>
                </Button>
            </SearchDiv>
        </SearchContainer>
    )
}

export default Search;