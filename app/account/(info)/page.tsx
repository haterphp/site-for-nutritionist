'use client'

import { PageHeader } from "@/features/page-header";
import { Button, Input } from "@/shared/components";

export default function EditAccountInfoPage(): JSX.Element {
    return (
        <>
            <PageHeader title='Личные данные' />

            <form className="max-w-[450px]">
                <Input label={'ФИО'} />
                 
                <Input label={'Телефон'} />
                
                <Input label={'Почта'} isDisabled value={'Test@mail.ru'} />

                <Button color="primary">Сохранить</Button>
            </form>
        </>
    )
}