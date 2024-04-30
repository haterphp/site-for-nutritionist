'use client'

import { ISidebarItem } from "@/features/sidebar"
import { useDetectPath } from "@/shared/helpers/paths"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"

const Sidebar = dynamic(() => import('@/features/sidebar'))

export default function AccountSidebar(): JSX.Element {
    const router = useRouter()
    const detect = useDetectPath()
    
    const handleOnClick = useCallback((_: unknown, url: string) => {
        router.push(url)
    }, [router])

    const sidebarItems = useMemo<ISidebarItem[]>(() => [
        { id: '/account', label: 'Личные данные', isActive: detect, onClick: handleOnClick },
        { id: '/account/favorite', label: 'Избранное', isActive: detect, onClick: handleOnClick },
        { id: '/account/orders', label: 'Заказы', isActive: detect, onClick: handleOnClick },
    ], [handleOnClick, detect])
    
    return (
        <Sidebar items={sidebarItems} />
    )
}