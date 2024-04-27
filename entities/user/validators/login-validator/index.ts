import { IValidators, IValidatorsFactory, RequiredValidator, ValidationChain } from "@/shared/utils";
import { ILoginPort } from "../../interfaces";

export class LoginValidatorFactory implements IValidatorsFactory<ILoginPort> {
    public properties: Partial<IValidators<keyof ILoginPort>> = {
        email: new ValidationChain([new RequiredValidator()]),
        password: new ValidationChain([new RequiredValidator()])
    };
}