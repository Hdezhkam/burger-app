import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://react-my-burger-1d7e2.firebaseio.com/'
})

export default instance;