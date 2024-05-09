import { IArticleEntity } from "../entity";

export interface IArticleRepository {
    getAll(): Promise<IArticleEntity[]>
    getOne(id: IArticleEntity['id']): Promise<IArticleEntity>
}