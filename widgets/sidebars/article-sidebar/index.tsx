import { IArticleEntity, useArticleStore } from "@/entities/articles"
import { ArticleCard } from "@/features/cards/article-card"
import { CardsGridTemplate } from "@/widgets/layouts/cards-grid"
import { useEffect, useMemo } from "react"
import './index.css'

interface IArticleSidebarProps {
    id: IArticleEntity['id']
}

export default function ArticleSidebar(props: IArticleSidebarProps) {
    const {id: articleId} = props

    const cards = useArticleStore(state => state.cards)
    const load = useArticleStore(state => state.loadCards)

    const articles = useMemo(() => cards.filter(item => item.id !== articleId).slice(0, 3), [cards, articleId])

    useEffect(() => {
        load()
    }, [load])

    return (
        <div className="article-sidebar">
            <h2 className="article-sidebar-title">Другие посты</h2>

            <CardsGridTemplate
                items={articles.slice(0, 3)}
                CardFactory={ArticleCard}
                className="lg:!grid-cols-1 !grid-cols-2"
            />
        </div>
    )
}