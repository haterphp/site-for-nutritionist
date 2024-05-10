import { ICatalogEntity, ICategoryEntity } from "../entity"

interface ICatalogStoreState {
    cards: ICatalogEntity[]
    categories: ICategoryEntity[]
}

interface ICatalogStoreActions {
    loadCategories(): Promise<void>
    loadCardsByCategory(category?: string): Promise<void>
}

type CatalogStore = ICatalogStoreState & ICatalogStoreActions

export type { CatalogStore }