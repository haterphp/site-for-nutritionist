'use client'

import { useOrderStore } from "@/entities/orders"
import { OrderCard } from "@/features/cards/order-card"
import { PageHeader } from "@/features/page-header"
import { CardsGridTemplate } from "@/widgets/layouts/cards-grid"
import { useEffect } from "react"

export default function AccountOrdersPage() {

    const { data, load } = useOrderStore(state => ({
        data: state.entities,
        load: state.loadEntities
    }))

    useEffect(() => {
        load()
    }, [load])

    return (
        <>
            <PageHeader title='Мои заказы' />

            <CardsGridTemplate
                items={data}
                CardFactory={OrderCard}
            />    
        </>
    )
}