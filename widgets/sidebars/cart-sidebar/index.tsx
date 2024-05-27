'use client'

import { useCartStore } from '@/entities/cart'
import { useMemo } from 'react'

import './index.css'
import { Button } from '@/shared/components'
import { useCreateOrderRequest } from '@/entities/orders'
import { useUserStore } from '@/entities/user'

export function CartSidebar(): JSX.Element {
    const { entities } = useCartStore(state => state)
    const user = useUserStore(state => state.user)

    const totalSum = useMemo(() => entities.reduce((prev, item) => prev + item.count * item.product.price, 0), [entities])
    
    const { onSubmit } = useCreateOrderRequest()

    return (
        <div className="paper cart-sidebar">
            <h3 className="cart-sidebar-total-sum">Итого - {totalSum} ₽</h3>

            <Button isDisabled={entities.length <= 0 || user === null} onClick={onSubmit}>Перейти к оформлению</Button>

            <p className='cart-sidebar-comment'>
                Доступные способы доставки можно выбрать при оформлении заказа
            </p>
        </div>
    )
}