import './style.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { ImageProduct } from '../ProductImage';
import { getAllProdutos } from '../../services/produtos';
import { useState, useEffect } from 'react';

function Adverts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, [])
  
    async function fetchProducts() {
      const productsAPI = await getAllProdutos(1, 4);
      setProducts(productsAPI);
    }

    let arrAdvertisedProducts = []
    products.forEach( (produto, indice) => {
        if (indice > 3) {
            return false
        }
        arrAdvertisedProducts.push(produto)
    })

    return (
        <section className='banner-container'>
            <div className='banner'>
                <Carousel>
                    { arrAdvertisedProducts.map((product) => (
                        <Carousel.Item className='carroselItem' key={product.id}>
                            <ImageProduct 
                                src={`https://cdn-cosmos.bluesoft.com.br/products/${product.CODIGO}`} 
                                widthImg='200px'
                                heigthImg='200px'
                                />
                            <div className='textBanner'>
                                <h3>{product.DESCRICAO}</h3>
                                <h4>R${product.PRECOVENDA}</h4>
                                <p><button className='btn'>Conferir</button></p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>   
        </section>
    )
}

export default Adverts;