import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IPasswordValidatorOptions, IValidationError } from '../interfaces'

class PasswordValidator extends AbstractValidator {

  private readonly _minLength: number

  private readonly _maxLength: number

  constructor (options?: IPasswordValidatorOptions) {
    super()

    this._minLength = options?.minLength ?? 6
    this._maxLength = options?.maxLength ?? 32
  }

  public override validate (value: string): IValidationError {
    const validations: { validationResult: boolean; code: number }[] = [
      { validationResult: this._isExistUpperLetter(value), code: ValidationCode.INVALID_LETTER_UPPER },
      { validationResult: this._isExistLowerLetter(value), code: ValidationCode.INVALID_LETTER_LOWER },
      { validationResult: this._validateLength(value.length), code: ValidationCode.INVALID_LENGTH },
      { validationResult: this._validateSpecialSymbol(value), code: ValidationCode.NEED_SYMBOL },
      { validationResult: this._isExistNumbers(value), code: ValidationCode.INVALID_NUMBERS },
      { validationResult: this._validateInvalidSymbol(value), code: ValidationCode.INVALID_SYMBOL },
      { validationResult: this._isExistCyrillicLetter(value), code: ValidationCode.INVALID_CYRILLIC }
    ]

    const filteredErrorCodes = validations.filter((item) => !item.validationResult)
    const priorityError = filteredErrorCodes.slice(-1).pop()

    if (priorityError) {
      return {
        isSuccess: false,
        errors: {
          code: priorityError.code,
          data: filteredErrorCodes.map((item) => item.code)
        }
      }
    }

    return super.validate(value)
  }

  private _validateLength (value: number): boolean {
    return value >= this._minLength && value <= this._maxLength
  }

  private _validateSpecialSymbol (value: string): boolean {
    return /[!@#%^*()_+№;:?]/g.test(value)
  }

  private _validateInvalidSymbol (value: string): boolean {
    return !/[\s'=\s-&/|{}\[\]"`~<>,.$]+/g.test(value)
  }

  private _isExistNumbers (value: string): boolean {
    return /[0-9]/g.test(value)
  }

  private _isExistUpperLetter (value: string): boolean {
    return value !== value.toLowerCase()
  }

  private _isExistLowerLetter (value: string): boolean {
    return value !== value.toUpperCase()
  }

  private _isExistCyrillicLetter (value: string): boolean {
    return !/[а-яА-я]/g.test(value)
  }

}

export { PasswordValidator }
