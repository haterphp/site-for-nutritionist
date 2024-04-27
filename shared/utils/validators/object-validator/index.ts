import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { PartialRecord } from '../../../types'

import type { IValidationError } from '../interfaces'
import type { ValidationChain } from '../validation-chain'

type IValueWithEach<TEach extends boolean, TObject extends Record<any, any>> = TEach extends false
  ? TObject
  : TObject[]

type ValidationError = IValidationError['errors']

/**
 * Class for validation object(-s)
 * You can give object pattern for validtion and then object(-s) for validating
 *
 * Notes: If you want to use validator for each object, you need to give it third generic's argument as "true"
 *
 * Example
 * new ObjectValidator({
 *  name: new ValidationChain([new RequiredValidator()])
 * })
 */

class ObjectValidator<
  TObject extends Record<any, any>,
  TKeys extends keyof TObject = keyof TObject,
  TEach extends boolean = false
> extends AbstractValidator {

  private readonly _pattern: PartialRecord<TKeys, ValidationChain>

  constructor (pattern: PartialRecord<TKeys, ValidationChain>) {
    super()
    this._pattern = pattern
  }

  public override validate (port: IValueWithEach<TEach, Partial<TObject>>): IValidationError {
    let result: PartialRecord<TKeys, ValidationError> | PartialRecord<TKeys, ValidationError>[]
    let hasErrors: boolean = false

    if (Array.isArray(port)) {
      result = this._validateArrayOfObjects(port)
      hasErrors = result.length > 0
    } else {
      result = this._validateObject(port)
      hasErrors = this._objectHasError(result)
    }

    if (hasErrors) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_OBJECT_PATTERN,
          data: result
        }
      }
    }

    return super.validate(port)
  }

  private _objectHasError (port: PartialRecord<TKeys, unknown>): boolean {
    return Object.keys(port).length > 0
  }

  private _validateArrayOfObjects (port: PartialRecord<TKeys, unknown>[]): PartialRecord<TKeys, ValidationError>[] {
    return port.map(this._validateObject.bind(this)).filter(this._objectHasError.bind(this))
  }

  private _validateObject (port: PartialRecord<TKeys, unknown>): PartialRecord<TKeys, ValidationError> {
    const result: PartialRecord<TKeys, ValidationError> = {}

    for (const key in this._pattern) {
      if (Object.hasOwn(this._pattern, key)) {
        const v = port[key]
        const validator = this._pattern[key]

        if (validator !== undefined) {
          const { isSuccess, errors } = validator.run(v)
          if (!isSuccess && errors !== undefined) {
            result[key as TKeys] = errors
          }
        }
      }
    }

    return result
  }

}

export { ObjectValidator }
