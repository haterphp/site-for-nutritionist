'use client'

import Image from "next/image"
import { MouseEventHandler, useMemo } from "react"

import { ICatalogEntity } from "@/entities/catalog"
import { ICardsGridContenxt, useCardsContext } from "@/widgets/layouts/cards-grid/context"

import { Button } from "@/shared/components"

import './index.css'
import { useRouter } from "next/navigation"
import { ICartItemEntity, useCartStore } from "@/entities/cart"

interface IProductCardsContext extends ICardsGridContenxt {
    isHideButton: boolean
}

export function ProductCard(props: ICatalogEntity): JSX.Element {
    const { id, images, title, description, price } = props

    const router = useRouter()

    const { isHideButton, onClick } = useCardsContext<IProductCardsContext>()

    const addProductToCart = useCartStore(state => state.add)

    const formattedPrice = useMemo(() => {
        return `${price} ₽`
    }, [price])

    const handleOnAddToCart: MouseEventHandler = (e) => {
        e.stopPropagation()

        addProductToCart({
            count: 1,
            product: { id, title, image: images[0] }
        })
    } 

    const handleOnClick: MouseEventHandler = (e) => {
        router.push(`/catalog/${id}`)
        onClick && onClick(e, props)
    }

    return (
        <article className="product-card" onClick={handleOnClick}>
            <Image
                className="product-card-image"
                src={images[0]}
                alt={title}
                fill
            />

            <h3 className="product-card-title">{title}</h3>

            <p className="product-card-description">{description}</p>

            <p className="product-card-price">{formattedPrice}</p>

        { !isHideButton && (
            <Button className="w-full mt-3" onClick={handleOnAddToCart}>
                Добавить в корзину
            </Button>
        )}
        </article>
    )
}