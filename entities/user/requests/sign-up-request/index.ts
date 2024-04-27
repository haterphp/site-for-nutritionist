'use client';

import { useForm, UseFormReturn } from "react-hook-form"
import { useMemo } from "react";
import { ExceptionService, ValidationRunner } from "@/shared/utils";
import { ISignUpErrors, ISignUpPort } from "../../interfaces"
import { SignUpValidatorFactory } from "../../validators"
import { useUserStore } from "../../provider";
import { useApplyFormErrors } from "@/shared/helpers/forms";
import { COMMON_ERRORS_MESSAGES } from "@/shared/messages/common";

interface IUseSignUpRequest {
    form: UseFormReturn<ISignUpPort>
    onSubmit: (data: ISignUpPort) => Promise<void>
}

const DEFAULT_VALUES: ISignUpPort = {
    name: '',
    email: '',
    password: '',
}

export const useSingUpRequest = (): IUseSignUpRequest => {
    const form = useForm({ defaultValues: DEFAULT_VALUES })

    const _applyMessageErrors = useApplyFormErrors(form)

    const _request = useUserStore(state => state.signUp)

    const _validator = useMemo(() => new ValidationRunner(new SignUpValidatorFactory()), [])

    const handleOnSubmit = async (data: ISignUpPort): Promise<void> => {
        try {
            _validator.validate(data)
            await _request(data)
        } catch (error) {
            const e = error as ExceptionService<ISignUpErrors>
            if (e.data !== undefined) {
                _applyMessageErrors(e.data, (e) => COMMON_ERRORS_MESSAGES[e.code])
            }
        }
    }

    return { form, onSubmit: handleOnSubmit }
}