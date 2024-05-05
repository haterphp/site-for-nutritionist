'use client'

import Image from "next/image"
import { useMemo } from "react"

import { ICatalogEntity } from "@/entities/catalog"

import './index.css'
import { Button } from "@/shared/components"

export function Card(props: ICatalogEntity): JSX.Element {
    const { id, url, title, description, price } = props

    const formattedPrice = useMemo(() => {
        return `${price} ₽`
    }, [price])

    return (
        <article className="card">
            <Image
                className="card-image"
                src={url}
                alt={title}
                fill
            />

            <h3 className="card-title">{title}</h3>

            <p className="card-description">{description}</p>

            <p className="card-price">{formattedPrice}</p>

            <Button className="w-full">
                Добавить в корзину
            </Button>
        </article>
    )
}