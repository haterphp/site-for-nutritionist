'use client';

import { useForm, UseFormReturn } from "react-hook-form"
import { useMemo } from "react";
import { ExceptionService, ValidationRunner } from "@/shared/utils";
import { useApplyFormErrors } from "@/shared/helpers/forms";
import { COMMON_ERRORS_MESSAGES } from "@/shared/messages/common";
import { ICreateCallbackRequestErrors, ICreateCallbackRequestPort } from "../../interfaces";
import { CallbackRequestsRepository } from "../../repository";
import { CreateCallbackRequestValidatorFactory } from "../../validators";

interface IUseCreateCallbackRequestRequest {
    form: UseFormReturn<ICreateCallbackRequestPort>
    onSubmit: (data: ICreateCallbackRequestPort) => Promise<void>
}

const DEFAULT_VALUES: ICreateCallbackRequestPort = {
    name: '',
    email: '',
    phone: '',
}

export const useCreateCallbackRequestRequest = (onSuccess: () => void): IUseCreateCallbackRequestRequest => {
    const form = useForm({ defaultValues: DEFAULT_VALUES })

    const applyMessageErrors = useApplyFormErrors(form)

    const _request = useMemo(() => new CallbackRequestsRepository().create, [])

    const _validator = useMemo(() => new ValidationRunner(new CreateCallbackRequestValidatorFactory()), [])

    const handleOnSubmit = async (data: ICreateCallbackRequestPort): Promise<void> => {
        try {
            _validator.validate(data)
            _request(data).then(onSuccess)
        } catch (error) {
            const e = error as ExceptionService<ICreateCallbackRequestErrors>
            if (e.data !== undefined) {
                applyMessageErrors(e.data, (e) => COMMON_ERRORS_MESSAGES[e.code])
            }
        }
    }

    return { form, onSubmit: handleOnSubmit }
}