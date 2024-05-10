'use client'

import { ICatalogEntity, useCatalogStore } from '@/entities/catalog'
import { ProductCard } from '@/features/cards/product-card'
import { PageHeader } from '@/features/page-header'
import { CardsGridTemplate } from '@/widgets/layouts/cards-grid'
import LayoutWithSidebar from '@/widgets/layouts/sidebar-layout'

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CatalogFilter = dynamic(() => import('@/widgets/sidebars/catalog-filters'))

export default function CatalogPage() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const { data, load } = useCatalogStore(state => ({
        data: state.cards,
        load: state.loadCardsByCategory
    }))

    useEffect(() => {
        const category = searchParams.get('category')
        void load(category === null ? undefined : category)
    }, [load, searchParams])

    const handleOnClick = (_: unknown, item: ICatalogEntity): void => {
        router.push(`/catalog/${item.id}`)
    }
 

    return (
        <LayoutWithSidebar Sidebar={<CatalogFilter />}>
            <PageHeader title='Каталог' />

            <CardsGridTemplate
                items={data}
                CardFactory={ProductCard}
                onClick={handleOnClick}
            />   
        </LayoutWithSidebar>
    )
}