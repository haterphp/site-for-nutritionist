import { IValidationErrors } from "@/shared/utils"
import { ILoginPort, ISignUpPort, IUpdateUserPort } from "../ports"

type ILoginErrors = IValidationErrors<keyof ILoginPort>
type ISignUpErrors = IValidationErrors<keyof ISignUpPort>
type IUpdateUserErrors = IValidationErrors<keyof Omit<IUpdateUserPort, 'id'>>

export type { ILoginErrors, ISignUpErrors, IUpdateUserErrors }