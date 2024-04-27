import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class NotEqualValidator extends AbstractValidator {

  private readonly _exceptValues: string[] | string[][]

  constructor (exceptValue: string[] | string[][]) {
    super()
    this._exceptValues = exceptValue
  }

  public override validate (value: string | string[]): IValidationError {
    if (this._equalMethod(value)) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_EXCEPTED_VALUE
        }
      }
    }
    return super.validate(value)
  }

  protected _equalMethod (value: string[] | string): boolean {
    let isInvalid = false

    if (Array.isArray(this._exceptValues) &&
        this._exceptValues[0] !== undefined &&
        typeof this._exceptValues[0] === 'string' &&
        typeof value === 'string'
    ) {
      isInvalid = this._validateFlatArray(value)
    } else if (Array.isArray(this._exceptValues) &&
        this._exceptValues[0] !== undefined &&
        Array.isArray(this._exceptValues[0]) &&
        Array.isArray(value)
    ) {
      isInvalid = this._validateDimensionalArray(value)
    }

    return isInvalid
  }

  private _validateFlatArray (value: string): boolean {
    return (this._exceptValues as string[]).includes(value)
  }

  private _validateDimensionalArray (value: string[]): boolean {
    let isInvalid = false
    for (const item of this._exceptValues as string[][]) {
      if (item.length !== value.length) continue
      const diff = item.filter((x) => !value.includes(x))
      if (diff.length === 0) {
        isInvalid = true
        break
      }
    }
    return isInvalid
  }

}

export { NotEqualValidator }
