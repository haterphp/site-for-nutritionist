import { IArticleEntity } from "@/entities/articles";
import { ICommentEntity } from "../entity";

export interface ICommentsRepository {
    getAll(id: IArticleEntity['id']): Promise<ICommentEntity[]>
}