import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

class RegexValidator extends AbstractValidator {

  private _pattern: RegExp | string

  private _strict: boolean

  constructor (pattern: RegExp | string, strict?: boolean) {
    super()

    this._pattern = pattern
    this._strict = strict ?? false
  }

  public override validate (value: string): IValidationError {
    const result = value.match(this._pattern)

    const isValid = this._strict
      ? result !== null && result.length === value.length
      : result !== null

    if (isValid) return super.validate(value)

    return {
      isSuccess: false,
      errors: {
        code: ValidationCode.INVALID_REGEX
      }
    }
  }

}

export { RegexValidator }
