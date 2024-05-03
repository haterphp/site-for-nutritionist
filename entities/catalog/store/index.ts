import { createStore, useStore } from "zustand";

import { CatalogStore } from "../interfaces";
import { CatalogRepository } from "../repository";

const catalogRepository = new CatalogRepository()

export const catalogStore = createStore<CatalogStore>()((set) => ({
    cards: [],
    loadCardsByCategory: async (category?: string) => {
        catalogRepository.getAll(category).then((cards) => {
            set((prev) => ({ ...prev, cards }))
        })
    },
}))

export const useCatalogStore = <T, >(
    selector: (store: CatalogStore) => T
): T => useStore(catalogStore, selector)
