'use client';

import { useLoginRequest } from "@/entities/user/requests";
import { Button, Input } from "@/shared/components";
import { useRegisterField } from "@/shared/helpers/forms";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthLayout = dynamic(() => import("@/widgets/layouts/auth-layout"));

const LoginPageFooter = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-1">
            <Link href={'/sign-up'} className="link">Создать аккаунт</Link>
        </div>
    )
}

export default function LoginPage() {
    const { form, onSubmit } = useLoginRequest()
    const register = useRegisterField(form)

    return (
        <AuthLayout
            title="Вход в аккаунт"
            Footer={<LoginPageFooter />}
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <Input label={"Почта"} {...register('email')} />
            
            <Input type="password" label={"Пароль"}  {...register('password')} />

            <Button type="submit" className="w-full">Войти</Button>
        </AuthLayout>
    )
}