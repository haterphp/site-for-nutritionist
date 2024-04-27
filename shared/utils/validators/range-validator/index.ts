import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

interface IRange {
  min?: number
  max?: number
}

class RangeValidator extends AbstractValidator {

  private _range: IRange

  constructor (range: IRange) {
    super()
    this._range = range
  }

  public override validate (value: string | number): IValidationError {
    if (typeof value === 'string') return this._validateString(value)
    if (typeof value === 'number') return this._validateNumber(value)
    return super.validate(value)
  }

  private _validateString (value: string): IValidationError {
    if (this._range.min !== undefined && +value <= this._range.min) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_RANGE
        }
      }
    }
    if (this._range.max !== undefined && +value >= this._range.max) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_RANGE
        }
      }
    }
    return super.validate(value)
  }

  private _validateNumber (value: number): IValidationError {
    if (this._range.min !== undefined && value <= this._range.min) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_RANGE
        }
      }
    }
    if (this._range.max !== undefined && value >= this._range.max) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_RANGE
        }
      }
    }
    return super.validate(value)
  }

}

export { RangeValidator }
