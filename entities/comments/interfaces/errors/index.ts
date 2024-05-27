import { IValidationErrors } from "@/shared/utils"
import { ICreateCommentPort } from "../port"

export interface ICreateCommentErrors extends IValidationErrors<keyof ICreateCommentPort> {}