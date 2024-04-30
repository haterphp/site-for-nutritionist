'use client'

import { Button, Input } from "@/shared/components";

export default function EditAccountInfoPage(): JSX.Element {
    return (
        <>
            <h1 className="account-title">Личные данные</h1>

            <form className="max-w-[450px]">
                <Input label={'ФИО'} />
                 
                <Input label={'Телефон'} />
                
                <Input label={'Почта'} isDisabled value={'Test@mail.ru'} />

                <Button color="primary">Сохранить</Button>
            </form>
        </>
    )
}