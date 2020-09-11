import axios from 'axios'

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})
 
instance.defaults.common['Authorization'] = 'Auth Token from axios-instance'

export default instance;