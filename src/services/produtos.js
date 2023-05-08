import axios from 'axios';

const produtosAPI = axios.create({baseURL: 'http://localhost:5000/produtos'})

async function getAllProdutos() {
    const response = await produtosAPI.get('/')

    return response.data
}

export {
    getAllProdutos
}