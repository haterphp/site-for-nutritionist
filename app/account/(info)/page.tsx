'use client'

import { useUserStore } from "@/entities/user";
import { PageHeader } from "@/features/page-header";
import { Button, Input } from "@/shared/components";

export default function EditAccountInfoPage(): JSX.Element {
    const user = useUserStore(state => state.user)

    return (
        <>
            <PageHeader title='Личные данные' />

            <form className="max-w-[450px]">
                <Input label={'ФИО'} value={user?.name ?? ""} />
                                 
                <Input label={'Почта'} isDisabled value={user?.login} />

                <Button color="primary">Сохранить</Button>
            </form>
        </>
    )
}