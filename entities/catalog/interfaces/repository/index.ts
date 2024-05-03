import { ICatalogEntity } from "../entity";

export interface ICatalogRepository {
    getAll(catalog: string): Promise<ICatalogEntity[]>
}