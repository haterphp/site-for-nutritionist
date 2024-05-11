'use client'

import Image from "next/image";

import { MouseEventHandler } from "react";

import { IArticleEntity } from "@/entities/articles";

import { Button } from "@/shared/components";

import { useCardsContext } from "@/widgets/layouts/cards-grid/context";

import './index.css'
import { useRouter } from "next/navigation";

export function ArticleCard(props: IArticleEntity) {
    const { id, description, url, title } = props

    const router = useRouter()
    
    const { onClick } = useCardsContext()

    const handleOnClick: MouseEventHandler = (e) => {
        router.push(`/articles/${id}`)
        onClick && onClick(e, props)
    }
    
    return (
        <article className="article-card">
            <Image className="article-image" src={url} alt={title} fill/>

            <h2 className="article-title">{title}</h2>

            <p className="article-description">{description}</p>

            <Button color="secondary" onClick={handleOnClick}>Подробнее</Button>
        </article>
    )
}