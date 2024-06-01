'use client'

import { useUserStore } from "@/entities/user";
import { useUpdateUserRequest } from "@/entities/user/requests";
import { PageHeader } from "@/features/page-header";
import { Button, Input } from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";

export default function EditAccountInfoPage(): JSX.Element {
    const user = useUserStore(state => state.user)

    const { form, onSubmit } = useUpdateUserRequest()

    const register = useRegisterField(form)

    return (
        <>
            <PageHeader title='Личные данные' />

            <form className="max-w-[450px] flex flex-col gap-1 items-start" onSubmit={form.handleSubmit(onSubmit)}>
                <Input label={'ФИО'} className="w-full" {...register('name')} />
                                 
                <Input label={'Почта'} className="w-full" isDisabled value={user?.login} />

                <Button isDisabled={!form.formState.isDirty} type="submit" color="primary">Сохранить</Button>
            </form>
        </>
    )
}