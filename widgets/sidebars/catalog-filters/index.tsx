'use client'

import { INavbarItem, Navbar } from "@/shared/components"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"

export default function CatalogFilter(): JSX.Element {
    const { push } = useRouter()
    const { get } = useSearchParams()
    
    const handleOnClick = useCallback((_: unknown, query: string) => {
        if (query === 'all')push(`/catalog`)
        else push(`/catalog?category=${query}`)
    }, [push])

    const isActive = useCallback((query: string) => {
        const category = get('category') ?? 'all'
        return category === query
    }, [get])

    const items = useMemo<INavbarItem[]>(() => [
        { id: 'all', label: 'Все услуги', onClick: handleOnClick, isActive },
        { id: 'nutritional-supplement', label: 'БАДы', onClick: handleOnClick, isActive },
        { id: 'authors-kit', label: 'Авторские наборы', onClick: handleOnClick, isActive },
        { id: 'consultations', label: 'Консультации', onClick: handleOnClick, isActive },
    ], [handleOnClick, isActive])
    
    return <Navbar items={items} />
}