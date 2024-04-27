import type { InternalCode, ValidationCode } from '@/shared/enums'

import type { IStatusCode } from '../interfaces'

interface ICreateExceptionPayload<Data> {
  status: IStatusCode
  data?: Data
}

class ExceptionService<Data> extends Error {

  public readonly code: InternalCode | ValidationCode

  public readonly data?: Data

  private constructor (statusCode: IStatusCode, data?: Data) {
    super()

    this.name = this.constructor.name
    this.code = statusCode.code
    this.data = data
    this.message = statusCode.message

    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(this, this.constructor)
  }

  public static new<Data>(payload: ICreateExceptionPayload<Data>): ExceptionService<Data> {
    return new ExceptionService(payload.status, payload.data)
  }

}

export { ExceptionService }
export type { ICreateExceptionPayload }
