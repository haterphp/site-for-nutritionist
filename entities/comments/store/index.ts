import { create, useStore } from "zustand";

import { CommentsStore, ICreateCommentPort } from "../interfaces";
import { IArticleEntity } from "@/entities/articles";
import { CommentsRepository } from "../repository";

const repository = new CommentsRepository()

export const commentsStore = create<CommentsStore>()((set, get) => ({
    entities: [],
    loadEntitiesForArticle: async (id: IArticleEntity['id']): Promise<void> => {
        repository.getAll(id).then((entities) => {
            set(prev => ({ ...prev, entities }))
        })
    },
    
    createComment: async (port: ICreateCommentPort) => {
        repository.create(port).then((comment) => {
            set((prev) => ({ ...prev, entities: [comment].concat(prev.entities) }))
        })    
    },

    reset: () => {
        set((prev) => ({ ...prev, entities: [] }))
    }
}))

export const useCommentsStore = <T, >(
    selector: (store: CommentsStore) => T
): T => useStore(commentsStore, selector)