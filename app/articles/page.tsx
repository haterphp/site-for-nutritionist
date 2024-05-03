'use client'

import { useEffect } from 'react'

import { useArticleStore } from '@/entities/articles'

import { CardsGridTemplate } from '@/widgets/layouts/cards-grid'

import { ArticleCard } from '@/features/article-card'

import './index.css'

export default function ArticlePage(): JSX.Element {
    const { data, load } = useArticleStore((state) => ({
        data: state.cards,
        load: state.loadCards
    }))

    useEffect(() => {
        load()
    }, [load])

    return (
        <div className='articles-page'>
            <h1 className="articles-title">Статьи</h1>


            <CardsGridTemplate items={data} CardFactory={ArticleCard} />
        </div>
    )
}