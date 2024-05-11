import { createStore, useStore } from "zustand";

import { CatalogStore, ICatalogEntity } from "../interfaces";
import { CatalogRepository } from "../repository";

const catalogRepository = new CatalogRepository()

export const catalogStore = createStore<CatalogStore>()((set, get) => ({
    cards: [],
    categories: [],

    getOneById: async (id: ICatalogEntity['id']): Promise<ICatalogEntity> => {
        const element = get().cards.find(item => item.id === id)
        
        if (element === undefined) {
            return catalogRepository.getOneProduct(id).then(item => {
                set((prev) => ({ ...prev, cards: [...prev.cards, item] }))
                return item
            })
        }

        return Promise.resolve(element)
    },

    loadCategories: async (): Promise<void> => {
        catalogRepository.getCategories().then(categories => {
            set((prev) => ({ ...prev, categories }))
        })
    },

    loadCardsByCategory: async (category?: string) => {
        catalogRepository.getAll(category).then((cards) => {
            set((prev) => ({ ...prev, cards }))
        })
    },
}))

export const useCatalogStore = <T, >(
    selector: (store: CatalogStore) => T
): T => useStore(catalogStore, selector)
