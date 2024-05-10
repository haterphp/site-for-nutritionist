import { IArticleEntity } from "@/entities/articles"
import { ICommentEntity } from "../entity"

interface ICommentsStoreState {
    entities: ICommentEntity[]
}

interface ICommentsStoreActions {
    loadEntitiesForArticle(id: IArticleEntity['id']): Promise<void>
    reset(): void
}

type CommentsStore = ICommentsStoreState & ICommentsStoreActions

export type { CommentsStore }