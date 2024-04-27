import { InternalCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

interface IRequiredValidator {
  isCheckValueNan?: boolean
  customErrorCode?: number
}

class RequiredValidator extends AbstractValidator {

  private _checkValueNan: boolean

  private _errorCode: number

  constructor (props?: IRequiredValidator) {
    super()
    let isCheckNan = false
    let errorCode = InternalCode.PROPERTY_IS_REQUIRED
    if (props) {
      const { isCheckValueNan, customErrorCode } = props
      isCheckNan = isCheckValueNan ?? false
      errorCode = customErrorCode ?? InternalCode.PROPERTY_IS_REQUIRED
    }
    this._checkValueNan = isCheckNan
    this._errorCode = errorCode
  }

  public override validate (value: unknown): IValidationError {
    let isError: boolean

    if (Array.isArray(value)) isError = this._validateArray(value)
    else isError = this._validateDefault(value)

    if (isError) {
      return {
        isSuccess: false,
        errors: {
          code: this._errorCode
        }
      }
    }
    return super.validate(value)
  }

  private _validateArray (value: unknown[]): boolean {
    return value.length === 0 || this._validateDefault(value[0])
  }

  private _validateDefault (value: unknown): boolean {
    // eslint-disable-next-line max-len
    if (this._checkValueNan) return value === null || value === undefined || String(value).trim() === '' || isNaN(value as number)
    return value === null || value === undefined || String(value).trim() === ''
  }

}

export { RequiredValidator }
