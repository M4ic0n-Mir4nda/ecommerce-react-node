import { useEffect, useState } from 'react';
import { getAllProdutos } from '../../services/produtos';
import imgProduct from '../../images/trakinas.png'
import { ImageProduct } from '../ProductImage';
import styled from 'styled-components'

const CardContainer = styled.section`
  margin: 0 auto;
  width: 1050px;
  background-color: ${props => props.backGround || '#fff'};
  display: ${props => props.display || 'grid'};
  box-shadow: ${props => props.boxShadow || '0 3px 5px #0005'};
  height: ${props => props.heigthText};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.content};
  align-items: ${props => props.alignItens};
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  border-radius: 5px;
  margin-bottom: 40px;

  @media (max-width: 810px) {
    display: grid;
    width: 97%;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
  }

  @media (max-width: 650px) {
    display: grid;
    width: 86%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    img {
      width: 100%
    }
  }
`

const CardProduct = styled.div`
  text-align: center;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: .5rem;
`

const CardPrice = styled.h3`
  font-size: 22px;
`

const ButtonShopCart = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }
`

const Empty = styled.p`
  font-size: 26px;
  text-align:center
`

function Card() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const productsAPI = await getAllProdutos();
    setProducts(productsAPI);
  }

  return (
    <>
      { products !== 'Não encontrado' ? (
      <CardContainer>
        { products.map( product => (
            <CardProduct key={product.id}>
              <ImageProduct 
                src={imgProduct}
                widthImg='90%' 
                heigthImg='200px' 
                border='1px solid #C7C7C7'
              />
              <CardPrice>
                R${product.valor}
              </CardPrice>
                <p>{product.descricao}</p>
                <p>
                <ButtonShopCart>
                  Adicionar no carrinho
                </ButtonShopCart>
              </p>
            </CardProduct>
        ))}
      </CardContainer>
    ) : (
      <CardContainer
        display='flex'
        backGround='f1f1f1'
        heigthText='400px'
        flexDirection='row'
        content='center'
        alignItens='center'
        boxShadow='none'
      >
        <Empty>Não há itens!</Empty>
      </CardContainer>
    )}
    </>
)}

export default Card;