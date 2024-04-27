import axios from 'axios'

import type { AxiosRequestConfig, AxiosInstance, AxiosError, AxiosResponse } from 'axios'

import type { IHttpService, IGetPayload, IPostPayload, IHttpResponse } from '../interfaces'

class HttpService implements IHttpService {

  protected _globalConfig: AxiosRequestConfig & { retry: boolean }

  protected _instance: AxiosInstance

  protected _droppedRequests: AxiosRequestConfig[]

  get instance (): AxiosInstance {
    return this._instance
  }

  constructor (config: AxiosRequestConfig) {
    this._globalConfig = { retry: false }
    this._droppedRequests = []

    this._instance = axios.create({ ...config, ...this._globalConfig })
    this._interceptResponse()
  }

  public setHeaders (key: string, value: string | number | boolean): void {
    this._instance.defaults.headers.common[key] = value
  }

  public async get<Response> (url: string, payload?: IGetPayload): Promise<Response> {
    return this._instance.get(url, {
      params: payload?.params,
      responseType: payload?.responseType
    })
  }

  public async post<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.post(url, payload?.body, {
      params: payload?.params,
      responseType: payload?.responseType,
      ...this._globalConfig
    })
  }

  public async put<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.put(url, payload?.body, {
      params: payload?.params,
      responseType: payload?.responseType
    })
  }

  public async patch<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.patch(url, payload?.body, {
      params: payload?.params,
      responseType: payload?.responseType
    })
  }

  public async delete<Response> (url: string, payload?: IPostPayload): Promise<Response> {
    return this._instance.delete(url, {
      params: payload?.params,
      data: payload?.body,
      responseType: payload?.responseType
    })
  }

  private _interceptResponse (): void {
    this._instance.interceptors.response.use(
      this._handleResponse.bind(this),
      this._handleErrorResponse.bind(this)
    )
  }

  private async _handleResponse (response: AxiosRequestConfig<IHttpResponse<unknown>>): Promise<AxiosResponse['data']> {
    return Promise.resolve(response.data)
  }

  private async _handleErrorResponse (error: AxiosError): Promise<unknown> {
    return Promise.reject(error.response)
  }

}

export { HttpService }
