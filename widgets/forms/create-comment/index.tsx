import { IArticleEntity } from "@/entities/articles";
import { useCreateComment } from "@/entities/comments";
import { useUserStore } from "@/entities/user";
import { Button, Input } from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";

interface ICreateCommentProps {
    articleId: IArticleEntity['id']
}

export function CreateCommentForm(props: ICreateCommentProps) {
    const { form, onSubmit } = useCreateComment(props.articleId)
    const register = useRegisterField(form)

    const user = useUserStore(state => state.user)

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 items-start">
            <Input
                type="textarea"
                label={"Комментарий"}
                placeholder="Оставьте ваш комментарий"
                rows={3}
                className="w-full"
                isDisabled={user === null}
                {...register('comment')}
            />

            <Button type="submit" isDisabled={user === null}>Отправить</Button>
        </form>
    )
}