import { AbstractValidator } from '../abstract-validator'

import type { IOptionalValidatorOptions, IValidationError } from '../interfaces'

class OptionalValidator extends AbstractValidator {

  private readonly _ignoreValues: string[]

  constructor (options?: IOptionalValidatorOptions) {
    super()
    this._ignoreValues = options?.ignoreValues ?? []
  }

  public override validate (value: unknown): IValidationError {
    if (this._validate(value)) {
      return { isSuccess: true }
    }
    return super.validate(value)
  }

  private _validate (value: unknown): boolean {
    const isValid = value === null ||
            value === undefined ||
            value === '' ||
            (value as unknown[]).length === 0
    if (isValid) {
      // eslint-disable-next-line no-negated-condition
      return isValid || (this._ignoreValues.length !== 0 ? this._ignoreValues.includes(value as string) : true)
    }
    return isValid
  }

}

export { OptionalValidator }
