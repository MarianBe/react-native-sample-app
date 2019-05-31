import Axios from 'axios'
import { API_URL } from 'react-native-dotenv'

const apiAxios = Axios.create({
  baseURL: API_URL // eslint-disable-line
})

apiAxios.defaults.timeout = 10000
export default {
  apiAxios
}
