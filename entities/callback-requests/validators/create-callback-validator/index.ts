import {
    EmailValidator,
    IValidators,
    IValidatorsFactory,
    OptionalValidator,
    PhoneValidator,
    RequiredValidator,
    ValidationChain
} from "@/shared/utils";

import { ICreateCallbackRequestPort } from "../../interfaces";

export class CreateCallbackRequestValidatorFactory implements IValidatorsFactory<ICreateCallbackRequestPort> {
    public properties: Partial<IValidators<keyof ICreateCallbackRequestPort>> = {
        name: new ValidationChain([new RequiredValidator()]),
        email: new ValidationChain([new RequiredValidator(), new EmailValidator()]),
        phone: new ValidationChain([new OptionalValidator(), new PhoneValidator()])
    };
}