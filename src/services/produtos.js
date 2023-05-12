import axios from 'axios';

const produtosAPI = axios.create({baseURL: 'http://localhost:5000/produtos'})

async function getAllProdutos() {
    const response = await produtosAPI.get('/')

    return response.data
}

async function getSearchProdutos(inputElement) {
    const response = await produtosAPI.post('/', {}, {
        params: { prod: `${inputElement}` }
    })

    return response.data;
}

export {
    getAllProdutos,
    getSearchProdutos
}