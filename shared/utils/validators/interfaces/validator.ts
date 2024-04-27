interface IValidationError<TData = unknown> {
  isSuccess: boolean
  errors?: {
    code: number
    data?: TData
  }
}

interface IValidator {
  setNext(validator: IValidator): IValidator

  validate(value: unknown): IValidationError
}

export type { IValidator, IValidationError }
