import axios from 'axios';

const departmentsAPI = axios.create({baseURL: 'http://localhost:5000/departamentos'})

async function getAllDepartments() {
    const departments = await departmentsAPI.get('/departamentos');

    return departments.data;
}

export {
    getAllDepartments,
}