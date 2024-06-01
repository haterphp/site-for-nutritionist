'use client'

import { useCartStore } from '@/entities/cart'
import { useMemo } from 'react'

import './index.css'
import { Button, useModal } from '@/shared/components'
import { useUserStore } from '@/entities/user'
import dynamic from 'next/dynamic'

const MakeOrderModal = dynamic(() => import('@/widgets/modals/make-order-modal'))

export function CartSidebar(): JSX.Element {
    const { entities } = useCartStore(state => state)
    const user = useUserStore(state => state.user)

    const orderModal = useModal()

    const totalSum = useMemo(() => entities.reduce((prev, item) => prev + item.count * item.product.price, 0), [entities])
    
    return (
        <div className="paper cart-sidebar">
            <h3 className="cart-sidebar-total-sum">Итого - {totalSum} ₽</h3>

            <Button
                isDisabled={entities.length <= 0 || user === null}
                onClick={orderModal.open}
            >
                Перейти к оформлению
            </Button>

            <MakeOrderModal state={orderModal} />

            <p className='cart-sidebar-comment'>
                Доступные способы доставки можно выбрать при оформлении заказа
            </p>
        </div>
    )
}