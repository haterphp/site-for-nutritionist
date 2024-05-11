import { ICatalogEntity, ICategoryEntity } from "../entity"

interface ICatalogStoreState {
    cards: ICatalogEntity[]
    categories: ICategoryEntity[]
}

interface ICatalogStoreActions {
    getOneById(id: ICatalogEntity['id']): Promise<ICatalogEntity>

    loadCategories(): Promise<void>
    loadCardsByCategory(category?: string): Promise<void>
}

type CatalogStore = ICatalogStoreState & ICatalogStoreActions

export type { CatalogStore }