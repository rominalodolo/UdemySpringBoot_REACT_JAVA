import axios from 'axios'
// import { API_URL, JPA_API_URL } from '../../Constants'

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }


}

export default new TodoDataService()

// `${JPA_API_URL}/users/${name}/todos` 
// `${JPA_API_URL}/users/${name}/todos/${id}`

// `${JPA_API_URL}/users/${name}/todos/${id}`, todo)
// `${JPA_API_URL}/users/${name}/todos/`, todo