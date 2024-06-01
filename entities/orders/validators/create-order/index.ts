import { IValidators, IValidatorsFactory, OptionalValidator, PhoneValidator, RequiredValidator, ValidationChain } from "@/shared/utils";

import { CreateOrderFormData } from "../../interfaces";

export class CreateOrderValidatorFactory implements IValidatorsFactory<CreateOrderFormData> {
    public properties: Partial<IValidators<keyof CreateOrderFormData>> = {
        address: new ValidationChain([new RequiredValidator()]),
        deliveryTime: new ValidationChain([new RequiredValidator()]),
        phone: new ValidationChain([new OptionalValidator(), new PhoneValidator()])
    };
}