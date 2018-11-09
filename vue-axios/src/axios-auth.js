import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://vue-axios-b0ae6.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
