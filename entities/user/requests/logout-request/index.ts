'use client';

import { HttpAppService } from "@/shared/utils";
import { useUserStore } from "../../provider";
import { useRouter } from "next/navigation";
import { HttpHeaders, LocalStorageValues } from "@/shared/enums";

interface IUseLogoutRequest {
    onSubmit: () => void
}

export const useLogoutRequest = (): IUseLogoutRequest => {
    const router = useRouter()
    const setUser = useUserStore(state => state.setUser)

    const handleOnSubmit = (): void => {
        router.push('/')

        window.localStorage.removeItem(LocalStorageValues.ACCESS_TOKEN)
        HttpAppService.setHeaders(HttpHeaders.AUTHORIZATION, '')
        setUser(null)
    }

    return { onSubmit: handleOnSubmit }
}