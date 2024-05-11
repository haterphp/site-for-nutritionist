import { create, useStore } from "zustand";

import { ArticleStore, IArticleEntity } from "../interfaces";
import { AritcleRepository } from "../repository";

const repository = new AritcleRepository()

export const articleStore = create<ArticleStore>()((set, get) => ({
    cards: [],
    getCardById: async (id: IArticleEntity['id']): Promise<IArticleEntity> => {
        const element = get().cards.find(item => item.id === id)
        
        if (element === undefined) {
            return repository.getOne(id).then(item => {
                set((prev) => ({ ...prev, cards: [...prev.cards, item] }))
                return item
            })
        }

        return Promise.resolve(element)
    },
    loadCards: async () => {
        repository.getAll().then((cards) => set((prev) => ({ ...prev, cards })))
    },
}))

export const useArticleStore = <T, >(
    selector: (store: ArticleStore) => T
): T => useStore(articleStore, selector)