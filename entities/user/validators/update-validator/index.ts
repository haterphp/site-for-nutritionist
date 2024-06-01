import { IValidators, IValidatorsFactory, RequiredValidator, ValidationChain } from "@/shared/utils";
import { ISignUpPort } from "../../interfaces";

export class UpdateUserValidatorFactory implements IValidatorsFactory<ISignUpPort> {
    public properties: Partial<IValidators<keyof ISignUpPort>> = {
        name: new ValidationChain([new RequiredValidator()]),
    };
}