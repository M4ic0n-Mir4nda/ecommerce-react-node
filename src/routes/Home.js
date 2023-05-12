import { CardContainer, CardProduct, Description, CardPrice, ButtonShopCart } from '../components/Card';
import { ImageProduct } from '../components/ProductImage';
import { useState } from 'react';
import { getSearchProdutos } from '../services/produtos';
import Adverts from '../components/Adverts';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import styled from 'styled-components';
import IconsMenu from '../components/IconsMenu';
import logo from '../images/logo.png'
import Input from '../components/Input';
import Buttom from '../components/Buttom';

const GlobalContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #f1f1f1;
  padding-bottom: 2.5rem;
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

const HeaderContainer = styled.header`
  display: flex;
  background: linear-gradient(25deg, #F8C630, #f4cf60);
  align-items: center;
  justify-content: space-evenly;
  min-width: 300px;
  width: 100%;
`

const Logo = styled.img`
  padding: 10px;
  width: 200px;
  height: 100px;
`

function Home() {

  const [busca, setBusca] = useState('')
  const [resposta, setResposta] = useState([])

  const aoSalvar = async (event) => {
    event.preventDefault()
    const pesquisados = await getSearchProdutos(busca)
    console.log(pesquisados)
    setResposta(pesquisados)
}

  return (
    <GlobalContainer>
      <form onSubmit={aoSalvar}>
        <HeaderContainer>
          <SearchContainer>
            <Logo src={logo} alt='Logo da Empresa'/>
            <Input 
              aoAlterado={valor => setBusca(valor)}
              valor={busca}
            />
            <Buttom />
            <IconsMenu />
          </SearchContainer>
        </HeaderContainer>
        <Menu />
        <Adverts />
        { resposta.length > 0 ? (
            <CardContainer>
              { resposta.map (product => (
                <CardProduct key={product.ID}>
                <ImageProduct 
                  src={`https://cdn-cosmos.bluesoft.com.br/products/${product.CODIGO}`}
                  heigthImg='120px'
                  widthImg='120px' 
                  border='1px solid #C7C7C7'
                />
                <CardPrice>
                  R${product.PRECOVENDA}
                </CardPrice>
                  <Description><p>{product.DESCRICAO}</p></Description>
                  <ButtonShopCart>
                    Adicionar no carrinho
                  </ButtonShopCart>
              </CardProduct>
              ))}
              </CardContainer>
        ) : <Card /> }
        <Footer />
      </form>
    </GlobalContainer>
  );
}

export default Home;
