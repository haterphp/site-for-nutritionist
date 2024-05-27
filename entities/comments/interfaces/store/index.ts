import { IArticleEntity } from "@/entities/articles"
import { ICommentEntity } from "../entity"
import { ICreateCommentPort } from "../port"

interface ICommentsStoreState {
    entities: ICommentEntity[]
}

interface ICommentsStoreActions {
    createComment(port: ICreateCommentPort): Promise<void>
    loadEntitiesForArticle(id: IArticleEntity['id']): Promise<void>
    reset(): void
}

type CommentsStore = ICommentsStoreState & ICommentsStoreActions

export type { CommentsStore }