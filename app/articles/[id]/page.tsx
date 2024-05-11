'use client'

import { PageHeader } from "@/features/page-header"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import dynamic from "next/dynamic"

import LayoutWithSidebar from "@/widgets/layouts/sidebar-layout"
import { IArticleEntity, useArticleStore } from "@/entities/articles"
import { RichText } from "@/shared/components"

import './index.css'

const CommentsList = dynamic(() => import('@/widgets/comment-list'))
const ArticleSidebar = dynamic(() => import('@/widgets/sidebars/article-sidebar'))

export default function CurrentArticlePage(): ReactNode {
    const params = useParams()

    const [article, setArticle] = useState<IArticleEntity | null>(null)
    const getCardById = useArticleStore(state => state.getCardById)

    useEffect(() => {
        getCardById(params.id as string).then(setArticle)
    }, [params, getCardById])

    if (article === null) return null

    const { title, content, url } = article

    return (
        <LayoutWithSidebar Sidebar={<ArticleSidebar id={article.id} />} isReverse className="article-page">
            <PageHeader
                title={title}
                BackButton={{ visible: true, url: '/articles', text: 'Вернуться к статьям' }}
            />

            <Image
                src={url}
                alt={url}
                fill
                className="article-page-image"
            />

            <RichText content={content} />
        
            <CommentsList articleId={article.id} className="mt-5"/>
        </LayoutWithSidebar>
    )
}