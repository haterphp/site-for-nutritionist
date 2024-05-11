import { useMemo, useState } from "react"

import { Button, CountInput } from "@/shared/components"

import RequestCallbackModal from "@/features/modals/request-callback-modal"

import './index.css'


interface IProductPriceSidebarProps {
    price: number
}

export function ProductPriceSidebar (props: IProductPriceSidebarProps) {
    const { price } = props

    const [count, setCount] = useState(1)

    const finalPrice = useMemo(() => price * count, [price, count])

    return (
        <div className="paper product-sidebar">
            <h3 className="product-price">{finalPrice} ₽</h3>

            <div className="product-count">
                <h5>Количество товара</h5>

                <CountInput value={count} setValue={setCount}/>
            </div>

            <div className="product-sidebar-buttons">
                <Button className="w-full" isDisabled={count <= 0}>Добавить в корзину</Button>
                
                <span>или</span>

                <RequestCallbackModal Button={({ open }) => (<span className="product-sidebar-request-callback" onClick={open}>Заказать обратный звонок</span>)} />
            </div>
        </div>
    )
}