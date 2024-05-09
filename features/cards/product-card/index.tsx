'use client'

import Image from "next/image"
import { MouseEventHandler, useMemo } from "react"

import { ICatalogEntity } from "@/entities/catalog"
import { ICardsGridContenxt, useCardsContext } from "@/widgets/layouts/cards-grid/context"

import { Button } from "@/shared/components"

import './index.css'

interface IProductCardsContext extends ICardsGridContenxt {
    isHideButton: boolean
}

export function ProductCard(props: ICatalogEntity): JSX.Element {
    const { url, title, description, price } = props

    const { isHideButton, onClick } = useCardsContext<IProductCardsContext>()

    const formattedPrice = useMemo(() => {
        return `${price} ₽`
    }, [price])

    const handleOnClick: MouseEventHandler = (e) => {
        onClick && onClick(e, props)
    }

    return (
        <article className="product-card" onClick={handleOnClick}>
            <Image
                className="product-card-image"
                src={url}
                alt={title}
                fill
            />

            <h3 className="product-card-title">{title}</h3>

            <p className="product-card-description">{description}</p>

            <p className="product-card-price">{formattedPrice}</p>

        { !isHideButton && (
            <Button className="w-full mt-3">
                Добавить в корзину
            </Button>
        )}
        </article>
    )
}