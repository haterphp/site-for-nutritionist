import type { IValidationError, IValidator } from '../interfaces'

abstract class AbstractValidator implements IValidator {

  private _nextValidator: IValidator | undefined

  public setNext (validator: IValidator): IValidator {
    this._nextValidator = validator
    return validator
  }

  public validate (value: unknown): IValidationError {
    if (this._nextValidator) {
      return this._nextValidator.validate(value)
    }

    return { isSuccess: true }
  }

}

export { AbstractValidator }
