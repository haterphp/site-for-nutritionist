import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class PhoneValidator extends AbstractValidator {

  public override validate (value: string): IValidationError {
    const isValidationSuccess = /^[+7]{2}[\d]{10}$/.test(value)

    if (!isValidationSuccess) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_PHONE
        }
      }
    }
    return super.validate(value)
  }

}

export { PhoneValidator }
