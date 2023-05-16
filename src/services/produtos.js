import axios from 'axios';

const produtosAPI = axios.create({baseURL: 'http://localhost:5000/produtos'})

async function getAllProdutos(numberPage, limitPage) {
    const response = await produtosAPI.get(`/?page=${numberPage}&limit=${limitPage}`)

    return response.data
}

async function getSearchProdutos(inputElement, numberPage, limitPage) {
    const response = await produtosAPI.post(`/?prod=${inputElement}&page=${numberPage}&limit=${limitPage}`)

    return response.data;
}

export {
    getAllProdutos,
    getSearchProdutos
}