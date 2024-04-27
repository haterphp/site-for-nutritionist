interface IGetPayload {
  params?: unknown
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
}

interface IPostPayload extends IGetPayload {
  body?: unknown
}

interface IHttpResponse<Response> {
  data: Response
}

/**
 * Errors types
 */

interface IHttpValidationError {
  type: string
  message: string
}

interface IHttpError {
  errors?: IHttpValidationError[]
}

interface IHttpService {
  setHeaders (key: string, value: string | number | boolean): void
  get<Response> (url: string, payload?: IGetPayload): Promise<Response>
  post<Response> (url: string, payload?: IPostPayload): Promise<Response>
  put<Response> (url: string, payload?: IPostPayload): Promise<Response>
  patch<Response> (url: string, payload?: IPostPayload): Promise<Response>
  delete<Response> (url: string, payload?: IPostPayload): Promise<Response>
}

export type {
  IGetPayload,
  IPostPayload,
  IHttpResponse,
  IHttpError,
  IHttpService
}
