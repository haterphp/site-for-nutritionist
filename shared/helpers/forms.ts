import { FieldValues, Path, UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { IInputProps } from "../components/ui/inputs/interfaces";
import { IValidationError, IValidationErrors } from "../utils";
import { useCallback } from "react";

type IUseRegisterField = UseFormRegisterReturn & Pick<IInputProps, 'isError' | 'feedback' | 'value'>

type MessagePipeFunction = (error: Exclude<IValidationError['errors'], undefined>) => string


const useRegisterField = <TFields extends FieldValues>(form: UseFormReturn<TFields>) => {
    return useCallback((name: Path<TFields>): IUseRegisterField => {
        const state = form.getFieldState(name)
        return { ...form.register(name), value: form.watch(name), isError: !!state.error?.message, feedback: state.error?.message }
    }, [form.formState.errors])
}

const defaultMessagePipe: MessagePipeFunction = (error) => String(error?.code)

const useApplyFormErrors = <TFields extends FieldValues>(form: UseFormReturn<TFields>) => {
    return (errors: IValidationErrors<keyof TFields>, messagePipe: MessagePipeFunction = defaultMessagePipe) => {
        for (const key of Object.keys(errors) as Path<TFields>[]) {
            const value = errors[key] as Exclude<IValidationError['errors'], undefined>
            form.setError(key, { message: messagePipe(value) })
        }
    }
}

export { useRegisterField, useApplyFormErrors, type MessagePipeFunction }
