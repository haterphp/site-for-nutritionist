import { HttpService } from '../service'

const HttpAppService = new HttpService({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { HttpAppService }
