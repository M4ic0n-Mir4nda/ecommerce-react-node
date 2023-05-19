import axios from 'axios';

const produtosAPI = axios.create({baseURL: 'http://localhost:5000/produtos'})

async function getAllProdutos(numberPage, limitPage) {
    const response = await produtosAPI.get(`/?page=${numberPage}&limit=${limitPage}`);

    return response.data;
}

async function getSearchProdutos(inputElement, numberPage, limitPage) {
    const response = await produtosAPI.post(`/?prod=${inputElement}&page=${numberPage}&limit=${limitPage}`);

    return response.data;
}

async function searchForProductsDepartment(idDepartment, numberPage = 1, limitPage = 32) {
    const response = await produtosAPI.post(`/produtos/departamentos/?depart=${idDepartment}&page=${numberPage}&limit=${limitPage}`);

    return response.data;
}

export {
    getAllProdutos,
    getSearchProdutos,
    searchForProductsDepartment,
}