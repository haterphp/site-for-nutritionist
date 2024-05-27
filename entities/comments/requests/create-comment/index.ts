'use client'

import { useForm, UseFormReturn } from "react-hook-form"

import { IArticleEntity } from "@/entities/articles"

import { ICreateCommentPort, ICreateCommentErrors } from "../../interfaces"
import { use, useMemo } from "react"
import { useApplyFormErrors } from "@/shared/helpers/forms"
import { ExceptionService, ValidationRunner } from "@/shared/utils"
import { COMMON_ERRORS_MESSAGES } from "@/shared/messages/common"
import { CreateCommentValidators } from "../../validators"
import { useUserStore } from "@/entities/user"
import { useCommentsStore } from "../../store"

type ICreateCommentForm = Pick<ICreateCommentPort, 'comment'>

interface ICreateComment {
    form: UseFormReturn<ICreateCommentForm>
    onSubmit: (data: ICreateCommentForm) => Promise<void>
}

const DEFAULT_VALUES: ICreateCommentForm = {
    comment: '',
}

export const useCreateComment = (articleId: IArticleEntity['id']): ICreateComment => {
    const form = useForm<ICreateCommentForm>({ defaultValues: DEFAULT_VALUES })
    const applyMessageErrors = useApplyFormErrors(form)

    const user = useUserStore(state => state.user)
    const _request = useCommentsStore(state => state.createComment)

    const _validator = useMemo(() => new ValidationRunner(new CreateCommentValidators()), [])

    const handleOnSubmit = async (data: ICreateCommentForm) => {
        try {
            if (user !== null) {
                const payload = { ...data, articleId, userId: user.id }
                _validator.validate(payload)
                await _request(payload)
                form.reset()
            }
        } catch (error) {
            const e = error as ExceptionService<ICreateCommentErrors>
            
            if (e.data !== undefined) {
                applyMessageErrors(e.data, (e) => COMMON_ERRORS_MESSAGES[e.code])
            }
        }
    }

    return { form, onSubmit: handleOnSubmit }
}