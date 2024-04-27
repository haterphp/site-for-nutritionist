import type { IValidationError } from './validator'

interface IValidationChain {
  run(value: unknown): IValidationError
}

export type { IValidationChain }
