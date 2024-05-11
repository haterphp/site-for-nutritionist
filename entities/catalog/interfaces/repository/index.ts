import { ICatalogEntity, ICategoryEntity } from "../entity";

export interface ICatalogRepository {
    getAll(catalog: string): Promise<ICatalogEntity[]>
    getCategories(): Promise<ICategoryEntity[]>

    getOneProduct(id: ICatalogEntity['id']): Promise<ICatalogEntity>
}