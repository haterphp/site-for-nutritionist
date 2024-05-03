'use client'

import { INavbarItem, Navbar } from "@/shared/components/tools"
import { useDetectPath } from "@/shared/helpers/paths"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"

export default function AccountSidebar(): JSX.Element {
    const router = useRouter()
    const detect = useDetectPath()
    
    const handleOnClick = useCallback((_: unknown, url: string) => {
        router.push(url)
    }, [router])

    const items = useMemo<INavbarItem[]>(() => [
        { id: '/account', label: 'Личные данные', isActive: detect, onClick: handleOnClick },
        { id: '/account/favorite', label: 'Избранное', isActive: detect, onClick: handleOnClick },
        { id: '/account/orders', label: 'Заказы', isActive: detect, onClick: handleOnClick },
    ], [handleOnClick, detect])
    
    return <Navbar items={items} />
}