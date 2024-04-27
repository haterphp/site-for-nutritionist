import { IValidators, IValidatorsFactory, RequiredValidator, ValidationChain } from "@/shared/utils";
import { ISignUpPort } from "../../interfaces";

export class SignUpValidatorFactory implements IValidatorsFactory<ISignUpPort> {
    public properties: Partial<IValidators<keyof ISignUpPort>> = {
        name: new ValidationChain([new RequiredValidator()]),
        email: new ValidationChain([new RequiredValidator()]),
        password: new ValidationChain([new RequiredValidator()])
    };
}