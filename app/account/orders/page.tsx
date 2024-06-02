'use client'

import { useOrderStore } from "@/entities/orders"
import { useUserStore } from "@/entities/user"
import { OrderCard } from "@/features/cards/order-card"
import { PageHeader } from "@/features/page-header"
import { CardsGridTemplate } from "@/widgets/layouts/cards-grid"
import { useEffect } from "react"

export default function AccountOrdersPage() {

    const user = useUserStore(state => state.user)

    const { data, load } = useOrderStore(state => ({
        data: state.entities,
        load: state.loadEntities
    }))

    useEffect(() => {
        if (user !== null) load(user.id)
    }, [load, user])

    return (
        <>
            <PageHeader title='Мои заказы' />

            <CardsGridTemplate
                items={data}
                className="!grid-cols-2"
                CardFactory={OrderCard}
            />    
        </>
    )
}