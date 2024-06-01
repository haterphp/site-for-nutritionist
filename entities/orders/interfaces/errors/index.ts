import { IValidationErrors } from "@/shared/utils";
import { CreateOrderFormData } from "../port";

export type ICreateOrderErorrs = IValidationErrors<keyof CreateOrderFormData>