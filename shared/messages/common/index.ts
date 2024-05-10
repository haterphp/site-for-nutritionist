import { InternalCode, ValidationCode } from "@/shared/enums";

export const COMMON_ERRORS_MESSAGES: Record<number, string> = {
    [InternalCode.PROPERTY_IS_REQUIRED]: 'Поле обязательно для заполнения',
    [ValidationCode.INVALID_EMAIL]: 'Поле должно соотвествовать формату почты',
    [ValidationCode.INVALID_PHONE]: 'Поле должно соотвествовать формату телефона',
}