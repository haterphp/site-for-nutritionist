import { IValidators, IValidatorsFactory, RequiredValidator, ValidationChain } from "@/shared/utils";
import { ICreateCommentPort } from "../../interfaces";

export class CreateCommentValidators implements IValidatorsFactory<ICreateCommentPort> {
    public properties: Partial<IValidators<keyof ICreateCommentPort>> = {
        comment: new ValidationChain([new RequiredValidator()]),
    };
}