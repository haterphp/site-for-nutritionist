import { IArticleEntity } from "@/entities/articles"
import { IUser } from "@/shared/interfaces"

export interface ICreateCommentPort {
    comment: string
    articleId: IArticleEntity['id']
    userId: IUser['id']
}