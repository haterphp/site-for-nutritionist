'use client';

import { Button, Input } from "@/shared/components";
import dynamic from "next/dynamic";

const AuthLayout = dynamic(() => import("@/widgets/layouts/auth-layout"));

export default function LoginPage() {
    return (
        <AuthLayout title="Авторизация" >
            <Input label={"Почта"} />
            
            <Input label={"Пароль"} />

            <Button className="w-full">Войти</Button>
        </AuthLayout>
    )
}