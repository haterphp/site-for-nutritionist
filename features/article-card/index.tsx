'use client'

import Image from "next/image";
import { MouseEventHandler, useMemo } from "react";
import { IArticleEntity } from "@/entities/articles";
import { Button } from "@/shared/components";

import './index.css'
import { useCardsContext } from "@/widgets/layouts/cards-grid/context";

export function ArticleCard(props: IArticleEntity) {
    const { id, content, url, title } = props
    
    const { onClick } = useCardsContext()

    const handleOnClick: MouseEventHandler = (e) => {
        onClick && onClick(e, props)
    }

    const shortDescription = useMemo(() => content.slice(0, 150), [content])
    
    return (
        <article className="article-card">
            <Image className="article-image" src={url} alt={title} fill/>

            <h2 className="article-title">{title}</h2>

            <p className="article-description">{shortDescription}</p>

            <Button color="secondary" onClick={handleOnClick}>Подробнее</Button>
        </article>
    )
}