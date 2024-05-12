'use client'

import { useCartStore } from '@/entities/cart'
import { useMemo } from 'react'

import './index.css'
import { Button } from '@/shared/components'

export function CartSidebar(): JSX.Element {
    const { entities } = useCartStore(state => state)

    const totalSum = useMemo(() => entities.reduce((prev, item) => prev + item.count * item.product.price, 0), [entities])

    return (
        <div className="paper cart-sidebar">
            <h3 className="cart-sidebar-total-sum">Итого - {totalSum} ₽</h3>

            <Button isDisabled={entities.length <= 0}>Перейти к оформлению</Button>

            <p className='cart-sidebar-comment'>
                Доступные способы доставки можно выбрать при оформлении заказа
            </p>
        </div>
    )
}