import { IValidationErrors } from "@/shared/utils"
import { ILoginPort, ISignUpPort } from "../ports"

type ILoginErrors = IValidationErrors<keyof ILoginPort>
type ISignUpErrors = IValidationErrors<keyof ISignUpPort>

export type { ILoginErrors, ISignUpErrors }