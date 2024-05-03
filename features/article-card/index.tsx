import { IArticleEntity } from "@/entities/articles";

export function ArticleCard(props: IArticleEntity) {
    return (
        <article className="article-card">{props.id}</article>
    )
}