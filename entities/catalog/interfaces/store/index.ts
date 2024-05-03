import { ICatalogEntity } from "../entity"

interface ICatalogStoreState {
    cards: ICatalogEntity[]
}

interface ICatalogStoreActions {
    loadCardsByCategory(category?: string): Promise<void>
}

type CatalogStore = ICatalogStoreState & ICatalogStoreActions

export type { CatalogStore }