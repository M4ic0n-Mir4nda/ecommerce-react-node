import { ImageProduct } from '../ProductImage';
import imageNotFound from '../../images/not-found.png'
import styled from 'styled-components'
import { useState } from 'react';

export const CardContainer = styled.section`
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
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }

  @media (max-width: 370px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
  }
`

export const CardProduct = styled.div`
  text-align: center;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: .5rem;
`

export const Description = styled.div`
  width: 200px;
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 

  p {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 558px) {
    width: 160px;
  }

  @media(max-width: 370px) {
    width: 100%;
    margin: 0 auto;
  }
`

export const CardPrice = styled.h3`
  text-align: center;
  font-size: 22px;
  padding-top: 15px;
`

export const ButtonShopCart = styled.button`
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

  @media(max-width: 558px) {
    padding: 5px;
  }
`

function Card({array}) {

  const [cart, setCart] = useState([])
  
  function addCart(event, prod) {
      event.preventDefault()
      setCart([...cart, prod])
      console.log(cart)
  }

  return (
    <>
    <CardContainer>
        { array.map( product => 
            <CardProduct key={product.ID}>
              <ImageProduct 
                src={`https://cdn-cosmos.bluesoft.com.br/products/${product.CODIGO}`}
                heigthImg='120px'
                widthImg='120px' 
                border='1px solid #C7C7C7'
              />
              <CardPrice>
                R${parseFloat(product.PRECOVENDA).toFixed(2).replace('.', ',')}
              </CardPrice>
                <Description><p>{product.DESCRICAO}</p></Description>
                <ButtonShopCart onClick={(event) => addCart(event, product)}>
                  Adicionar no carrinho
                </ButtonShopCart>
            </CardProduct>    
        )}
      </CardContainer>
    </>
)}

export default Card;