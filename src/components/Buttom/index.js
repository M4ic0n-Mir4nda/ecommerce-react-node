import styled from 'styled-components'
import search from '../../images/busca.svg'

const ButtonContainer = styled.button`
    border: none;
    background-color: #fff;
    border-radius: 0 10px 10px 0px;
`

const ImageSearch = styled.img`
    border: none;
    background-color: #fff;
    padding: 9px;
    border-radius: 0 10px 10px 0px;
    cursor: pointer;
    margin-left: 20px
}
`

function Buttom() {

    return (
        <ButtonContainer type="submit" >
            <ImageSearch src={search} alt='Imagem de busca' />
        </ButtonContainer>
    )
}

export default Buttom;