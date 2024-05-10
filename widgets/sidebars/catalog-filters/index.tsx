'use client'

import { useCatalogStore } from "@/entities/catalog"
import { INavbarItem, Navbar } from "@/shared/components"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo } from "react"

export default function CatalogFilter(): JSX.Element {
    const { push } = useRouter()
    const { get } = useSearchParams()
    
    const { data, load } = useCatalogStore((state) => ({
        data: state.categories,
        load: state.loadCategories
    }))

    useEffect(() => {
        load()
    }, [load])

    const onClick = useCallback((_: unknown, query: string) => {
        if (query === 'all')push(`/catalog`)
        else push(`/catalog?category=${query}`)
    }, [push])

    const isActive = useCallback((query: string) => {
        const category = get('category') ?? 'all'
        return category === query
    }, [get])
    

    const items = useMemo<INavbarItem[]>(() => {
        return [
            { id: 'all', label: 'Все услуги', onClick, isActive },
            ...data.map(item => ({ id: item.id, label: item.title, onClick, isActive }))
        ]
    }, [onClick, isActive, data])
    
    return <Navbar items={items} />
}