import { IArticleEntity } from "../entity";

export interface IArticleRepository {
    getAll(): Promise<IArticleEntity[]>
}