interface ILengthValidatorRequiredMin {
  min: number
  max?: number
}

interface ILengthValidatorRequiredMax {
  min?: number
  max: number
}

interface ILengthValidatorRequiredAll {
  min: number
  max: number
}

type LengthValidatorProps =
  ILengthValidatorRequiredMin
  | ILengthValidatorRequiredMax
  | ILengthValidatorRequiredAll

export type { LengthValidatorProps }
