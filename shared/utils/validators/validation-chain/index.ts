import type { IValidationChain, IValidationError, IValidator } from '../interfaces'

class ValidationChain implements IValidationChain {

  private _validations: IValidator[]

  constructor (validations: IValidator[]) {
    this._validations = validations
  }

  public run (value: unknown): IValidationError {
    return this._validationChain().validate(value)
  }

  private _validationChain (): IValidator {
    return this._validations.
      slice(0, -1).
      reverse().
      reduce(
        (validator, currentValidator) => {
          currentValidator.setNext(validator)
          return currentValidator
        },
        this._validations[this._validations.length - 1]
      )
  }

}

export { ValidationChain }
