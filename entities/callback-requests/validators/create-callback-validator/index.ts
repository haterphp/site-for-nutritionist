import {
    EmailValidator,
    IValidators,
    IValidatorsFactory,
    RequiredValidator,
    ValidationChain
} from "@/shared/utils";

import { ICreateCallbackRequestPort } from "../../interfaces";

export class CreateCallbackRequestValidatorFactory implements IValidatorsFactory<ICreateCallbackRequestPort> {
    public properties: Partial<IValidators<keyof ICreateCallbackRequestPort>> = {
        name: new ValidationChain([new RequiredValidator()]),
        email: new ValidationChain([new RequiredValidator(), new EmailValidator()]),
        description: new ValidationChain([new RequiredValidator()])
    };
}