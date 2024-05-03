import { create, useStore } from "zustand";

import { ArticleStore } from "../interfaces";
import { AritcleRepository } from "../repository";

const repository = new AritcleRepository()

export const articleStore = create<ArticleStore>()((set) => ({
    cards: [],
    loadCards: async () => {
        repository.getAll().then((cards) => set((prev) => ({ ...prev, cards })))
    }
}))

export const useArticleStore = <T, >(
    selector: (store: ArticleStore) => T
): T => useStore(articleStore, selector)