'use client'

import Image from "next/image"
import { useMemo } from "react"

import { ICatalogEntity } from "@/entities/catalog"

import { Button } from "@/shared/components"
import './index.css'

export function ProductCard(props: ICatalogEntity): JSX.Element {
    const { id, url, title, description, price } = props

    const formattedPrice = useMemo(() => {
        return `${price} ₽`
    }, [price])

    return (
        <article className="product-card">
            <Image
                className="product-card-image"
                src={url}
                alt={title}
                fill
            />

            <h3 className="product-card-title">{title}</h3>

            <p className="product-card-description">{description}</p>

            <p className="product-card-price">{formattedPrice}</p>

            <Button className="w-full">
                Добавить в корзину
            </Button>
        </article>
    )
}