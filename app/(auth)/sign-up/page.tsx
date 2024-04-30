'use client';

import { useSingUpRequest } from "@/entities/user/requests";
import { Button, Input } from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthLayout = dynamic(() => import("@/widgets/layouts/auth-layout"));

const SingUpPageFooter = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-1">
            <Link href={'/login'} className="link">Войти в систему</Link>
        </div>
    )
}

export default function LoginPage() {
    const {form, onSubmit} = useSingUpRequest()
    const register = useRegisterField(form)

    return (
        <AuthLayout
        title="Создать аккаунт"
        onSubmit={form.handleSubmit(onSubmit)}
        Footer={<SingUpPageFooter />}
        >
            <Input label={"ФИО"} {...register('name')} />

            <Input label={"Почта"} {...register('email')} />
            
            <Input type="password" label={"Пароль"} {...register('password')} />

            <Button type="submit" className="w-full">Создать</Button>
        </AuthLayout>
    )
}