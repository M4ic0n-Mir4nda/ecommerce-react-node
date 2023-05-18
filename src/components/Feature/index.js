import imageDevelopment from '../../images/development.svg'
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    h1 {
        text-transform: uppercase;
        font-size: 2em;
        color: grey;
    }

    img {
        width: 100%;
        margin: 0 auto;
        background-color: grey;
    }
`

function Feature() {
    return (
        <ContainerDiv>
            <Content>
                <h1>Em desenvolvimento...</h1>
                <img src={imageDevelopment} />
            </Content>
        </ContainerDiv>
    )
}

export default Feature;