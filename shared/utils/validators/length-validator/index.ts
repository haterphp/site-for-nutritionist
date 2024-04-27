import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { LengthValidatorProps, IValidationError } from '../interfaces'

class LengthValidator extends AbstractValidator {

  private readonly _min: number

  private readonly _max: number

  private _scenario: string

  constructor ({ min, max }: LengthValidatorProps) {
    super()

    if (max === undefined) {
      this._scenario = 'min'
    } else if (min === undefined) {
      this._scenario = 'max'
    } else if (min === max) {
      this._scenario = 'contain'
    } else {
      this._scenario = 'both'
    }
    this._min = min ?? 1
    this._max = max ?? 64
  }

  public override validate (value: number | string): IValidationError {
    const isValid =
        typeof value === 'number'
          ? this._validateNumber(value)
          : this._validateString(value)
    if (isValid) return super.validate(value)
    if (this._scenario === 'min') {
      return this._errorValidate(ValidationCode.INVALID_LENGTH_MIN)
    } else if (this._scenario === 'max') {
      return this._errorValidate(ValidationCode.INVALID_LENGTH_MAX)
    } else if (this._scenario === 'contain') {
      return this._errorValidate(ValidationCode.INVALID_LENGTH_CONTAIN)
    }
    return this._errorValidate(ValidationCode.INVALID_LENGTH)
  }

  private _errorValidate (code: ValidationCode): IValidationError {
    return {
      isSuccess: false,
      errors: {
        code: code
      }
    }
  }

  private _validateNumber (value: number): boolean {
    return this._min <= value && value <= this._max
  }

  private _validateString (value: string): boolean {
    const len = value.length
    return this._min <= len && len <= this._max
  }

}

export { LengthValidator }
