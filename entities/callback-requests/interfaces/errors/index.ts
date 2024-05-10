import { IValidationErrors } from "@/shared/utils";
import { ICreateCallbackRequestPort } from "../ports";

type ICreateCallbackRequestErrors = IValidationErrors<keyof ICreateCallbackRequestPort>

export type { ICreateCallbackRequestErrors }