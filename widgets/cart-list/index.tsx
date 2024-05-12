'use client'

import { useCartStore } from "@/entities/cart"

import './index.css'
import { CartCard } from "@/features/cards/cart-card"
import { useRouter } from "next/navigation"
import { Button } from "@/shared/components"

export function CartProductList() {
    const router = useRouter()

    const { entities, ...handlers } = useCartStore(state => state)

    const handleOnRedirect = (): void => {
        router.push('/catalog')
    }

    if (entities.length <= 0) {
        return (
            <div className="flex flex-col gap-5 items-start">
                <h3 className="text-slate-400">Корзина пока пуста...</h3>
                <Button onClick={handleOnRedirect}>Перейти к каталогу</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col">
                { entities.map(item => <CartCard key={item.id} {...item} update={handlers.update} remove={handlers.remove} />) }
            </div>

            <button className="cart-list-clear-all ml-auto" onClick={handlers.reset}>Очистить корзину</button>
        </div>
    )
}