import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class EmailValidator extends AbstractValidator {

  public override validate (value: string): IValidationError {
    const isValidationSuccess = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/.test(value)

    if (!isValidationSuccess) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_EMAIL
        }
      }
    }
    return super.validate(value)
  }

}

export { EmailValidator }
