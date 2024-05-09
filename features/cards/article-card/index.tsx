'use client'

import Image from "next/image";

import { MouseEventHandler } from "react";

import { IArticleEntity } from "@/entities/articles";

import { Button } from "@/shared/components";

import { useCardsContext } from "@/widgets/layouts/cards-grid/context";

import './index.css'

export function ArticleCard(props: IArticleEntity) {
    const { content, url, title } = props
    
    const { onClick } = useCardsContext()

    const handleOnClick: MouseEventHandler = (e) => {
        onClick && onClick(e, props)
    }
    
    return (
        <article className="article-card">
            <Image className="article-image" src={url} alt={title} fill/>

            <h2 className="article-title">{title}</h2>

            <p className="article-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ab autem voluptatum repudiandae adipisci tempora eos ullam ea quis esse nulla voluptas magnam ratione dolores!</p>

            <Button color="secondary" onClick={handleOnClick}>Подробнее</Button>
        </article>
    )
}