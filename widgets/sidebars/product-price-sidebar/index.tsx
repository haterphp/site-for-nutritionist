import { useMemo, useState } from "react"

import { Button, CountInput } from "@/shared/components"

import RequestCallbackModal from "@/widgets/modals/request-callback-modal"

import './index.css'
import { useCartStore } from "@/entities/cart"
import { ICatalogEntity } from "@/entities/catalog"

export function ProductPriceSidebar (props: ICatalogEntity) {
    const { id, price, images, title } = props

    const entities = useCartStore(state => state.entities)
    const addProductToCart = useCartStore(state => state.add)
    const updateProductInCart = useCartStore(state => state.update)

    const entityInCart = useMemo(() => entities.find(e => e.product.id === id), [entities, id])
    const [count, setCount] = useState(entityInCart?.count ?? 1)

    const finalPrice = useMemo(() => price * count, [price, count])

    const handleOnCountChange = (value: number): void => {
        setCount(value)
        if (entityInCart !== undefined) updateProductInCart({ ...entityInCart, count: value })
    }

    const handleOnAddToCart = (): void => {
        addProductToCart({
            count,
            product: { id, title, price, image: images[0] }
        })
    }

    return (
        <div className="paper product-sidebar">
            <h3 className="product-price">{finalPrice} ₽</h3>

            <div className="product-count">
                <h5>Количество товара</h5>

                <CountInput defaultValue={entityInCart?.count ?? 1} onChange={handleOnCountChange}/>
            </div>

            <div className="product-sidebar-buttons">
                {
                entityInCart === undefined 
                    ? (<Button className="w-full" isDisabled={count <= 0} onClick={handleOnAddToCart}>Добавить в корзину</Button>)
                    : (<div className="product-sidebar-badge">Товар уже в корзине!</div>)
                }
                
                <span>или</span>

                <RequestCallbackModal Button={({ open }) => (<span className="product-sidebar-request-callback" onClick={open}>Заказать обратный звонок</span>)} />
            </div>
        </div>
    )
}