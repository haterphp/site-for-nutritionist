import { HttpService } from '../service'

const HttpAppService = new HttpService({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})

export { HttpAppService }
