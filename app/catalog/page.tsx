'use client'

import { ICatalogEntity, useCatalogStore } from '@/entities/catalog'
import { Card } from '@/features/cards/product-card'
import { CardsGridTemplate } from '@/widgets/layouts/cards-grid'

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const LayoutWithSidebar = dynamic(() => import('@/widgets/layouts/sidebar-layout'))
const CatalogFilter = dynamic(() => import('@/widgets/sidebars/catalog-filters'))

export default function CatalogPage() {
    const { data, load } = useCatalogStore(state => ({
        data: state.cards,
        load: state.loadCardsByCategory
    }))

    const searchParams = useSearchParams()

    useEffect(() => {
        const category = searchParams.get('category')
        void load(category === null ? undefined : category)
    }, [load, searchParams])

    return (
        <LayoutWithSidebar Sidebar={<CatalogFilter />}>
            <h1 data-title>Каталог</h1>

            <CardsGridTemplate<ICatalogEntity> items={data} CardFactory={Card}/>
        </LayoutWithSidebar>
    )
}