import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class IsNumberValidator extends AbstractValidator {

  public override validate (value: unknown): IValidationError {
    const isValid = this._validateNumber(value)
    if (isValid) return super.validate(value)
    return {
      isSuccess: false,
      errors: {
        code: ValidationCode.INVALID_NUMBERS
      }
    }
  }

  private _validateNumber (value: unknown): boolean {
    return !isNaN(Number(value))
  }

}

export { IsNumberValidator }
