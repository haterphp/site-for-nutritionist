interface IPasswordValidatorResponse {
  length: boolean
  symbol: boolean
  numbers: boolean
  upperLetter: boolean
}

interface IPasswordValidatorOptions {
  minLength?: number
  maxLength?: number
}

export type {
  IPasswordValidatorOptions,
  IPasswordValidatorResponse
}
