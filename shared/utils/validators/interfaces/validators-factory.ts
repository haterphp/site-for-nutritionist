import { IValidationErrors, IValidators } from "../validation-runner"

interface IValidatorsFactory<
  TPort,
  TProperties extends Partial<IValidators<keyof TPort>> = Partial<IValidators<keyof TPort>>,
  TErrors extends IValidationErrors<keyof TPort> = IValidationErrors<keyof TPort>,
> {
  properties: TProperties

  validate?(port: TPort): TErrors

  getValuesForMessages? (key: string): Record<string, string>
}

export type { IValidatorsFactory }
