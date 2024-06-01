'use client';

import { useForm, UseFormReturn } from "react-hook-form"
import { useEffect, useMemo } from "react";
import { ExceptionService, ValidationRunner } from "@/shared/utils";
import { IUpdateUserErrors, IUpdateUserPort } from "../../interfaces"
import { useUserStore } from "../../provider";
import { useApplyFormErrors } from "@/shared/helpers/forms";
import { COMMON_ERRORS_MESSAGES } from "@/shared/messages/common";
import { UpdateUserValidatorFactory } from "../../validators";
import { useSnackbar } from "@/shared/components";

type FormData = Omit<IUpdateUserPort, 'id'>

interface IUseUpdateUserRequest {
    form: UseFormReturn<FormData>
    onSubmit: (data: FormData) => Promise<void>
}

const DEFAULT_VALUES: FormData = {
    name: '',
}

export const useUpdateUserRequest = (): IUseUpdateUserRequest => {
    const form = useForm({ defaultValues: DEFAULT_VALUES })
    const snackbar = useSnackbar()

    const _applyMessageErrors = useApplyFormErrors(form)

    const [_request, user] = useUserStore(state => [state.updateUser, state.user])
    const _validator = useMemo(() => new ValidationRunner(new UpdateUserValidatorFactory()), [])

    useEffect(() => {
        if (user !== null) form.reset({ name: user?.name })
    }, [user, form])

    const handleOnSubmit = async (data: FormData): Promise<void> => {
        try {
            _validator.validate(data)
            await _request(data)
            snackbar.make({ message: 'Данные успешно изменены', color: 'primary' })
        } catch (error) {
            const e = error as ExceptionService<IUpdateUserErrors>
            if (e.data !== undefined) {
                _applyMessageErrors(e.data, (e) => COMMON_ERRORS_MESSAGES[e.code])
            }
        }
    }

    return { form, onSubmit: handleOnSubmit }
}