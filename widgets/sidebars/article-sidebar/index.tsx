import { IArticleEntity, useArticleStore } from "@/entities/articles"
import { ArticleCard } from "@/features/cards/article-card"
import { CardsGridTemplate } from "@/widgets/layouts/cards-grid"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import './index.css'

export default function ArticleSidebar() {

    const router = useRouter()

    const articles = useArticleStore(state => state.cards)
    const load = useArticleStore(state => state.loadCards)

    const handleOnClick = (_: unknown, item: IArticleEntity) => {
        router.push(`/articles/${item.id}`)
    }

    useEffect(() => {
        load()
    }, [load])

    return (
        <div className="article-sidebar">
            <h2 className="article-sidebar-title">Другие посты</h2>

            <CardsGridTemplate
                items={articles.slice(0, 3)}
                onClick={handleOnClick}
                CardFactory={ArticleCard}
                className="lg:!grid-cols-1 !grid-cols-2"
            />
        </div>
    )
}