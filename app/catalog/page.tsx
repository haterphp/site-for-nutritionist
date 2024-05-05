'use client'

import { ICatalogEntity, useCatalogStore } from '@/entities/catalog'
import { ProductCard } from '@/features/cards/product-card'
import { PageHeader } from '@/features/page-header'
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
            <PageHeader title='Каталог' />

            <CardsGridTemplate<ICatalogEntity> items={data} CardFactory={ProductCard}/>
        </LayoutWithSidebar>
    )
}