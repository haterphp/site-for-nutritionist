import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class UniqueValidator extends AbstractValidator {

  private _port: unknown

  constructor (port: unknown) {
    super()
    this._port = port
  }

  public override validate (value: unknown): IValidationError {
    let isError: boolean

    if (Array.isArray(value)) isError = this._validateDefault(value.join(''))
    else isError = this._validateDefault(value)

    if (isError) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.PROPERTY_IS_NOT_UNIQUE
        }
      }
    }
    return super.validate(value)
  }

  private _validateDefault (value: unknown): boolean {
    const valuesPort = Object.values(this._port as object)
    return valuesPort.filter((tt) => {
      if (Array.isArray(tt)) return tt.join('') === value
      return tt === value
    }).length > 1
  }

}

export { UniqueValidator }
