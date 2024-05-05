'use client'

import { useEffect } from 'react'

import { IArticleEntity, useArticleStore } from '@/entities/articles'

import { CardsGridTemplate } from '@/widgets/layouts/cards-grid'

import { ArticleCard } from '@/features/cards/article-card'

import { useRouter } from 'next/navigation'
import { PageHeader } from '@/features/page-header'

export default function ArticlePage(): JSX.Element {
    const router = useRouter()
    
    const { data, load } = useArticleStore((state) => ({
        data: state.cards,
        load: state.loadCards
    }))

    const handleOnClick = (_: unknown, item: IArticleEntity): void => {
        router.push(`/articles/${item.id}`)
    }

    useEffect(() => {
        load()
    }, [load])

    return (
        <div className='flex flex-col gap-5'>
            <PageHeader title='Статьи' />

            <CardsGridTemplate items={data} CardFactory={ArticleCard} onClick={handleOnClick} />
        </div>
    )
}