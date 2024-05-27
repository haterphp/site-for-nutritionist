import { IArticleEntity } from "@/entities/articles";
import { ICommentEntity } from "../entity";
import { ICreateCommentPort } from "../port";

export interface ICommentsRepository {
    getAll(id: IArticleEntity['id']): Promise<ICommentEntity[]>
    create(port: ICreateCommentPort): Promise<ICommentEntity>
}