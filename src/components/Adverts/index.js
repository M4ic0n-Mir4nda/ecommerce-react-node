import './style.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import imgProduct from '../../images/trakinas.png'
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
      const productsAPI = await getAllProdutos();
      setProducts(productsAPI);
    }

    let arrAdvertisedProducts = []
    products.forEach( (produto, indice) => {
        if (indice > 2) {
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
                            <ImageProduct src={imgProduct} widthImg='50%'/>
                            <div className='textBanner'>
                                <h3>{product.descricao}</h3>
                                <h4>R${product.valor},99</h4>
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