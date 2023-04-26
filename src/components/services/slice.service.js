import axios from "axios";
import { APIRoutes } from '../../core/api/routes'


const allTodos = async function getAllTodos() {
    try {
        const response = await axios.get(APIRoutes.todos)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
const allTodosById = async function getallTodosById(id) {
    return axios.get(APIRoutes.todos + id).then(response => {
        return response.data
    })
}

const AuthService = {
    allTodos,
    allTodosById
}

export default AuthService;