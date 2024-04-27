import { ExceptionService } from '@/shared/utils'

import { InternalCode } from '@/shared/enums'

import type { RecordKey } from '../../../types'

import type { IValidationError, IValidatorsFactory } from '../interfaces'

import type { ValidationChain } from '../validation-chain'

type IValidators<TKeys extends RecordKey> = Record<TKeys, ValidationChain>

type IValidationErrors<TKeys extends RecordKey> = Partial<Record<TKeys, IValidationError['errors']>>

class ValidationRunner<TPort extends object,
  TValidators extends Partial<IValidators<keyof TPort>>,
  TValidationErrors extends IValidationErrors<keyof TPort>
> {

  private _validatorFactory: IValidatorsFactory<TPort, TValidators, TValidationErrors>

  constructor (validators: IValidatorsFactory<TPort, TValidators, TValidationErrors>) {
    this._validatorFactory = validators
  }

  public validate (port: TPort): void {
    let _errors: TValidationErrors = {} as TValidationErrors

    for (const [key, _] of Object.entries(this._validatorFactory.properties) as [keyof TPort, unknown][]) {
      const _port = port[key]

      const _validator = this._validatorFactory.properties[key]

      if (_validator) {
        const { isSuccess, errors } = _validator.run(_port)
        if (!isSuccess && errors !== undefined) {
          const _pushedValue: IValidationError['errors'] = errors
          _errors[key] = _pushedValue as TValidationErrors[keyof TPort]
        }
      }
    }

    if (this._validatorFactory.validate !== undefined) {
      const _factoryErrors = this._validatorFactory.validate(port)

      if (Object.keys(_factoryErrors).length !== 0) {
        _errors = Object.assign(_factoryErrors, _errors)
      }
    }

    if (Object.keys(_errors).length !== 0) {
      throw ExceptionService.new({
        status: {
          code: InternalCode.VALIDATION_ERROR,
          message: `Validation Errors in ${this.constructor.name}`
        },
        data: _errors
      })
    }
  }

}

export type { IValidationErrors, IValidators }
export { ValidationRunner }
